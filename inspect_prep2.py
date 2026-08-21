import os

p2_dir = r"C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027\2ع"

for root, dirs, files in os.walk(p2_dir):
    rel = os.path.relpath(root, p2_dir)
    htmls = [f for f in files if f.endswith('.html')]
    if htmls:
        print(f"Folder: {rel} -> {htmls}")
