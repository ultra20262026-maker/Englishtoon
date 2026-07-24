import glob
import re
import json

files = sorted(glob.glob('games/prep-3/*/*.html'))

unique_questions = {}

for fpath in files:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    m = re.search(r'const (?:QS|questions) = (\[.*?\]);', content, re.DOTALL)
    if not m: continue
    qs = json.loads(m.group(1))
    for q in qs:
        qtext = q.get('q', '').strip()
        choices = q.get('choices', [])
        ans_idx = q.get('answer', 0)
        
        if qtext not in unique_questions:
            unique_questions[qtext] = {
                'q': qtext,
                'examples': [(fpath, choices, ans_idx)]
            }
        else:
            unique_questions[qtext]['examples'].append((fpath, choices, ans_idx))

print(f"Collected {len(unique_questions)} unique questions.")

with open('unique_prep3_questions.json', 'w', encoding='utf-8') as f:
    json.dump(unique_questions, f, ensure_ascii=False, indent=2)

print("Saved to unique_prep3_questions.json")
