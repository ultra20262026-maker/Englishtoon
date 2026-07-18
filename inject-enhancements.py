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
print(f"Injecting enhancements into {len(files)} files...")

injection_block = """<head>
    <meta charset="UTF-8">
    <script id="guard-script">
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            alert('عذراً، لا يمكنك الدخول لهذه اللعبة مباشرة. يرجى تسجيل الدخول أولاً.');
            window.location.href = window.location.origin + (window.location.pathname.includes('/Englishtoon/') ? '/Englishtoon/' : '/');
        }
    </script>
    <script src="../../../js/game-enhancements.js"></script>"""

count = 0
for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Failed to read {file}: {e}")
        continue
        
    original = content
    
    # Remove existing meta charset to prevent duplication
    content = re.sub(r'<meta\s+charset="UTF-8"\s*/?>\s*', '', content, flags=re.IGNORECASE)
    
    # Remove existing guard script if it exists
    content = re.sub(r'<script id="guard-script">.*?</script>\s*', '', content, flags=re.IGNORECASE | re.DOTALL)
    
    # Remove existing game-enhancements script if it exists
    content = re.sub(r'<script src="\.\./\.\./\.\./js/game-enhancements\.js"></script>\s*', '', content, flags=re.IGNORECASE)
    
    # Inject the block right at <head>
    content = re.sub(r'<head>', injection_block, content, count=1, flags=re.IGNORECASE)
    
    if content != original:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        count += 1

print(f"Injection complete! Modified {count} files.")
