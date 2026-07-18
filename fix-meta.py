import os
import re

games_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games"

def get_html_files(directory):
    html_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

files = get_html_files(games_dir)
print(f"Fixing meta charset position in {len(files)} files...")

fixed_count = 0
for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        continue

    original_content = content

    # If <meta charset="UTF-8"> exists but is after the guard-script, move it up!
    # A robust way is to just inject <meta charset="UTF-8"> right after <head> 
    # and remove it from everywhere else.
    
    # First, remove all existing <meta charset="UTF-8">
    content = re.sub(r'<meta\s+charset="UTF-8"\s*>\s*', '', content, flags=re.IGNORECASE)
    
    # Then insert it right after <head>
    content = re.sub(r'(<head>)', r'\1\n    <meta charset="UTF-8">', content, count=1, flags=re.IGNORECASE)

    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1

print(f"Fix complete! Fixed {fixed_count} files.")
