import os
import re

print("Starting Grade Restriction & Logout Wipe Script...")

# 1. Update js/auth.js
auth_js_path = 'js/auth.js'
with open(auth_js_path, 'r', encoding='utf-8') as f:
    auth_content = f.read()

auth_content = re.sub(
    r'const CURRENT_APP_VERSION = "[^"]+";',
    'const CURRENT_APP_VERSION = "2026_09_03_GLOBAL_WIPE_V3";',
    auth_content
)

auth_content = re.sub(
    r'const FORCE_LOGOUT_VERSION = "[^"]+";',
    'const FORCE_LOGOUT_VERSION = "2026_09_03_FORCE_LOGOUT_V3";',
    auth_content
)

with open(auth_js_path, 'w', encoding='utf-8') as f:
    f.write(auth_content)
print("Updated js/auth.js")


# 2. Update sw.js CACHE_NAME
sw_js_path = 'sw.js'
with open(sw_js_path, 'r', encoding='utf-8') as f:
    sw_content = f.read()

sw_content = re.sub(
    r"const CACHE_NAME = '[^']+';",
    "const CACHE_NAME = 'englishtoon-cache-v2026_09_03_V3';",
    sw_content
)

with open(sw_js_path, 'w', encoding='utf-8') as f:
    f.write(sw_content)
print("Updated sw.js")


# 3. Inject grade_restriction.js into ALL html files
html_count = 0
script_tag = '<script src="js/grade_restriction.js?v=20260903"></script>'
script_tag_root = '<script src="../../js/grade_restriction.js?v=20260903"></script>'

for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    html_content = f.read()
                
                new_html = html_content
                
                # Update auth.js cache buster
                new_html = re.sub(r'(src=[\'"][^\'"]*?js/auth\.js)(?:\?v=[a-zA-Z0-9_]+)?([\'"])', r'\1?v=20260903\2', new_html)
                new_html = re.sub(r'(src=[\'"][^\'"]*?js/data\.js)(?:\?v=[a-zA-Z0-9_]+)?([\'"])', r'\1?v=20260903\2', new_html)
                
                # Check if we already injected grade restriction
                if 'grade_restriction.js' not in new_html:
                    # Determine depth
                    depth = root.count(os.sep)
                    if root == '.':
                        tag_to_inject = script_tag
                    else:
                        # calculate relative path
                        rel_path = os.path.relpath('.', root)
                        tag_to_inject = f'<script src="{rel_path.replace(os.sep, "/")}/js/grade_restriction.js?v=20260903"></script>'
                    
                    # Inject before </body>
                    if '</body>' in new_html:
                        new_html = new_html.replace('</body>', f'{tag_to_inject}\n</body>')
                    else:
                        new_html += f'\n{tag_to_inject}'

                if new_html != html_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_html)
                    html_count += 1
            except Exception as e:
                print(f"Error on {filepath}: {e}")

print(f"Updated {html_count} HTML files with grade restriction and cache busters.")
