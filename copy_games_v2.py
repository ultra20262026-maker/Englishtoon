import os
import shutil

src_base = r"C:\Users\Mr Mahmoud Elziadi\Downloads\جديد\ألعاب"
dest_base = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games"

# Use os.listdir to dynamically map names
dirs = os.listdir(src_base)

# Simple mapping logic
mapping = {
    'الأول': 'primary-1',
    'الثاني': 'primary-2',
    'الثالث': 'primary-3',
    'الرابع': 'primary-4',
    'الخامس': 'primary-5',
    'السادس': 'primary-6',
    'الأول الإعدادي': 'prep-1',
    'الثاني الإعدادي': 'prep-2',
    'الثالث الإعدادي': 'prep-3',
    'إع': 'prep-1'
}

for d in dirs:
    matched = None
    for k, v in mapping.items():
        if k in d:
            matched = v
            break
    
    if matched:
        src_dir = os.path.join(src_base, d)
        dest_dir = os.path.join(dest_base, matched, 'new_games')
        os.makedirs(dest_dir, exist_ok=True)
        for f in os.listdir(src_dir):
            if f.endswith('.html'):
                shutil.copy2(os.path.join(src_dir, f), os.path.join(dest_dir, f))
                print(f"Copied {f} to {matched}/new_games")
