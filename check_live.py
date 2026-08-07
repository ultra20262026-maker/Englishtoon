import urllib.request, json, re

url = 'https://ultra20262026-maker.github.io/Englishtoon/js/data.js?v=15'
with urllib.request.urlopen(url) as r:
    text = r.read().decode('utf-8')

m = re.search(r'const EXAMS_MAP = (\{.*?\});', text, re.DOTALL)
if m:
    data = json.loads(m.group(1))
    p4 = data.get('primary-4', {})
    print('primary-4 units:', sorted(p4.keys()))
    for u in sorted(p4.keys()):
        exams = p4[u]
        files = [e['file'] for e in exams[:2]]
        print('  unit', u, ':', len(exams), 'exams', '->', files)
else:
    print('EXAMS_MAP not found. Text start:')
    print(text[:500])
