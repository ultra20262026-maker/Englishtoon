import os

for root, dirs, files in os.walk('.'):
    if '.git' in root:
        continue
    for file in files:
        if file.endswith('.html') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            if 'serviceWorker' in content and 'sw.js' not in filepath:
                print(f"ServiceWorker registration in: {filepath}")
