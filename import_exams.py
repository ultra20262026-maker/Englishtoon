import os
import shutil
import json
import re

DOWNLOADS = r"C:\Users\Mr Mahmoud Elziadi\Downloads\WhatsApp Unknown 2026-08-13 at 8.07.12 PM"
TARGET_DIR = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\exams"
JS_FILE = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\js\data.js"

grades = {
    'grade6': 'primary-6',
    'prep3': 'prep-3'
}

js_additions = []

for src_folder, target_grade in grades.items():
    src_path = os.path.join(DOWNLOADS, src_folder)
    if not os.path.exists(src_path):
        continue
        
    grade_obj = {}
    
    # Process unit folders
    for unit_folder in os.listdir(src_path):
        unit_src = os.path.join(src_path, unit_folder)
        if not os.path.isdir(unit_src):
            continue
            
        # Extract unit number from folder name
        # Examples: "Unit_1_Amazing_places_in_Egypt", "unit1_Unit_1_Personal_Identity"
        match = re.search(r'nit[_\s]?(\d+)', unit_folder, re.IGNORECASE)
        if not match:
            continue
            
        unit_num = str(int(match.group(1))) # Normalize to '1', '2', etc.
        
        target_unit_dir = os.path.join(TARGET_DIR, target_grade, f"unit{unit_num}")
        os.makedirs(target_unit_dir, exist_ok=True)
        
        exams_list = []
        
        for file in os.listdir(unit_src):
            if file.endswith('.html'):
                src_file = os.path.join(unit_src, file)
                dest_file = os.path.join(target_unit_dir, file)
                shutil.copy2(src_file, dest_file)
                
                # Cleanup file name for display title
                title = file.replace('.html', '').replace('_', ' ')
                
                exams_list.append({
                    "name": title,
                    "file": file
                })
                
        grade_obj[unit_num] = exams_list
        
    js_additions.append(f"EXAMS_MAP['{target_grade}'] = {json.dumps(grade_obj, ensure_ascii=False, indent=4)};")

if js_additions:
    with open(JS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Append to the end, but check if we already appended before to avoid duplicates
    for target_grade in grades.values():
        pattern = re.compile(rf"EXAMS_MAP\['{target_grade}'\]\s*=\s*{{[^;]+}};", re.DOTALL)
        content = pattern.sub('', content)
        
    content += "\n\n" + "\n".join(js_additions) + "\n"
    
    with open(JS_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Done! Added exams to JS.")
else:
    print("No exams found to process.")
