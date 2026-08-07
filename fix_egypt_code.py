import os
import re

base = r"C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\exams"

count = 0
errors = []

for root, dirs, files in os.walk(base):
    for fname in files:
        if not fname.endswith('.html'):
            continue
        fpath = os.path.join(root, fname)
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                text = f.read()

            changed = False

            # Fix label text
            if 'بكود الدولة' in text:
                text = text.replace(
                    'رقم واتساب المعلم (بكود الدولة)',
                    'رقم واتساب المعلم'
                )
                changed = True

            # Fix placeholder
            if 'placeholder="مثال: 201234567890"' in text or "placeholder='مثال: 201234567890'" in text:
                text = text.replace(
                    'placeholder="مثال: 201234567890"',
                    'placeholder="مثال: 1012345678"'
                ).replace(
                    "placeholder='مثال: 201234567890'",
                    "placeholder='مثال: 1012345678'"
                )
                changed = True

            # Add Egypt flag prefix - wrap input in a flex div
            # Only if not already wrapped
            if 'id="tPhone"' in text and '🇪🇬 +20' not in text:
                old_input = re.search(r'<input id="tPhone"[^>]*>', text)
                if old_input:
                    original = old_input.group(0)
                    wrapped = (
                        '<div style="display:flex;align-items:center;gap:8px;direction:ltr">'
                        '<span style="background:#25D366;color:#fff;font-weight:800;padding:12px 14px;'
                        'border-radius:12px;font-size:1rem;white-space:nowrap;flex-shrink:0">🇪🇬 +20</span>'
                        + original.replace('>', ' style="flex:1">', 1) +
                        '</div>'
                    )
                    text = text.replace(original, wrapped, 1)
                    changed = True

            # Fix sendWA to prepend Egypt code
            if 'const ph=$(\"tPhone\").value' in text and '20\"+ph' not in text:
                text = text.replace(
                    'const ph=$(\"tPhone\").value.replace(/[^0-9]/g,\"\");\n const url=(ph?\"https://wa.me/\"+ph+\"?text=\":\"https://wa.me/?text=\")+encodeURIComponent(resultText());',
                    'let ph=$(\"tPhone\").value.replace(/[^0-9]/g,\"\");\n if(ph.startsWith(\"0\"))ph=ph.slice(1);\n const fullPh=\"20\"+ph;\n const url=\"https://wa.me/\"+fullPh+\"?text=\"+encodeURIComponent(resultText());'
                )
                changed = True
            # alternative spacing
            if 'const ph=$(\"tPhone\").value.replace(/[^0-9]/g,"")' in text and '"20"+ph' not in text:
                text = text.replace(
                    'const ph=$(\"tPhone\").value.replace(/[^0-9]/g,"");\n const url=(ph?"https://wa.me/"+ph+"?text=":"https://wa.me/?text=")+encodeURIComponent(resultText());',
                    'let ph=$(\"tPhone\").value.replace(/[^0-9]/g,"");\n if(ph.startsWith("0"))ph=ph.slice(1);\n const fullPh="20"+ph;\n const url="https://wa.me/"+fullPh+"?text="+encodeURIComponent(resultText());'
                )
                changed = True

            if changed:
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(text)
                count += 1
                print(f"Fixed: {os.path.relpath(fpath, base)}")

        except Exception as e:
            errors.append((fpath, str(e)))

print(f"\nTotal: Fixed {count} files.")
if errors:
    print("Errors:")
    for p, e in errors:
        print(f"  {p}: {e}")
