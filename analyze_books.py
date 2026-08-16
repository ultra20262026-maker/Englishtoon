import fitz # PyMuPDF
import os
import re

pdf1_path = r"C:\Users\Mr Mahmoud Elziadi\Downloads\Gem\1ب\جيم 1ب.PDF"
pdf2_path = r"C:\Users\Mr Mahmoud Elziadi\Downloads\تقييمات\1ب\1.pdf"

print("--- Inspecting Gem Book ---")
doc1 = fitz.open(pdf1_path)
print(f"Gem Total Pages: {len(doc1)}")

# Scan first 20 pages for Table of Contents / Index
toc_text = ""
for page_num in range(min(20, len(doc1))):
    text = doc1[page_num].get_text()
    if any(k in text.lower() for k in ["contents", "unit 1", "unit 2", "hello", "index", "فهرس"]):
        print(f"--- Page {page_num+1} possible TOC ---")
        print(text[:1000])
        print("="*40)

print("\n--- Inspecting Assessments Book ---")
doc2 = fitz.open(pdf2_path)
print(f"Assessments Total Pages: {len(doc2)}")
for page_num in range(min(15, len(doc2))):
    text = doc2[page_num].get_text()
    if any(k in text.lower() for k in ["unit", "test", "تقييم", "الأولى", "الدرس"]):
        print(f"--- Assessment Page {page_num+1} ---")
        print(text[:800])
        print("="*40)
