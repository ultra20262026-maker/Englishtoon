import os
import re

auth_pat = re.compile(r'src=[\"\']([^\"\']*js/auth\.js)(?:\?v=[a-zA-Z0-9_]+)?[\"\']')
data_pat = re.compile(r'src=[\"\']([^\"\']*js/data\.js)(?:\?v=[a-zA-Z0-9_]+)?[\"\']')

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
                
                new_content = auth_pat.sub(r'src="\1?v=999"', content)
                new_content = data_pat.sub(r'src="\1?v=999"', new_content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                pass

print(f"Updated {count} HTML files with ?v=999 cache busters.")
