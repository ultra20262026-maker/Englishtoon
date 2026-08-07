import os
import shutil

src_base = r"C:\Users\Mr Mahmoud Elziadi\Downloads\جديد\ألعاب"
dest_base = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games"

# Dictionary to map the folder names in src to the actual grade IDs
# Assuming the folders in src are named like '1ب', '2ب', '1ع', '2ث' (which is prep-2)
# Let's map based on the known mapping from the previous task
grade_map = {
    '1ب': 'primary-1',
    '2ب': 'primary-2',
    '3ب': 'primary-3',
    '4ب': 'primary-4',
    '5ب': 'primary-5',
    '6ب': 'primary-6',
    '1ع': 'prep-1',
    '2ع': 'prep-2',
    '3ع': 'prep-3',
    '1ث': 'sec-1',
    '2ث': 'prep-2',  # User used 2ث for prep-2 last time!
    '3ث': 'sec-3'
}

copied_games = {}

for root, dirs, files in os.walk(src_base):
    for dir_name in dirs:
        # Check if dir_name ends with any of the keys
        matched_grade = None
        for k, v in grade_map.items():
            if k in dir_name:
                matched_grade = v
                break
        
        if matched_grade:
            src_dir = os.path.join(root, dir_name)
            dest_dir = os.path.join(dest_base, matched_grade, 'new_games')
            os.makedirs(dest_dir, exist_ok=True)
            
            if matched_grade not in copied_games:
                copied_games[matched_grade] = []
            
            for item in os.listdir(src_dir):
                if item.endswith('.html'):
                    src_file = os.path.join(src_dir, item)
                    dest_file = os.path.join(dest_dir, item)
                    shutil.copy2(src_file, dest_file)
                    copied_games[matched_grade].append(item)

print(copied_games)
