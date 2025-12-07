#!/usr/bin/env python3
"""Trade Me Listings Scraper for Property Partner"""

import os
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
OUTPUT_DIR = Path("/var/www/propertypartner/listings")
MAX_LISTINGS = 6
MAX_PHOTOS = 5

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def download_image(url, save_path):
    try:
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=30)
        response.raise_for_status()
        img = Image.open(BytesIO(response.content))
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        if img.width > 1200:
            img = img.resize((1200, int(img.height * 1200 / img.width)), Image.Resampling.LANCZOS)
        img.save(save_path, "JPEG", quality=85, optimize=True)
        return True
    except Exception as e:
        logger.error(f"Download failed {url}: {e}")
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
        
        listing_data = {}
        for link in page.query_selector_all("a"):
            href = link.get_attribute("href") or ""
            match = re.search(r"/listing/(\d+)", href)
            if match:
                lid = match.group(1)
                if lid not in listing_data:
                    normalized = normalize_url(href.split("?")[0])
                    listing_data[lid] = normalized
                    logger.info(f"Found: {lid} -> {normalized}")
        
        logger.info(f"Total unique listings: {len(listing_data)}")
        
        for lid, url in list(listing_data.items())[:MAX_LISTINGS]:
            try:
                logger.info(f"Scraping {lid}...")
                time.sleep(2)
                
                lpage = context.new_page()
                lpage.goto(url, wait_until="domcontentloaded", timeout=60000)
                lpage.wait_for_timeout(3000)
                
                soup = BeautifulSoup(lpage.content(), "html.parser")
                
                h1 = soup.find("h1")
                title = h1.get_text(strip=True) if h1 else f"Listing {lid}"
                
                address = "Christchurch"
                if "," in title:
                    parts = [p.strip() for p in title.split(",")]
                    if len(parts) >= 2:
                        address = ", ".join(parts[-2:])
                
                price = "Contact Agent"
                for elem in soup.find_all(["div", "span", "p"]):
                    txt = elem.get_text()
                    if "$" in txt and "week" in txt.lower():
                        m = re.search(r"\$[\d,]+.*?week", txt, re.I)
                        if m:
                            price = m.group(0)
                            break
                
                bedrooms = 0
                m = re.search(r"(\d+)\s*bed", soup.get_text().lower())
                if m:
                    bedrooms = int(m.group(1))
                
                images = []
                for img in lpage.query_selector_all("img"):
                    src = img.get_attribute("src") or ""
                    if "trademe.tmcdn.co.nz/photoserver" in src:
                        full_src = re.sub(r"/\d+x\d+/", "/1200x900/", src)
                        if full_src not in images:
                            images.append(full_src)
                            if len(images) >= MAX_PHOTOS:
                                break
                
                lpage.close()
                
                if not images:
                    logger.warning(f"No images found for {lid}")
                    continue
                
                listing_dir = OUTPUT_DIR / f"tm-{lid}"
                listing_dir.mkdir(exist_ok=True)
                
                local_photos = []
                for i, img_url in enumerate(images):
                    path = listing_dir / f"photo_{i+1}.jpg"
                    if download_image(img_url, path):
                        local_photos.append(f"/listings/tm-{lid}/photo_{i+1}.jpg")
                
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
                    logger.info(f"Added listing with {len(local_photos)} photos")
                    
            except Exception as e:
                logger.error(f"Error with {lid}: {e}")
        
        browser.close()
    
    with open(OUTPUT_DIR / "listings.json", "w") as f:
        json.dump(listings, f, indent=2)
    logger.info(f"Saved {len(listings)} listings")
    
    return listings

if __name__ == "__main__":
    logger.info("=" * 50)
    logger.info("Trade Me Scraper Started")
    listings = scrape_listings()
    logger.info(f"Done - {len(listings)} listings")
