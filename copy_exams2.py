import os
import shutil
import json
import re

source_dir = r"C:\Users\Mr Mahmoud Elziadi\Downloads\جديد\امتحانات الكترونية"
dest_dir = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\exams"
data_js_path = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\js\data.js"

grade_mapping = {
    "الاول الاعدادي": "prep-1",
    "الثاني الاعدادي": "prep-2",
    "الرابع الابتدائي": "primary-4",
    "الخامس الابتدائي": "primary-5",
    "السادس الابتدائي": "primary-6"
}

unit_mapping = {
    "الأولى": 1, "الاولي": 1, "الاولى": 1, "الأولي": 1, "unit1": 1,
    "الثانية": 2, "التانية": 2, "الثانيه": 2, "التانيه": 2, "unit2": 2,
    "الثالثة": 3, "التالتة": 3, "الثالثه": 3, "التالته": 3, "unit3": 3,
    "الرابعة": 4, "الرابعه": 4, "unit4": 4,
    "الخامسة": 5, "الخامسه": 5, "unit5": 5,
    "السادسة": 6, "السادسه": 6, "الساتة": 6, "unit6": 6
}

exams_map = {}
os.makedirs(dest_dir, exist_ok=True)

for grade_folder in os.listdir(source_dir):
    grade_path = os.path.join(source_dir, grade_folder)
    if not os.path.isdir(grade_path) or grade_folder not in grade_mapping:
        continue
        
    grade_id = grade_mapping[grade_folder]
    exams_map[grade_id] = {}
    
    for unit_folder in os.listdir(grade_path):
        unit_path = os.path.join(grade_path, unit_folder)
        if not os.path.isdir(unit_path):
            continue
            
        unit_num = None
        for k, v in unit_mapping.items():
            if k in unit_folder.lower():
                unit_num = str(v)
                break
        
        if not unit_num:
            m = re.search(r'\d+', unit_folder)
            if m:
                unit_num = str(m.group(0))
            else:
                continue
                
        exams_map[grade_id][unit_num] = []
        
        dest_unit_dir = os.path.join(dest_dir, grade_id, f"unit{unit_num}")
        os.makedirs(dest_unit_dir, exist_ok=True)
        
        for file_name in os.listdir(unit_path):
            if not file_name.endswith('.html'):
                continue
                
            src_file = os.path.join(unit_path, file_name)
            dest_file = os.path.join(dest_unit_dir, file_name)
            
            shutil.copy2(src_file, dest_file)
            
            name = file_name.replace('.html', '')
            name = name.replace('_', ' ')
            
            if 'review' in name.lower() or 'مراجعة' in name:
                name = 'امتحان المراجعة'
            elif name.lower().startswith('exam'):
                name = name.replace('exam g4 ', '').replace('exam-g4-', '').replace('exam-g5-', '').replace('exam g5 ', '').replace('exam lesson', 'Lesson ').replace('exam', 'Exam').replace('-l', ' Lesson ')
            elif name.lower().startswith('u'):
                name = name.replace('U', 'Unit ').replace('L', 'Lesson ')
                
            exams_map[grade_id][unit_num].append({
                "name": name,
                "file": file_name
            })

with open(data_js_path, 'r', encoding='utf-8') as f:
    data_text = f.read()

m = re.search(r'const EXAMS_MAP = ({.*});?', data_text, re.DOTALL)
if m:
    exams_json = json.dumps(exams_map, ensure_ascii=False, indent=4)
    new_text = data_text[:m.start(1)] + exams_json + data_text[m.end(1):]
    with open(data_js_path, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Successfully updated EXAMS_MAP in data.js")
else:
    print("ERROR: EXAMS_MAP not found in data.js")

print("Files copied successfully!")
