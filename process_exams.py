import os
import shutil
import json
import re

src_dir = r'C:\Users\Mr Mahmoud Elziadi\Downloads\WhatsApp Unknown 2026-08-13 at 8.07.12 PM'
dest_primary6 = r'exams/primary-6'
dest_prep3 = r'exams/prep-3'

def process_grade(src_grade_folder, dest_folder, map_key):
    full_src = os.path.join(src_dir, src_grade_folder)
    exams = []
    
    for root, dirs, files in os.walk(full_src):
        for file in files:
            if file.endswith('.html'):
                src_path = os.path.join(root, file)
                
                # Create relative path structure
                rel_dir = os.path.relpath(root, full_src)
                if rel_dir == '.':
                    rel_dir = ''
                    
                target_dir = os.path.join(dest_folder, rel_dir)
                os.makedirs(target_dir, exist_ok=True)
                
                target_path = os.path.join(target_dir, file)
                shutil.copy2(src_path, target_path)
                
                # URL path for data.js
                url_path = target_path.replace(r'\\', '/').replace('\\', '/')
                
                # Title extraction
                title = file.replace('.html', '').replace('_', ' ')
                
                exams.append({
                    'title': title,
                    'path': url_path
                })
    
    return exams

p6_exams = process_grade('grade6', dest_primary6, 'primary-6')
p3_exams = process_grade('prep3', dest_prep3, 'prep-3')

# Now update data.js
with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_map(content, key, new_array):
    start_str = f'"{key}": ['
    start_idx = content.find(start_str)
    if start_idx == -1:
        # try with single quotes if double quotes not found
        start_str = f'\'{key}\': ['
        start_idx = content.find(start_str)
        if start_idx == -1:
            return content
            
    # Find matching closing bracket
    bracket_count = 0
    end_idx = -1
    for i in range(start_idx + len(start_str) - 1, len(content)):
        if content[i] == '[':
            bracket_count += 1
        elif content[i] == ']':
            bracket_count -= 1
            if bracket_count == 0:
                end_idx = i
                break
                
    if end_idx != -1:
        # Serialize new array
        new_json = json.dumps(new_array, ensure_ascii=False, indent=4)
        new_json = new_json.replace('\n', '\n    ')
        return content[:start_idx] + f'"{key}": ' + new_json + content[end_idx+1:]
    return content

content = replace_map(content, 'primary-6', p6_exams)
content = replace_map(content, 'prep-3', p3_exams)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Processed {len(p6_exams)} Primary 6 exams and {len(p3_exams)} Prep 3 exams.')
