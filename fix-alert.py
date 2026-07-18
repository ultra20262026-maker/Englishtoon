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
print(f"Fixing Arabic text in {len(files)} files...")

fixed_count = 0
for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        continue

    original_content = content

    # 1. Fix guard script alert (mojibake)
    # Use re.DOTALL to match across newlines
    content = re.sub(r"alert\('O1O.*?U<\.'\);", "alert('عذراً لا يمكنك الدخول للعبة مباشرة. يرجى تسجيل الدخول أولاً.');", content, flags=re.DOTALL)
    
    # Also fix some other mojibake patterns just in case
    content = re.sub(r"alert\('O1O[^;]*?'\);", "alert('عذراً لا يمكنك الدخول للعبة مباشرة. يرجى تسجيل الدخول أولاً.');", content, flags=re.DOTALL)

    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1

print(f"Fix complete! Fixed {fixed_count} files.")
