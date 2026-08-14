import zipfile, base64, os, re

epub_path = r"books/English_Language_Primary_1_First_Term.epub"
output_path = r"C:\Users\Mr Mahmoud Elziadi\Desktop\كتاب_التقييمات_الاول_الابتدائي\index.html"

# Create output folder
os.makedirs(os.path.dirname(output_path), exist_ok=True)

print("Extracting images from EPUB...")
images_b64 = []

with zipfile.ZipFile(epub_path, 'r') as z:
    all_names = z.namelist()
    img_names = sorted([n for n in all_names if re.search(r'page-\d+\.jpg', n)])
    print(f"Found {len(img_names)} page images")
    for name in img_names:
        data = z.read(name)
        b64 = base64.b64encode(data).decode('ascii')
        images_b64.append(b64)

print(f"Encoding done. Building HTML...")

# Build JS array of base64 images
js_images = "[\n" + ",\n".join([f'  "data:image/jpeg;base64,{b}"' for b in images_b64]) + "\n]"

html = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>كتاب التقييمات التفاعلي — الصف الأول الابتدائي</title>
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
    min-height: 100vh;
    color: #fff;
    user-select: none;
  }}
  /* Header */
  .header {{
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
  }}
  .header-title {{
    display: flex;
    align-items: center;
    gap: 12px;
  }}
  .header-title h1 {{
    font-size: 1.15rem;
    font-weight: 800;
    color: #fff;
  }}
  .header-title p {{
    font-size: 0.78rem;
    color: rgba(255,255,255,0.6);
    margin-top: 2px;
  }}
  .book-icon {{
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    box-shadow: 0 4px 15px rgba(59,130,246,0.4);
  }}
  /* Progress */
  .progress-bar {{
    height: 4px;
    background: rgba(255,255,255,0.1);
    position: relative;
  }}
  .progress-fill {{
    height: 100%;
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
    transition: width 0.4s ease;
  }}
  /* Viewer */
  .viewer {{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
    min-height: calc(100vh - 140px);
    position: relative;
  }}
  .page-container {{
    position: relative;
    max-width: 860px;
    width: 100%;
  }}
  .page-img {{
    width: 100%;
    display: block;
    border-radius: 16px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
    transition: opacity 0.3s ease;
  }}
  .page-img.fade {{ opacity: 0; }}
  /* Side nav arrows */
  .side-btn {{
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 52px;
    height: 52px;
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    color: rgba(255,255,255,0.8);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    z-index: 50;
  }}
  .side-btn:hover {{
    background: #3b82f6;
    border-color: #3b82f6;
    color: #fff;
    box-shadow: 0 8px 25px rgba(59,130,246,0.5);
    transform: translateY(-50%) scale(1.1);
  }}
  .side-btn.prev {{ right: 20px; }}
  .side-btn.next {{ left: 20px; }}
  .side-btn:disabled {{ opacity: 0.25; cursor: not-allowed; transform: translateY(-50%); }}
  /* Bottom controls */
  .controls {{
    position: fixed;
    bottom: 0;
    left: 0; right: 0;
    background: rgba(15,23,42,0.95);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    z-index: 100;
  }}
  .ctrl-btn {{
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    padding: 10px 20px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
  }}
  .ctrl-btn:hover {{ background: #3b82f6; border-color: #3b82f6; }}
  .ctrl-btn:disabled {{ opacity: 0.3; cursor: not-allowed; }}
  .ctrl-btn.primary {{ background: linear-gradient(135deg,#3b82f6,#8b5cf6); border-color: transparent; box-shadow: 0 4px 15px rgba(59,130,246,0.3); }}
  .page-num {{
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    padding: 10px 20px;
    font-size: 0.95rem;
    font-weight: 800;
    min-width: 120px;
    text-align: center;
    color: rgba(255,255,255,0.9);
  }}
  /* Thumbnail strip */
  .thumb-strip {{
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 8px 16px 0;
    scrollbar-width: thin;
    scrollbar-color: #3b82f6 transparent;
    max-width: 500px;
  }}
  .thumb {{
    width: 40px;
    height: 52px;
    border-radius: 6px;
    cursor: pointer;
    object-fit: cover;
    border: 2px solid transparent;
    transition: all 0.2s ease;
    flex-shrink: 0;
    opacity: 0.5;
  }}
  .thumb.active {{
    border-color: #3b82f6;
    opacity: 1;
    box-shadow: 0 0 10px rgba(59,130,246,0.5);
  }}
  .thumb:hover {{ opacity: 0.8; }}
  /* Jump input */
  .jump-box {{
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 10px;
    padding: 8px 12px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 700;
    width: 70px;
    text-align: center;
    font-family: inherit;
  }}
  .jump-box:focus {{ outline: none; border-color: #3b82f6; }}
  /* Zoom */
  .zoom-controls {{
    display: flex;
    gap: 6px;
    align-items: center;
  }}
  /* Fullscreen fab */
  .fs-fab {{
    position: fixed;
    top: 80px;
    left: 20px;
    width: 42px;
    height: 42px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
    color: rgba(255,255,255,0.7);
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
    z-index: 50;
  }}
  .fs-fab:hover {{ background: #3b82f6; color:#fff; }}
  /* Keyboard hint */
  .kbd-hint {{
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.5);
    border-radius: 20px;
    padding: 6px 16px;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.5);
    pointer-events: none;
    white-space: nowrap;
    animation: fadeout 3s ease 2s forwards;
  }}
  @keyframes fadeout {{ to {{ opacity: 0; }} }}
  @media(max-width:640px) {{
    .side-btn {{ display: none; }}
    .thumb-strip {{ max-width: 200px; }}
    .header-title h1 {{ font-size: 0.95rem; }}
  }}
</style>
</head>
<body>

<div class="header">
  <div class="header-title">
    <div class="book-icon">📚</div>
    <div>
      <h1>كتاب التقييمات التفاعلي</h1>
      <p>الصف الأول الابتدائي — الترم الأول</p>
    </div>
  </div>
  <div class="thumb-strip" id="thumbStrip"></div>
</div>

<div class="progress-bar">
  <div class="progress-fill" id="progressFill" style="width:0%"></div>
</div>

<div class="viewer">
  <img class="page-img" id="pageImg" src="" alt="صفحة الكتاب">
</div>

<!-- Side nav -->
<button class="side-btn prev" id="prevBtn" onclick="changePage(-1)">&#8250;</button>
<button class="side-btn next" id="nextBtn" onclick="changePage(1)">&#8249;</button>

<!-- Fullscreen button -->
<button class="fs-fab" onclick="toggleFS()" title="ملء الشاشة">⛶</button>

<!-- Keyboard hint -->
<div class="kbd-hint">استخدم الأسهم ← → للتنقل</div>

<!-- Bottom controls -->
<div class="controls">
  <button class="ctrl-btn" id="prevBtnB" onclick="changePage(-1)">&#8250; السابقة</button>
  <div class="page-num" id="pageNumDisplay">صفحة 1 / {len(images_b64)}</div>
  <button class="ctrl-btn primary" id="nextBtnB" onclick="changePage(1)">التالية &#8249;</button>
  <div style="display:flex;align-items:center;gap:6px">
    <span style="font-size:.8rem;opacity:.6">انتقل:</span>
    <input class="jump-box" type="number" id="jumpInput" min="1" max="{len(images_b64)}" placeholder="رقم" onkeydown="if(event.key==='Enter')jumpTo()">
    <button class="ctrl-btn" onclick="jumpTo()" style="padding:8px 14px">اذهب</button>
  </div>
</div>

<script>
const PAGES = {js_images};
const TOTAL = PAGES.length;
let current = 0;
let zoom = 1;

const img = document.getElementById('pageImg');
const progressFill = document.getElementById('progressFill');
const pageNumDisplay = document.getElementById('pageNumDisplay');
const thumbStrip = document.getElementById('thumbStrip');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtnB = document.getElementById('prevBtnB');
const nextBtnB = document.getElementById('nextBtnB');

// Build thumbnails (every 5 pages for performance)
PAGES.forEach((src, i) => {{
  const t = document.createElement('img');
  t.className = 'thumb' + (i === 0 ? ' active' : '');
  t.src = src;
  t.alt = 'صفحة ' + (i+1);
  t.onclick = () => goTo(i);
  t.id = 'thumb-' + i;
  thumbStrip.appendChild(t);
}});

function goTo(index) {{
  if (index < 0 || index >= TOTAL) return;
  // Fade out
  img.classList.add('fade');
  setTimeout(() => {{
    current = index;
    img.src = PAGES[current];
    img.classList.remove('fade');
    updateUI();
  }}, 200);
}}

function changePage(dir) {{
  goTo(current + dir);
}}

function jumpTo() {{
  const val = parseInt(document.getElementById('jumpInput').value);
  if (!isNaN(val) && val >= 1 && val <= TOTAL) goTo(val - 1);
  document.getElementById('jumpInput').value = '';
}}

function updateUI() {{
  const pct = ((current + 1) / TOTAL * 100).toFixed(1);
  progressFill.style.width = pct + '%';
  pageNumDisplay.textContent = 'صفحة ' + (current + 1) + ' / ' + TOTAL;
  // Thumb highlight
  document.querySelectorAll('.thumb').forEach((t, i) => {{
    t.classList.toggle('active', i === current);
  }});
  // Scroll active thumb into view
  const activeThumb = document.getElementById('thumb-' + current);
  if (activeThumb) activeThumb.scrollIntoView({{behavior: 'smooth', inline: 'center', block: 'nearest'}});
  // Buttons
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === TOTAL - 1;
  prevBtnB.disabled = current === 0;
  nextBtnB.disabled = current === TOTAL - 1;
}}

function toggleFS() {{
  if (!document.fullscreenElement) {{
    document.documentElement.requestFullscreen();
  }} else {{
    document.exitFullscreen();
  }}
}}

// Keyboard
document.addEventListener('keydown', e => {{
  if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') changePage(1);
  if (e.key === 'ArrowRight' || e.key === 'ArrowUp') changePage(-1);
  if (e.key === 'Home') goTo(0);
  if (e.key === 'End') goTo(TOTAL - 1);
}});

// Touch swipe
let touchStartX = 0;
document.addEventListener('touchstart', e => {{ touchStartX = e.touches[0].clientX; }});
document.addEventListener('touchend', e => {{
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) changePage(diff > 0 ? 1 : -1);
}});

// Init
img.src = PAGES[0];
updateUI();
</script>
</body>
</html>"""

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html)

size_mb = os.path.getsize(output_path) / 1024 / 1024
print(f"Done! File saved to: {output_path}")
print(f"File size: {size_mb:.1f} MB")
print(f"Total pages embedded: {len(images_b64)}")
