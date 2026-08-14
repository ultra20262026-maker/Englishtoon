import os
import re
import codecs

pattern = re.compile(r'src=[\"\']([^\"\']*js/auth\.js)(?:\?v=[a-zA-Z0-9_]+)?[\"\']')

count = 0
for root, dirs, files in os.walk('.'):
    if '.git' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            
            # Detect encoding
            encoding = 'utf-8'
            with open(filepath, 'rb') as f:
                raw = f.read(4)
                if raw.startswith(codecs.BOM_UTF16_LE):
                    encoding = 'utf-16-le'
                elif raw.startswith(codecs.BOM_UTF16_BE):
                    encoding = 'utf-16-be'
            
            try:
                with open(filepath, 'r', encoding=encoding, errors='ignore') as f:
                    content = f.read()
                
                def replacer(match):
                    path = match.group(1)
                    return f'src="{path}?v=902"'
                    
                new_content = pattern.sub(replacer, content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding=encoding) as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                pass

print(f'Updated {count} HTML files to bust auth.js cache.')
