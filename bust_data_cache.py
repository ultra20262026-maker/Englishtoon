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
                    return f'src="{path}?v=980"'
                    
                new_content = pattern.sub(replacer, content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                pass

print(f"Updated {count} HTML files with data.js?v=980")

# Also update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"const CACHE_NAME = '[^']+';", "const CACHE_NAME = 'englishtoon-cache-v20260816_ARCADE_P1_V980';", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js CACHE_NAME to v980.")
