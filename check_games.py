import os

src_base = r"C:\Users\Mr Mahmoud Elziadi\Downloads\جديد\ألعاب"
if not os.path.exists(src_base):
    # Try finding it dynamically if encoding is weird
    for root, dirs, files in os.walk(r"C:\Users\Mr Mahmoud Elziadi\Downloads\جديد"):
        for d in dirs:
            if 'ألعاب' in d or 'العاب' in d:
                src_base = os.path.join(root, d)
                break
        if 'ألعاب' in src_base or 'العاب' in src_base: break

output = []
if os.path.exists(src_base):
    for dir_name in os.listdir(src_base):
        output.append(dir_name)
else:
    output.append('Source folder not found: ' + src_base)

with open('games_dirs.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output))
