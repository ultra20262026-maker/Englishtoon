import os
import re

print("Starting Global Cache & Session Wipe Script...")

# 1. Update js/auth.js
auth_js_path = 'js/auth.js'
with open(auth_js_path, 'r', encoding='utf-8') as f:
    auth_content = f.read()

# Update CURRENT_APP_VERSION
auth_content = re.sub(
    r'const CURRENT_APP_VERSION = "[^"]+";',
    'const CURRENT_APP_VERSION = "2026_08_29_GLOBAL_WIPE_V2";',
    auth_content
)

# Update FORCE_LOGOUT_VERSION
auth_content = re.sub(
    r'const FORCE_LOGOUT_VERSION = "[^"]+";',
    'const FORCE_LOGOUT_VERSION = "2026_08_29_FORCE_LOGOUT_V2";',
    auth_content
)

with open(auth_js_path, 'w', encoding='utf-8') as f:
    f.write(auth_content)
print("Updated js/auth.js with new FORCE_LOGOUT_VERSION and CURRENT_APP_VERSION")


# 2. Update sw.js CACHE_NAME
sw_js_path = 'sw.js'
with open(sw_js_path, 'r', encoding='utf-8') as f:
    sw_content = f.read()

sw_content = re.sub(
    r"const CACHE_NAME = '[^']+';",
    "const CACHE_NAME = 'englishtoon-cache-v2026_08_29_V2';",
    sw_content
)

with open(sw_js_path, 'w', encoding='utf-8') as f:
    f.write(sw_content)
print("Updated sw.js CACHE_NAME")


# 3. Bump ?v= parameter in all HTML files
html_count = 0
for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    html_content = f.read()
                
                new_html = re.sub(r'(src=[\'"][^\'"]*?js/auth\.js)(?:\?v=[a-zA-Z0-9_]+)?([\'"])', r'\1?v=20260829V2\2', html_content)
                new_html = re.sub(r'(src=[\'"][^\'"]*?js/data\.js)(?:\?v=[a-zA-Z0-9_]+)?([\'"])', r'\1?v=20260829V2\2', new_html)
                
                if new_html != html_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_html)
                    html_count += 1
            except Exception as e:
                pass

print(f"Updated {html_count} HTML files with new ?v=20260829V2 cache buster")

