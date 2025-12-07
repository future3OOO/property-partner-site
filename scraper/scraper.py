#!/usr/bin/env python3
"""
Trade Me Listings Scraper for Property Partner
Scrapes the office listings page and downloads property images.
"""

import os
import json
import time
import hashlib
import requests
import logging
import re
from datetime import datetime
from pathlib import Path
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
from PIL import Image
from io import BytesIO

# Configuration
TRADEME_OFFICE_URL = "https://www.trademe.co.nz/a/property/office/5713372"
OUTPUT_DIR = Path("/var/www/propertypartner/listings")
MAX_LISTINGS = 6
MAX_PHOTOS_PER_LISTING = 5
REQUEST_DELAY = 2  # seconds between requests

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def setup_output_dir():
    """Create output directory if it doesn't exist."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    logger.info(f"Output directory: {OUTPUT_DIR}")

def download_image(url, save_path):
    """Download an image and save it, with basic optimization."""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        
        # Open and optimize image
        img = Image.open(BytesIO(response.content))
        
        # Convert to RGB if necessary (for PNG with transparency)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # Resize if too large (max 1200px width)
        max_width = 1200
        if img.width > max_width:
            ratio = max_width / img.width
            new_size = (max_width, int(img.height * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Save as optimized JPEG
        img.save(save_path, 'JPEG', quality=85, optimize=True)
        logger.info(f"Downloaded: {save_path}")
        return True
    except Exception as e:
        logger.error(f"Failed to download {url}: {e}")
        return False

def scrape_listings():
    """Scrape Trade Me office page for property listings."""
    listings = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()
        
        logger.info(f"Loading: {TRADEME_OFFICE_URL}")
        
        try:
            # Use domcontentloaded instead of networkidle for faster loading
            page.goto(TRADEME_OFFICE_URL, wait_until='domcontentloaded', timeout=90000)
            
            # Wait for content to appear
            page.wait_for_timeout(5000)
            
            logger.info("Page loaded, looking for listings...")
            
        except Exception as e:
            logger.error(f"Failed to load page: {e}")
            browser.close()
            return listings
        
        # Get page content
        content = page.content()
        
        # Find all listing links
        listing_links = page.query_selector_all('a[href*="/a/property/residential/rent/listing/"]')
        logger.info(f"Found {len(listing_links)} listing links")
        
        if not listing_links:
            # Try alternative selectors
            listing_links = page.query_selector_all('a[href*="/property/residential/rent/"]')
            logger.info(f"Alternative search found {len(listing_links)} links")
        
        seen_ids = set()
        
        for link in listing_links:
            if len(listings) >= MAX_LISTINGS:
                break
                
            try:
                href = link.get_attribute('href')
                if not href:
                    continue
                
                # Extract listing ID
                match = re.search(r'/listing/(\d+)', href)
                if not match:
                    continue
                    
                listing_id = match.group(1)
                if listing_id in seen_ids:
                    continue
                seen_ids.add(listing_id)
                
                listing_url = f"https://www.trademe.co.nz{href}" if not href.startswith('http') else href
                
                logger.info(f"Processing listing {listing_id}: {listing_url}")
                time.sleep(REQUEST_DELAY)
                
                # Navigate to listing page
                listing_page = context.new_page()
                try:
                    listing_page.goto(listing_url, wait_until='domcontentloaded', timeout=60000)
                    listing_page.wait_for_timeout(3000)
                except Exception as e:
                    logger.error(f"Failed to load listing {listing_id}: {e}")
                    listing_page.close()
                    continue
                
                listing_content = listing_page.content()
                listing_soup = BeautifulSoup(listing_content, 'html.parser')
                
                # Extract title - look for h1 or specific class
                title = "Property Listing"
                title_elem = listing_soup.find('h1')
                if title_elem:
                    title = title_elem.get_text(strip=True)
                
                # Extract address from breadcrumb or location
                address = "Christchurch"
                address_patterns = ['tm-property-listing-body__location', 'location', 'address']
                for pattern in address_patterns:
                    addr_elem = listing_soup.find(['div', 'span'], {'class': lambda x: x and pattern in str(x).lower()})
                    if addr_elem:
                        address = addr_elem.get_text(strip=True)
                        break
                
                # Extract price
                price = "Contact Agent"
                price_elem = listing_soup.find(['div', 'span', 'p'], {'class': lambda x: x and 'price' in str(x).lower()})
                if price_elem:
                    price = price_elem.get_text(strip=True)
                
                # Extract bedrooms
                bedrooms = 0
                bed_text = listing_soup.get_text()
                bed_match = re.search(r'(\d+)\s*(?:bed|bedroom)', bed_text.lower())
                if bed_match:
                    bedrooms = int(bed_match.group(1))
                
                # Extract images - look for gallery images
                images = []
                
                # Try multiple image selectors
                img_selectors = [
                    'img[src*="trademe"]',
                    'img[src*="tmsandbox"]', 
                    'img[data-src*="trademe"]',
                    '.tm-gallery img',
                    '[class*="gallery"] img',
                    '[class*="image"] img'
                ]
                
                for selector in img_selectors:
                    img_elements = listing_page.query_selector_all(selector)
                    for img in img_elements:
                        src = img.get_attribute('src') or img.get_attribute('data-src')
                        if src and len(images) < MAX_PHOTOS_PER_LISTING:
                            # Skip tiny images (icons, etc)
                            if 'logo' in src.lower() or 'icon' in src.lower():
                                continue
                            # Try to get larger version
                            large_src = re.sub(r'/\d+x\d+/', '/1200x900/', src)
                            large_src = re.sub(r'_\d+x\d+', '_1200x900', large_src)
                            if large_src not in images:
                                images.append(large_src)
                    if images:
                        break
                
                listing_page.close()
                
                if not images:
                    logger.warning(f"No images found for listing {listing_id}, skipping")
                    continue
                
                # Create listing directory
                listing_dir = OUTPUT_DIR / f"tm-{listing_id}"
                listing_dir.mkdir(exist_ok=True)
                
                # Download images
                local_photos = []
                for i, img_url in enumerate(images[:MAX_PHOTOS_PER_LISTING]):
                    photo_path = listing_dir / f"photo_{i+1}.jpg"
                    if download_image(img_url, photo_path):
                        local_photos.append(f"/listings/tm-{listing_id}/photo_{i+1}.jpg")
                    time.sleep(0.5)
                
                if local_photos:
                    listings.append({
                        'id': f"tm-{listing_id}",
                        'title': title[:100],
                        'address': address[:100],
                        'price': price[:50],
                        'bedrooms': bedrooms,
                        'photos': local_photos,
                        'trademe_url': listing_url,
                        'scraped_at': datetime.now().isoformat()
                    })
                    logger.info(f"Added listing: {title[:50]}... with {len(local_photos)} photos")
                
            except Exception as e:
                logger.error(f"Error processing listing: {e}")
                continue
        
        browser.close()
    
    return listings

def save_listings(listings):
    """Save listings to JSON file."""
    output_file = OUTPUT_DIR / 'listings.json'
    with open(output_file, 'w') as f:
        json.dump(listings, f, indent=2)
    logger.info(f"Saved {len(listings)} listings to {output_file}")

def cleanup_old_listings(listings):
    """Remove listing directories that are no longer active."""
    current_ids = {l['id'] for l in listings}
    for item in OUTPUT_DIR.iterdir():
        if item.is_dir() and item.name.startswith('tm-'):
            if item.name not in current_ids:
                import shutil
                shutil.rmtree(item)
                logger.info(f"Cleaned up old listing: {item.name}")

def main():
    logger.info("=" * 50)
    logger.info("Trade Me Listings Scraper Started")
    logger.info("=" * 50)
    
    setup_output_dir()
    
    listings = scrape_listings()
    
    if listings:
        save_listings(listings)
        cleanup_old_listings(listings)
        logger.info(f"Successfully scraped {len(listings)} listings")
    else:
        logger.warning("No listings found")
        # Create empty JSON if no listings
        save_listings([])
    
    logger.info("Scraper finished")

if __name__ == '__main__':
    main()
