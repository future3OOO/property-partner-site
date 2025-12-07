from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
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

def send_email(subject: str, body: str, reply_to: str = None):
    msg = MIMEMultipart()
    msg["Subject"] = subject
    msg["From"] = SMTP_USER
    msg["To"] = TO_EMAIL
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.attach(MIMEText(body, "plain"))
    
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
async def contact_form(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(""),
    message: str = Form("")
):
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

