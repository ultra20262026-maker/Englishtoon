import fitz
import pytesseract
from PIL import Image
import io
import re

# Set tesseract path if in standard location
tesseract_cmd_paths = [
    r"C:\Program Files\Tesseract-OCR\tesseract.exe",
    r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe",
    r"C:\Users\Mr Mahmoud Elziadi\AppData\Local\Tesseract-OCR\tesseract.exe"
]
for p in tesseract_cmd_paths:
    if fitz.os.path.exists(p):
        pytesseract.pytesseract.tesseract_cmd = p
        break

pdf_path = r"C:\Users\Mr Mahmoud Elziadi\Downloads\Gem\1ب\جيم 1ب.PDF"
doc = fitz.open(pdf_path)

print(f"Total pages in Gem: {len(doc)}")

# Look for table of contents in first 15 pages
for p in range(1, min(15, len(doc))):
    page = doc[p]
    pix = page.get_pixmap(dpi=150)
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    try:
        text = pytesseract.image_to_string(img, lang='eng+ara')
    except Exception as e:
        text = pytesseract.image_to_string(img, lang='eng')
    
    if any(k in text.lower() for k in ["unit", "content", "theme", "welcome"]):
        print(f"=== Page {p+1} ===")
        print(text[:1200])
        print("-" * 50)
