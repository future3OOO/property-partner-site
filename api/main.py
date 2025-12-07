from fastapi import FastAPI, Form, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Property Partner Forms API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://propertypartner.co.nz", "https://www.propertypartner.co.nz"],
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["*"],
)

SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "hello@propertypartner.co.nz"
SMTP_PASS = "uspi yvon utjt efts"
TO_EMAIL = "hello@propertypartner.co.nz"

def send_email(subject: str, body: str, reply_to: str = None, attachments: list = None):
    msg = MIMEMultipart()
    msg["Subject"] = subject
    msg["From"] = SMTP_USER
    msg["To"] = TO_EMAIL
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.attach(MIMEText(body, "plain"))
    
    # Attach files
    if attachments:
        for filename, file_content, content_type in attachments:
            # Determine MIME type
            maintype, subtype = (content_type or "application/octet-stream").split("/", 1) if "/" in (content_type or "") else ("application", "octet-stream")
            part = MIMEBase(maintype, subtype)
            part.set_payload(file_content)
            encoders.encode_base64(part)
            part.add_header("Content-Disposition", "attachment", filename=filename)
            msg.attach(part)
    
    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
        logger.info(f"Email sent: {subject}")
        return True
    except Exception as e:
        logger.error(f"Email failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email")

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/contact")
async def contact_form(request: Request):
    content_type = request.headers.get("content-type", "")
    
    if "application/json" in content_type:
        data = await request.json()
        name = data.get("name", "")
        email = data.get("email", "")
        phone = data.get("phone", "")
        message = data.get("message", "")
    else:
        form = await request.form()
        name = form.get("name", "")
        email = form.get("email", "")
        phone = form.get("phone", "")
        message = form.get("message", "")
    
    body = f"""New Contact Form Submission
----------------------------------------
Name: {name}
Email: {email}
Phone: {phone}

Message:
{message}
----------------------------------------
Sent from propertypartner.co.nz
"""
    send_email(f"[Property Partner] New inquiry from {name}", body, reply_to=email)
    return {"status": "sent", "message": "Thank you for your inquiry!"}

@app.post("/appraisal")
async def appraisal_form(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    address: str = Form(...),
    bedrooms: str = Form(...),
    bathrooms: str = Form(...)
):
    body = f"""New Rental Appraisal Request
----------------------------------------
Contact Details:
  Name: {name}
  Email: {email}
  Phone: {phone}

Property Details:
  Address: {address}
  Bedrooms: {bedrooms}
  Bathrooms: {bathrooms}
----------------------------------------
Sent from propertypartner.co.nz
"""
    send_email(f"[Property Partner] Appraisal Request - {address}", body, reply_to=email)
    return {"status": "sent", "message": "Appraisal request received!"}

@app.post("/newsletter")
async def newsletter_form(email: str = Form(...)):
    body = f"""New Newsletter Subscription
----------------------------------------
Email: {email}
----------------------------------------
Sent from propertypartner.co.nz
"""
    send_email(f"[Property Partner] New Newsletter Signup: {email}", body)
    return {"status": "subscribed", "message": "Thanks for subscribing!"}

@app.post("/maintenance")
async def maintenance_form(request: Request):
    form = await request.form()
    
    address = form.get("address", "")
    unit = form.get("unit", "")
    category = form.get("category", "")
    description = form.get("description", "")
    name = form.get("name", "")
    email = form.get("email", "")
    phone = form.get("phone", "")
    
    # Handle file uploads - get all items and check for UploadFile objects
    attachments = []
    for key, value in form.multi_items():
        if key == "photos" and hasattr(value, "read") and hasattr(value, "filename"):
            file_content = await value.read()
            if file_content and value.filename:
                attachments.append((value.filename, file_content, value.content_type or "image/png"))
    
    attachment_count = len(attachments)
    
    body = f"""New Maintenance Request (Legacy Form)
========================================
Contact Details:
  Name: {name}
  Email: {email}
  Phone: {phone}

Property Details:
  Address: {address}
  Unit: {unit}

Issue Details:
  Category: {category}
  Description: {description}

Attachments: {attachment_count} photo(s) attached
========================================
Sent from propertypartner.co.nz (Legacy Form)
"""
    send_email(
        f"[Property Partner] Maintenance Request - {address}", 
        body, 
        reply_to=email,
        attachments=attachments if attachments else None
    )
    return {"status": "sent", "message": "Maintenance request submitted!"}
