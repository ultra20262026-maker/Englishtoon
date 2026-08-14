import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

found = 'primary-6' in text
print('primary-6 found in data.js:', found)

if found:
    idx = text.index('primary-6')
    snippet = text[max(0,idx-30):idx+600]
    print(snippet)

# Show all grade keys
keys = re.findall(r'"(primary-\d|prep-\d)"', text)
print('\nAll grade keys in data.js:', sorted(set(keys)))

# Check if primary-6 exams map has files
m6 = re.search(r'"primary-6"\s*:\s*\{(.*?)\}(?=\s*[,}])', text, re.DOTALL)
if m6:
    units = re.findall(r'"(\d+)"\s*:\s*\[', m6.group(1))
    print('primary-6 units defined:', units)
    # Check if files array is empty
    entries = re.findall(r'"file"\s*:\s*"([^"]+)"', m6.group(1))
    print('primary-6 exam files count:', len(entries))
    for e in entries[:5]:
        print(' ', e)
