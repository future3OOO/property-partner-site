#!/usr/bin/env python3
"""Trade Me Listings Scraper for Property Partner - High Quality Images"""

import json
import time
import requests
import logging
import re
from datetime import datetime
from pathlib import Path
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
from PIL import Image
from io import BytesIO

TRADEME_OFFICE_URL = "https://www.trademe.co.nz/a/property/office/5713372"
# Determine environment output path
PROD_DIR = Path("/var/www/propertypartner/listings")
if PROD_DIR.exists():
    OUTPUT_DIR = PROD_DIR
else:
    OUTPUT_DIR = Path(__file__).resolve().parent.parent / "public" / "listings"
MAX_LISTINGS = 6
MAX_PHOTOS = 5

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def download_image(url, save_path):
    try:
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=30)
        response.raise_for_status()
        
        # Check content length - skip if too small
        if len(response.content) < 5000:  # Less than 5KB is likely broken
            logger.warning(f"Skipping small image ({len(response.content)} bytes): {url}")
            return False
            
        img = Image.open(BytesIO(response.content))
        
        # Skip if image is too small (probably a thumbnail that slipped through)
        if img.width < 400 or img.height < 300:
            logger.warning(f"Skipping small image ({img.width}x{img.height}): {url}")
            return False
        
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        
        # Keep high quality - only resize if extremely large
        if img.width > 2000:
            img = img.resize((2000, int(img.height * 2000 / img.width)), Image.Resampling.LANCZOS)
        
        img.save(save_path, "JPEG", quality=92, optimize=True)
        logger.info(f"Downloaded: {save_path.name} ({img.width}x{img.height})")
        return True
    except Exception as e:
        logger.error(f"Download failed: {e}")
        return False

def normalize_url(href):
    """Ensure URL has proper /a/ prefix"""
    if href.startswith("http"):
        if "/a/property/" not in href and "/property/" in href:
            href = href.replace("/property/", "/a/property/")
        return href
    href = href.lstrip("/")
    if not href.startswith("a/"):
        if href.startswith("property/"):
            href = "a/" + href
    return f"https://www.trademe.co.nz/{href}"

def extract_photo_ids(page):
    """Extract unique photo IDs from all images on the page"""
    photo_ids = set()
    
    # Get all img src attributes
    for img in page.query_selector_all("img"):
        src = img.get_attribute("src") or ""
        if "trademe.tmcdn.co.nz/photoserver" in src:
            # Extract photo ID (the number before .jpg)
            match = re.search(r"/(\d+)\.jpg", src)
            if match:
                photo_ids.add(match.group(1))
    
    # Also check data-src for lazy-loaded images
    for img in page.query_selector_all("img[data-src]"):
        src = img.get_attribute("data-src") or ""
        if "trademe.tmcdn.co.nz/photoserver" in src:
            match = re.search(r"/(\d+)\.jpg", src)
            if match:
                photo_ids.add(match.group(1))
    
    return list(photo_ids)

def scrape_listings():
    listings = []
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            viewport={"width": 1920, "height": 1080}
        )
        page = context.new_page()
        
        logger.info("Loading office page...")
        page.goto(TRADEME_OFFICE_URL, wait_until="domcontentloaded", timeout=60000)
        page.wait_for_timeout(5000)
        
        # Find listing IDs
        listing_data = {}
        for link in page.query_selector_all("a"):
            href = link.get_attribute("href") or ""
            match = re.search(r"/listing/(\d+)", href)
            if match:
                lid = match.group(1)
                if lid not in listing_data:
                    normalized = normalize_url(href.split("?")[0])
                    listing_data[lid] = normalized
                    logger.info(f"Found listing: {lid}")
        
        logger.info(f"Total listings: {len(listing_data)}")
        
        for lid, url in list(listing_data.items())[:MAX_LISTINGS]:
            try:
                logger.info(f"Scraping {lid}...")
                time.sleep(2)
                
                lpage = context.new_page()
                lpage.goto(url, wait_until="domcontentloaded", timeout=60000)
                lpage.wait_for_timeout(3000)
                
                # Scroll to load lazy images
                lpage.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                lpage.wait_for_timeout(1000)
                lpage.evaluate("window.scrollTo(0, 0)")
                lpage.wait_for_timeout(500)
                
                soup = BeautifulSoup(lpage.content(), "html.parser")
                
                # Title
                h1 = soup.find("h1")
                title = h1.get_text(strip=True) if h1 else f"Listing {lid}"
                
                # Address from title
                address = "Christchurch"
                if "," in title:
                    parts = [p.strip() for p in title.split(",")]
                    if len(parts) >= 2:
                        address = ", ".join(parts[-2:])
                
                # Price
                price = "Contact Agent"
                for elem in soup.find_all(["div", "span", "p"]):
                    txt = elem.get_text()
                    if "$" in txt and "week" in txt.lower():
                        m = re.search(r"\$[\d,]+.*?week", txt, re.I)
                        if m:
                            price = m.group(0)
                            break
                
                # Bedrooms
                bedrooms = 0
                m = re.search(r"(\d+)\s*bed", soup.get_text().lower())
                if m:
                    bedrooms = int(m.group(1))
                
                # Extract ALL unique photo IDs
                photo_ids = extract_photo_ids(lpage)
                logger.info(f"  Found {len(photo_ids)} unique photo IDs")
                
                lpage.close()
                
                if not photo_ids:
                    logger.warning(f"  No photos found for {lid}")
                    continue
                
                # Create listing directory
                listing_dir = OUTPUT_DIR / f"tm-{lid}"
                listing_dir.mkdir(exist_ok=True)
                
                # Download full-size images (convert thumbnail URLs to /full/)
                local_photos = []
                for photo_id in photo_ids[:MAX_PHOTOS]:
                    full_url = f"https://trademe.tmcdn.co.nz/photoserver/plus/{photo_id}.jpg"
                    photo_path = listing_dir / f"photo_{len(local_photos)+1}.jpg"
                    
                    if download_image(full_url, photo_path):
                        local_photos.append(f"/listings/tm-{lid}/photo_{len(local_photos)+1}.jpg")
                    
                    if len(local_photos) >= MAX_PHOTOS:
                        break
                    
                    time.sleep(0.5)
                
                if local_photos:
                    listings.append({
                        "id": f"tm-{lid}",
                        "title": title[:100],
                        "address": address[:80],
                        "price": price[:40],
                        "bedrooms": bedrooms,
                        "photos": local_photos,
                        "trademe_url": url,
                        "scraped_at": datetime.now().isoformat()
                    })
                    logger.info(f"  Added with {len(local_photos)} high-quality photos")
                    
            except Exception as e:
                logger.error(f"Error with {lid}: {e}")
        
        browser.close()
    
    # Save JSON
    with open(OUTPUT_DIR / "listings.json", "w") as f:
        json.dump(listings, f, indent=2)
    logger.info(f"Saved {len(listings)} listings")
    
    # Cleanup old
    current = {l["id"] for l in listings}
    for d in OUTPUT_DIR.iterdir():
        if d.is_dir() and d.name.startswith("tm-") and d.name not in current:
            import shutil
            shutil.rmtree(d)
    
    return listings

if __name__ == "__main__":
    logger.info("=" * 50)
    logger.info("Trade Me Scraper - High Quality Mode")
    listings = scrape_listings()
    logger.info(f"Done - {len(listings)} listings")
