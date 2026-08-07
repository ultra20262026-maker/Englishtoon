import re

with open('css/style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace hardcoded dark background and border colors with light variables or equivalents
replacements = [
    (r'rgba\(255,\s*255,\s*255,\s*0\.05\)', r'rgba(0, 0, 0, 0.03)'),
    (r'rgba\(255,\s*255,\s*255,\s*0\.1\)', r'rgba(0, 0, 0, 0.05)'),
    (r'rgba\(255,\s*255,\s*255,\s*0\.15\)', r'rgba(0, 0, 0, 0.08)'),
    (r'rgba\(255,\s*255,\s*255,\s*0\.2\)', r'rgba(0, 0, 0, 0.12)'),
    (r'rgba\(255,\s*255,\s*255,\s*0\.25\)', r'rgba(0, 0, 0, 0.15)'),
    (r'#070913', r'var(--bg-dark)'),
    (r'#0E1322', r'var(--bg-surface)'),
    (r'#FFFFFF', r'var(--text-main)'),
    (r'color:\s*#FFF\b', r'color: var(--text-main)'),
    (r'color:\s*#FFFFFF\b', r'color: var(--text-main)'),
    (r'rgba\(18,\s*25,\s*43,\s*0\.75\)', r'var(--bg-card)'),
    (r'rgba\(18,\s*25,\s*43,\s*0\.9\)', r'var(--bg-card)'),
    (r'0 20px 50px rgba\(0,\s*0,\s*0,\s*0\.7\)', r'var(--bento-shadow)'),
]

for old, new in replacements:
    content = re.sub(old, new, content, flags=re.IGNORECASE)

# Give buttons a 3D effect globally
content = re.sub(r'(\.btn-[a-z0-9-]+)\s*\{([^}]+)\}', 
    lambda m: m.group(0) if 'box-shadow' in m.group(2) else m.group(1) + ' {' + m.group(2) + '    box-shadow: 0 4px 0 rgba(0,0,0,0.1);\n}', content)

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied light theme substitutions to style.css")
