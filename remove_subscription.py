import os
import re

games_dir = r'C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games'
count = 0

for root, dirs, files in os.walk(games_dir):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Look for the subscription message
            if 'مجاني' in content or 'اشتراك' in content or 'Subscription' in content:
                print(f"Found in {filepath}")
                # Replace common patterns
                new_content = re.sub(r'<[^>]*>.*?اشتراك.*?</[^>]*>', '', content, flags=re.IGNORECASE)
                new_content = re.sub(r'<[^>]*>.*?مجاني.*?</[^>]*>', '', new_content, flags=re.IGNORECASE)
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1

print(f"Removed subscription message from {count} files.")
