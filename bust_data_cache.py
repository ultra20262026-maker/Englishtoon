import os
import re

pattern = re.compile(r'src=[\"\']([^\"\']*js/data\.js)(?:\?v=[a-zA-Z0-9_]+)?[\"\']')

count = 0
for root, dirs, files in os.walk('.'):
    if '.git' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                def replacer(match):
                    path = match.group(1)
                    return f'src="{path}?v=950"'
                    
                new_content = pattern.sub(replacer, content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                pass

print(f"Updated {count} HTML files with data.js?v=950")
