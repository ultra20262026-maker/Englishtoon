import zipfile, base64, os, re

epub_path = r"books/English_Language_Primary_1_First_Term.epub"
output_dir = r"C:\Users\Mr Mahmoud Elziadi\Desktop\كتاب_التقييمات_المصحح"
output_path = os.path.join(output_dir, "index.html")

os.makedirs(output_dir, exist_ok=True)

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

total = len(images_b64)
print(f"Building HTML for {total} pages...")

js_images = "[\n" + ",\n".join([f'  "data:image/jpeg;base64,{b}"' for b in images_b64]) + "\n]"

html = '''<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>''' + f"كتاب التقييمات - الصف الاول الابتدائي - الترم الاول (نسخة التصحيح)" + '''</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;background:#1a1a2e;min-height:100vh;color:#fff}
.header{background:linear-gradient(135deg,#16213e,#0f3460);padding:16px 24px;display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #e94560;position:sticky;top:0;z-index:100;box-shadow:0 4px 20px rgba(0,0,0,.4)}
.header-left{display:flex;align-items:center;gap:14px}
.badge{background:linear-gradient(135deg,#e94560,#c0392b);color:white;font-weight:900;font-size:.75rem;padding:4px 12px;border-radius:20px;letter-spacing:.5px;text-transform:uppercase}
.header-title h1{font-size:1.1rem;font-weight:800;color:#fff}
.header-title p{font-size:.75rem;color:rgba(255,255,255,.6);margin-top:2px}
.progress-wrap{background:rgba(255,255,255,.08);height:5px}
.progress-fill{height:100%;background:linear-gradient(to right,#e94560,#f39c12);transition:width .4s ease}
.main{display:flex;height:calc(100vh - 80px)}
.sidebar{width:200px;background:#16213e;border-left:1px solid rgba(255,255,255,.08);overflow-y:auto;flex-shrink:0;scrollbar-width:thin;scrollbar-color:#e94560 transparent}
.sidebar-title{padding:12px 16px;font-size:.75rem;font-weight:800;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid rgba(255,255,255,.05)}
.thumb-item{padding:8px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.04);transition:all .2s ease;display:flex;align-items:center;gap:8px}
.thumb-item:hover{background:rgba(233,69,96,.1)}
.thumb-item.active{background:rgba(233,69,96,.2);border-right:3px solid #e94560}
.thumb-img{width:40px;height:52px;object-fit:cover;border-radius:4px;flex-shrink:0}
.thumb-label{font-size:.75rem;font-weight:700;color:rgba(255,255,255,.7)}
.viewer-wrap{flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}
.viewer{flex:1;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:20px;background:#111827;scrollbar-width:thin;scrollbar-color:#e94560 transparent}
.page-img{max-width:100%;max-height:none;display:block;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,.7);transition:transform .3s ease;cursor:zoom-in}
.page-img.zoomed{transform:scale(1.5);cursor:zoom-out;transform-origin:top center}
.controls{background:#16213e;border-top:1px solid rgba(255,255,255,.08);padding:12px 20px;display:flex;align-items:center;justify-content:center;gap:12px;flex-shrink:0}
.btn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:9px 18px;color:#fff;font-size:.88rem;font-weight:700;cursor:pointer;transition:all .2s ease;font-family:inherit;display:flex;align-items:center;gap:6px}
.btn:hover{background:rgba(233,69,96,.3);border-color:#e94560}
.btn:disabled{opacity:.25;cursor:not-allowed}
.btn.primary{background:linear-gradient(135deg,#e94560,#c0392b);border-color:transparent}
.page-badge{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:9px 16px;font-size:.9rem;font-weight:800;min-width:130px;text-align:center;color:rgba(255,255,255,.9)}
.zoom-btn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:9px 14px;color:#fff;font-size:1rem;cursor:pointer;transition:all .2s ease}
.zoom-btn:hover{background:rgba(233,69,96,.3);border-color:#e94560}
.jump-input{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:9px 10px;color:#fff;font-size:.88rem;font-weight:700;width:65px;text-align:center;font-family:inherit}
.jump-input:focus{outline:none;border-color:#e94560}
.kbd-hint{position:fixed;bottom:70px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,.7);border-radius:20px;padding:5px 14px;font-size:.72rem;color:rgba(255,255,255,.45);pointer-events:none;white-space:nowrap;animation:fade 3s ease 2s forwards}
@keyframes fade{to{opacity:0}}
</style>
</head>
<body>
<div class="header">
  <div class="header-left">
    <div>
      <h1 class="header-title">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:1.8rem">📚</span>
          <div>
            <div>كتاب التقييمات — الصف الاول الابتدائي</div>
            <div style="font-size:.72rem;font-weight:600;color:rgba(255,255,255,.5);margin-top:2px">English Language Assessment Book · Primary 1 · First Term</div>
          </div>
        </div>
      </h1>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:10px">
    <span class="badge">نسخة التصحيح</span>
    <button class="btn" onclick="window.print()" title="طباعة">🖨️ طباعة</button>
    <button class="btn" onclick="toggleFS()">⛶</button>
  </div>
</div>
<div class="progress-wrap"><div class="progress-fill" id="pbar" style="width:0%"></div></div>
<div class="main">
  <div class="sidebar">
    <div class="sidebar-title">الصفحات</div>
    <div id="sideList"></div>
  </div>
  <div class="viewer-wrap">
    <div class="viewer" id="viewer">
      <img class="page-img" id="pageImg" src="" alt="صفحة" onclick="toggleZoom(this)">
    </div>
    <div class="controls">
      <button class="btn" id="prevB" onclick="go(-1)">&#8250; السابقة</button>
      <div class="page-badge" id="pnum">صفحة 1 / ''' + str(total) + '''</div>
      <button class="btn primary" id="nextB" onclick="go(1)">التالية &#8249;</button>
      <div style="display:flex;align-items:center;gap:6px">
        <input class="jump-input" type="number" id="jmp" min="1" max="''' + str(total) + '''" placeholder="...">
        <button class="btn" onclick="doJump()" style="padding:9px 12px">&#10148;</button>
      </div>
      <button class="zoom-btn" onclick="zoomIn()">&#128269;+</button>
      <button class="zoom-btn" onclick="zoomOut()">&#128269;-</button>
      <button class="zoom-btn" onclick="resetZoom()">&#8644;</button>
    </div>
  </div>
</div>
<div class="kbd-hint">&#8592; &#8594; للتنقل · انقر الصورة للتكبير</div>
<script>
const PAGES=''' + js_images + ''';
const T=PAGES.length;
let cur=0,zl=1;
const img=document.getElementById('pageImg');
const pbar=document.getElementById('pbar');
const pnum=document.getElementById('pnum');
const prevB=document.getElementById('prevB');
const nextB=document.getElementById('nextB');
const sl=document.getElementById('sideList');

// Build sidebar
PAGES.forEach((src,i)=>{
  const div=document.createElement('div');
  div.className='thumb-item'+(i===0?' active':'');
  div.id='si-'+i;
  div.onclick=()=>goTo(i);
  const tImg=document.createElement('img');
  tImg.className='thumb-img';
  tImg.src=src;
  tImg.alt='p'+(i+1);
  const lbl=document.createElement('span');
  lbl.className='thumb-label';
  lbl.textContent='صفحة '+(i+1);
  div.appendChild(tImg);
  div.appendChild(lbl);
  sl.appendChild(div);
});

function goTo(i){
  if(i<0||i>=T)return;
  img.style.opacity='0';
  img.style.transition='opacity .25s';
  setTimeout(()=>{
    cur=i;
    img.src=PAGES[cur];
    img.style.opacity='1';
    img.style.transform='scale('+zl+')';
    img.style.transformOrigin='top center';
    pbar.style.width=((cur+1)/T*100)+'%';
    pnum.textContent='صفحة '+(cur+1)+' / '+T;
    prevB.disabled=cur===0;
    nextB.disabled=cur===T-1;
    document.querySelectorAll('.thumb-item').forEach((el,j)=>el.classList.toggle('active',j===cur));
    const si=document.getElementById('si-'+cur);
    if(si)si.scrollIntoView({behavior:'smooth',block:'nearest'});
  },200);
}

function go(d){goTo(cur+d);}
function doJump(){const v=parseInt(document.getElementById('jmp').value);if(v>=1&&v<=T)goTo(v-1);document.getElementById('jmp').value='';}
function zoomIn(){zl=Math.min(zl+0.25,3);applyZoom();}
function zoomOut(){zl=Math.max(zl-0.25,0.5);applyZoom();}
function resetZoom(){zl=1;applyZoom();}
function applyZoom(){img.style.transform='scale('+zl+')';img.style.transformOrigin='top center';}
function toggleZoom(el){zl=zl===1?2:1;applyZoom();}
function toggleFS(){if(!document.fullscreenElement)document.documentElement.requestFullscreen();else document.exitFullscreen();}
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft'||e.key==='ArrowDown')go(1);
  if(e.key==='ArrowRight'||e.key==='ArrowUp')go(-1);
  if(e.key==='+'||e.key==='=')zoomIn();
  if(e.key==='-')zoomOut();
  if(e.key==='0')resetZoom();
  if(e.key==='Home')goTo(0);
  if(e.key==='End')goTo(T-1);
});
let tx=0;
document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;});
document.addEventListener('touchend',e=>{const d=tx-e.changedTouches[0].clientX;if(Math.abs(d)>50)go(d>0?1:-1);});
img.src=PAGES[0];
</script>
</body>
</html>'''

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html)

sz = os.path.getsize(output_path)/1024/1024
print(f"Done! {sz:.1f} MB")
print(f"Pages: {total}")
