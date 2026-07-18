import glob
import re
import json

files = glob.glob(r'C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games\primary-2\**\*.html', recursive=True)
with open(files[0], 'r', encoding='utf-8') as f:
    content = f.read()

m2 = re.search(r'const CURRICULUM = ({.*?});', content, re.DOTALL)
if m2:
    text = m2.group(1)
    images = re.findall(r'(i|img|image):\s*[\'\"`]+(data:image.*?)[\'\"`]+', text)
    if images:
        print('Found images!', len(images))
        print(images[0][1][:50])
    else:
        print('No images matched in CURRICULUM.')
        images2 = re.findall(r'(i|img|image):\s*[\'\"`]+(.*?)[\'\"`]+', text)
        print('Other image keys:', images2[:5])
else:
    print('No CURRICULUM found in file:', files[0])
