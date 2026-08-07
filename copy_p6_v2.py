import os
import shutil

src_base = r"C:\Users\Mr Mahmoud Elziadi\Downloads\جديد"
dest_base = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\exams\primary-6"

# Walk through all directories in src_base
for root, dirs, files in os.walk(src_base):
    for file in files:
        if file.startswith('exam_lesson') and file.endswith('.html'):
            # This is definitely one of the Primary 6 exams
            unit_name = os.path.basename(root).lower()
            if unit_name.startswith('unit'):
                dest_unit_path = os.path.join(dest_base, unit_name)
                os.makedirs(dest_unit_path, exist_ok=True)
                src_file = os.path.join(root, file)
                dest_file = os.path.join(dest_unit_path, file)
                shutil.copy2(src_file, dest_file)
                print(f"Copied {file} to {dest_unit_path}")
