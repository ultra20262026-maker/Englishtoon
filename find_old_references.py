import os
import re

search_terms = ["احمي القلعة", "التهجئة الذكية", "G1_cannon", "primary-1", "games/primary-1"]

for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith('.html') or file.endswith('.js') or file.endswith('.json'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    lines = f.readlines()
                for idx, line in enumerate(lines, 1):
                    for term in search_terms:
                        if term in line and 'p1_master' not in filepath and 'p1_all' not in filepath and 'p1_unit1' not in filepath and 'P1_ALL' not in filepath and 'auto_slice' not in filepath and 'generate_' not in filepath and 'extract_' not in filepath:
                            print(f"{filepath}:{idx} [{term}] -> {line.strip()[:120]}")
            except:
                pass
