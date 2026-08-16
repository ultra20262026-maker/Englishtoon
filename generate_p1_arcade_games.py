import os
import json
import re

# Load complete adventure data with 15 questions per game & 3D Pixar images
with open('js/p1_adventure_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

json_text = text.split("window.P1_ADVENTURE_DATABASE = ")[1].strip().rstrip(";")
adv_data = json.loads(json_text)

# We will create 5 rich arcade games for each of the 6 units:
# 1. G1_cannon.html (مدفع الكلمات 💣)
# 2. G1_fishing.html (صياد السمك 🎣)
# 3. G3_balloon.html (فرقعة البالونات 🎈)
# 4. G4_spaceship.html (مركبة الفضاء 🚀)
# 5. G5_archery.html (رمي السهام 🏹)

def get_cannon_template(title, unit_num, qs_json):
    return f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>{title} - Primary 1 Unit {unit_num}</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-tap-highlight-color: transparent; }}
  body {{ background: #0f172a; color: #fff; font-family: 'Cairo', 'Segoe UI', sans-serif; overflow: hidden; height: 100vh; display: flex; flex-direction: column; }}
  .font-en {{ font-family: 'Outfit', sans-serif; }}
  
  .g-hud {{ display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: rgba(15,23,42,0.85); backdrop-filter: blur(12px); border-bottom: 2px solid #f59e0b; z-index: 10; height: 55px; }}
  .g-title {{ font-size: 1.15rem; font-weight: 900; color: #f59e0b; text-shadow: 0 0 12px rgba(245,158,11,0.4); display: flex; align-items: center; gap: 8px; }}
  .g-qnum {{ font-size: 1rem; color: #f8fafc; background: rgba(255,255,255,0.1); padding: 4px 14px; border-radius: 20px; font-weight: 700; font-family: 'Outfit', sans-serif; }}
  .g-score {{ font-size: 1.15rem; font-weight: 900; color: #10b981; font-family: 'Outfit', sans-serif; }}
  
  .g-qpanel {{ background: rgba(15,23,42,0.92); padding: 12px 20px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); z-index: 10; min-height: 85px; display: flex; align-items: center; justify-content: center; gap: 16px; }}
  .q-img {{ width: 65px; height: 65px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); border-radius: 12px; background: rgba(255,255,255,0.08); padding: 4px; border: 1px solid rgba(255,255,255,0.15); }}
  #qt {{ font-size: 1.35rem !important; color: #ffffff !important; font-weight: 800 !important; line-height: 1.35 !important; font-family: 'Outfit', sans-serif; }}
  
  .g-targets {{ position: absolute; width: 100%; top: 34%; display: flex; justify-content: space-around; padding: 0 16px; z-index: 8; pointer-events: none; }}
  .tbtn {{ pointer-events: auto; background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); border: 2.5px solid #f59e0b; color: #fff; padding: 14px 24px !important; font-size: 1.25rem !important; font-weight: 900 !important; border-radius: 20px; cursor: pointer; transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0,0,0,0.4); min-width: 130px; text-align: center; font-family: 'Outfit', sans-serif; }}
  .tbtn:hover {{ transform: translateY(-4px) scale(1.05); background: #f59e0b; color: #0f172a; box-shadow: 0 12px 30px rgba(245,158,11,0.5); }}
  .tbtn.correct {{ background: #10b981 !important; border-color: #059669 !important; color: #fff !important; transform: scale(1.12); box-shadow: 0 0 30px #10b981; }}
  .tbtn.wrong {{ background: #f43f5e !important; border-color: #e11d48 !important; color: #fff !important; opacity: 0.55; transform: scale(0.94); }}

  .g-canvas {{ flex: 1; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; }}
  .g-pbar {{ height: 5px; background: #f59e0b; width: 0%; transition: width 0.3s ease; position: absolute; bottom: 0; left: 0; z-index: 10; box-shadow: 0 0 10px #f59e0b; }}

  .g-end {{ display: none; position: fixed; inset: 0; background: rgba(15,23,42,0.95); backdrop-filter: blur(20px); z-index: 100; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 20px; }}
  .g-end h1 {{ font-size: 2.8rem; color: #f59e0b; text-shadow: 0 0 25px rgba(245,158,11,0.6); }}
  .g-end p {{ font-size: 1.8rem; color: #10b981; font-weight: 800; font-family: 'Outfit', sans-serif; }}
  .g-end button {{ padding: 14px 36px; font-size: 1.25rem; font-weight: 900; background: #f59e0b; border: none; color: #0f172a; border-radius: 30px; cursor: pointer; transition: 0.2s; box-shadow: 0 8px 25px rgba(245,158,11,0.4); }}
  .g-end button:hover {{ transform: scale(1.06); box-shadow: 0 0 35px #f59e0b; }}
</style>
</head>
<body>

<div class="g-hud" id="hud">
  <div class="g-title">💣 {title}</div>
  <div id="qn" class="g-qnum">1 / 15</div>
  <div class="g-score">Score: <span id="sc">0</span></div>
</div>

<div class="g-qpanel">
  <img id="qImg" src="../../images/games/p1/trophy_cup.png" alt="Icon" class="q-img">
  <div id="qt">Loading...</div>
</div>
<div id="tg" class="g-targets"></div>
<canvas id="cv" class="g-canvas"></canvas>
<div id="pb" class="g-pbar"></div>

<div id="end" class="g-end">
  <h1 id="eh">Awesome! 🎉</h1>
  <p id="es">Score: 0</p>
  <button onclick="location.reload()">Play Again 🔄</button>
</div>

<script>
const QS = {qs_json};
let qi=0, score=0, locked=false, parts=[], particles=[], animId=null, tAngle=0;
let cv, ctx, W, H, AC;

window.addEventListener('load', () => {{
  cv = document.getElementById('cv'); ctx = cv.getContext('2d');
  resize(); window.addEventListener('resize', resize);
  AC = new (window.AudioContext || window.webkitAudioContext)();
  initAmbientParticles();
  loadQ(); loop();
}});

function resize() {{ W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }}

function tone(f,d,t,v) {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  try {{
    const o=AC.createOscillator(), gn=AC.createGain(); o.connect(gn); gn.connect(AC.destination);
    o.type=t||'sine'; o.frequency.value=f; gn.gain.setValueAtTime(v||0.3, AC.currentTime);
    gn.gain.exponentialRampToValueAtTime(0.001, AC.currentTime+d); o.start(); o.stop(AC.currentTime+d);
  }} catch(e) {{}}
}}

function playApplauseSnd() {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  tone(523.25, 0.1, 'sine', 0.4);
  setTimeout(()=> tone(659.25, 0.1, 'sine', 0.4), 90);
  setTimeout(()=> tone(783.99, 0.12, 'sine', 0.4), 180);
  setTimeout(()=> tone(1046.50, 0.35, 'triangle', 0.5), 270);
}}

function initAmbientParticles() {{
  particles = [];
  for(let i=0; i<35; i++) {{
    particles.push({{ x: Math.random()*W, y: Math.random()*H, r: Math.random()*2+1, vx: (Math.random()-0.5)*0.5, vy: -Math.random()*0.8-0.2, c: '#f59e0b' }});
  }}
}}

function loadQ() {{
  if(qi >= QS.length) {{ endG(); return; }}
  locked = false;
  const q = QS[qi];
  document.getElementById('qn').innerText = `${{qi+1}} / ${{QS.length}}`;
  document.getElementById('qt').innerText = q.q;
  document.getElementById('qImg').src = q.img ? ('../../' + q.img) : '../../images/games/p1/trophy_cup.png';
  document.getElementById('pb').style.width = `${{(qi/QS.length)*100}}%`;
  
  const tg = document.getElementById('tg'); tg.innerHTML = '';
  q.choices.forEach((c, idx) => {{
    const btn = document.createElement('button');
    btn.className = 'tbtn';
    btn.innerText = c;
    btn.onclick = () => shoot(idx, btn);
    tg.appendChild(btn);
  }});
}}

function shoot(idx, btn) {{
  if(locked) return; locked = true;
  const q = QS[qi];
  const isCorrect = (idx === q.answer);
  
  const rect = btn.getBoundingClientRect();
  const tx = rect.left + rect.width/2;
  const ty = rect.top + rect.height/2;
  const cx = W/2, cy = H - 50;
  
  tAngle = Math.atan2(ty - cy, tx - cx);
  
  parts.push({{
    x: cx, y: cy, tx: tx, ty: ty,
    vx: Math.cos(tAngle)*22, vy: Math.sin(tAngle)*22,
    c: '#f59e0b', r: 9, isCorrect: isCorrect, btn: btn
  }});
  tone(160, 0.15, 'sawtooth', 0.4);
}}

function loop() {{
  ctx.clearRect(0, 0, W, H);
  
  // Ambient
  particles.forEach(p => {{
    p.x += p.vx; p.y += p.vy;
    if(p.y < 0) p.y = H;
    if(p.x < 0 || p.x > W) p.x = Math.random()*W;
    ctx.fillStyle = p.c;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
  }});
  
  // Cannon at bottom center
  const cx = W/2, cy = H - 50;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(tAngle + Math.PI/2);
  ctx.fillStyle = '#334155';
  ctx.fillRect(-14, -45, 28, 50);
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(-12, -45, 24, 8);
  ctx.restore();
  
  ctx.fillStyle = '#1e293b';
  ctx.beginPath(); ctx.arc(cx, cy, 32, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 3; ctx.stroke();
  
  // Bullets
  for(let i=parts.length-1; i>=0; i--) {{
    const p = parts[i];
    p.x += p.vx; p.y += p.vy;
    
    ctx.fillStyle = p.c;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
    
    const dist = Math.hypot(p.x - p.tx, p.y - p.ty);
    if(dist < 25 || p.y < 120) {{
      hitTarget(p);
      parts.splice(i, 1);
    }}
  }}
  
  animId = requestAnimationFrame(loop);
}}

function hitTarget(p) {{
  if(p.isCorrect) {{
    p.btn.classList.add('correct');
    score += 10;
    document.getElementById('sc').innerText = score;
    playApplauseSnd();
  }} else {{
    p.btn.classList.add('wrong');
    tone(130, 0.25, 'sawtooth', 0.5);
  }}
  
  setTimeout(() => {{
    qi++; loadQ();
  }}, 1100);
}}

function endG() {{
  document.getElementById('end').style.display = 'flex';
  document.getElementById('es').innerText = `Score: ${{score}} / ${{QS.length * 10}}`;
  playApplauseSnd();
}}
</script>
</body>
</html>"""

def get_fishing_template(title, unit_num, qs_json):
    return f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>{title} - Primary 1 Unit {unit_num}</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-tap-highlight-color: transparent; }}
  body {{ background: #031024; color: #fff; font-family: 'Cairo', 'Segoe UI', sans-serif; overflow: hidden; height: 100vh; display: flex; flex-direction: column; }}
  .font-en {{ font-family: 'Outfit', sans-serif; }}
  
  .g-hud {{ display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: rgba(3,16,36,0.85); backdrop-filter: blur(12px); border-bottom: 2px solid #00d2d3; z-index: 10; height: 55px; }}
  .g-title {{ font-size: 1.15rem; font-weight: 900; color: #00d2d3; text-shadow: 0 0 12px rgba(0,210,211,0.4); display: flex; align-items: center; gap: 8px; }}
  .g-qnum {{ font-size: 1rem; color: #f8fafc; background: rgba(255,255,255,0.1); padding: 4px 14px; border-radius: 20px; font-weight: 700; font-family: 'Outfit', sans-serif; }}
  .g-score {{ font-size: 1.15rem; font-weight: 900; color: #2ecc71; font-family: 'Outfit', sans-serif; }}
  
  .g-qpanel {{ background: rgba(3,16,36,0.92); padding: 12px 20px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); z-index: 10; min-height: 85px; display: flex; align-items: center; justify-content: center; gap: 16px; }}
  .q-img {{ width: 65px; height: 65px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); border-radius: 12px; background: rgba(255,255,255,0.08); padding: 4px; border: 1px solid rgba(255,255,255,0.15); }}
  #qt {{ font-size: 1.35rem !important; color: #ffffff !important; font-weight: 800 !important; line-height: 1.35 !important; font-family: 'Outfit', sans-serif; }}
  
  .g-targets {{ position: absolute; inset: 0; z-index: 8; pointer-events: none; }}
  .tbtn {{ position: absolute; pointer-events: auto; background: linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08)); border: 2.5px solid #00d2d3; color: #fff; padding: 14px 24px !important; font-size: 1.25rem !important; font-weight: 900 !important; border-radius: 22px; cursor: pointer; transition: background 0.2s, transform 0.1s; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0,0,0,0.6); white-space: nowrap; text-align: center; font-family: 'Outfit', sans-serif; }}
  .tbtn:hover {{ transform: scale(1.08); background: #00d2d3; color: #031024; box-shadow: 0 12px 30px rgba(0,210,211,0.6); }}
  .tbtn.correct {{ background: #2ecc71 !important; border-color: #27ae60 !important; color: #fff !important; transform: scale(1.15); box-shadow: 0 0 35px #2ecc71; }}
  .tbtn.wrong {{ background: #e74c3c !important; border-color: #c0392b !important; color: #fff !important; opacity: 0.55; transform: scale(0.92); }}

  .g-canvas {{ flex: 1; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; }}
  .g-pbar {{ height: 5px; background: #00d2d3; width: 0%; transition: width 0.3s ease; position: absolute; bottom: 0; left: 0; z-index: 10; box-shadow: 0 0 10px #00d2d3; }}

  .g-end {{ display: none; position: fixed; inset: 0; background: rgba(3,16,36,0.95); backdrop-filter: blur(20px); z-index: 100; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 20px; }}
  .g-end h1 {{ font-size: 2.8rem; color: #00d2d3; text-shadow: 0 0 25px rgba(0,210,211,0.6); }}
  .g-end p {{ font-size: 1.8rem; color: #2ecc71; font-weight: 800; font-family: 'Outfit', sans-serif; }}
  .g-end button {{ padding: 14px 36px; font-size: 1.25rem; font-weight: 900; background: #00d2d3; border: none; color: #031024; border-radius: 30px; cursor: pointer; transition: 0.2s; box-shadow: 0 8px 25px rgba(0,210,211,0.4); }}
  .g-end button:hover {{ transform: scale(1.06); box-shadow: 0 0 35px #00d2d3; }}
</style>
</head>
<body>

<div class="g-hud" id="hud">
  <div class="g-title">🎣 {title}</div>
  <div id="qn" class="g-qnum">1 / 15</div>
  <div class="g-score">Score: <span id="sc">0</span></div>
</div>

<div class="g-qpanel">
  <img id="qImg" src="../../images/games/p1/trophy_cup.png" alt="Icon" class="q-img">
  <div id="qt">Loading...</div>
</div>
<div id="tg" class="g-targets"></div>
<canvas id="cv" class="g-canvas"></canvas>
<div id="pb" class="g-pbar"></div>

<div id="end" class="g-end">
  <h1 id="eh">Awesome! 🎉</h1>
  <p id="es">Score: 0</p>
  <button onclick="location.reload()">Play Again 🔄</button>
</div>

<script>
const QS = {qs_json};
let qi=0, score=0, locked=false, animId=null, time=0;
let cv, ctx, W, H, AC;
let hookY = 140, hookTargetY = 140, hookX = 0;
let targets = [];

window.addEventListener('load', () => {{
  cv = document.getElementById('cv'); ctx = cv.getContext('2d');
  resize(); window.addEventListener('resize', resize);
  AC = new (window.AudioContext || window.webkitAudioContext)();
  loadQ(); loop();
}});

function resize() {{ W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; hookX = W/2; }}

function tone(f,d,t,v) {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  try {{
    const o=AC.createOscillator(), gn=AC.createGain(); o.connect(gn); gn.connect(AC.destination);
    o.type=t||'sine'; o.frequency.value=f; gn.gain.setValueAtTime(v||0.3, AC.currentTime);
    gn.gain.exponentialRampToValueAtTime(0.001, AC.currentTime+d); o.start(); o.stop(AC.currentTime+d);
  }} catch(e) {{}}
}}

function playApplauseSnd() {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  tone(523.25, 0.1, 'sine', 0.4);
  setTimeout(()=> tone(659.25, 0.1, 'sine', 0.4), 90);
  setTimeout(()=> tone(783.99, 0.12, 'sine', 0.4), 180);
  setTimeout(()=> tone(1046.50, 0.35, 'triangle', 0.5), 270);
}}

function loadQ() {{
  if(qi >= QS.length) {{ endG(); return; }}
  locked = false;
  const q = QS[qi];
  document.getElementById('qn').innerText = `${{qi+1}} / ${{QS.length}}`;
  document.getElementById('qt').innerText = q.q;
  document.getElementById('qImg').src = q.img ? ('../../' + q.img) : '../../images/games/p1/trophy_cup.png';
  document.getElementById('pb').style.width = `${{(qi/QS.length)*100}}%`;
  
  const tg = document.getElementById('tg'); tg.innerHTML = '';
  targets = [];
  
  const startY = H * 0.42;
  const gapY = 85;
  
  q.choices.forEach((c, idx) => {{
    const btn = document.createElement('button');
    btn.className = 'tbtn';
    btn.innerText = c;
    btn.onclick = () => catchFish(idx, btn);
    tg.appendChild(btn);
    
    targets.push({{
      el: btn,
      x: W * 0.15 + (idx * (W * 0.28)),
      y: startY + (idx % 2 === 0 ? 0 : gapY),
      vx: (idx % 2 === 0 ? 1.2 : -1.2),
      w: 160, h: 60
    }});
  }});
}}

function catchFish(idx, btn) {{
  if(locked) return; locked = true;
  const q = QS[qi];
  const isCorrect = (idx === q.answer);
  
  const rect = btn.getBoundingClientRect();
  hookX = rect.left + rect.width/2;
  hookTargetY = rect.top + rect.height/2;
  
  tone(220, 0.2, 'sine', 0.3);
  
  setTimeout(() => {{
    if(isCorrect) {{
      btn.classList.add('correct');
      score += 10;
      document.getElementById('sc').innerText = score;
      playApplauseSnd();
    }} else {{
      btn.classList.add('wrong');
      tone(120, 0.3, 'sawtooth', 0.4);
    }}
    
    setTimeout(() => {{
      hookTargetY = 140;
      qi++; loadQ();
    }}, 1100);
  }}, 350);
}}

function loop() {{
  time += 0.03;
  ctx.clearRect(0, 0, W, H);
  
  // Water wave effect
  ctx.fillStyle = 'rgba(0, 210, 211, 0.06)';
  ctx.beginPath();
  ctx.moveTo(0, H*0.35);
  for(let x=0; x<=W; x+=40) {{
    ctx.lineTo(x, H*0.35 + Math.sin(x*0.01 + time)*15);
  }}
  ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.fill();
  
  // Update Fish positions
  targets.forEach(t => {{
    t.x += t.vx;
    if(t.x < 20 || t.x > W - 180) t.vx *= -1;
    t.el.style.left = `${{t.x}}px`;
    t.el.style.top = `${{t.y + Math.sin(time + t.x)*8}}px`;
  }});
  
  // Draw Fishing Line & Hook
  hookY += (hookTargetY - hookY) * 0.15;
  ctx.strokeStyle = '#00d2d3';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(hookX, 120);
  ctx.lineTo(hookX, hookY);
  ctx.stroke();
  
  // Hook icon
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(hookX, hookY, 8, 0, Math.PI*2);
  ctx.fill();
  
  animId = requestAnimationFrame(loop);
}}

function endG() {{
  document.getElementById('end').style.display = 'flex';
  document.getElementById('es').innerText = `Score: ${{score}} / ${{QS.length * 10}}`;
  playApplauseSnd();
}}
</script>
</body>
</html>"""

def get_balloon_template(title, unit_num, qs_json):
    return f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>{title} - Primary 1 Unit {unit_num}</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-tap-highlight-color: transparent; }}
  body {{ background: #0c1427; color: #fff; font-family: 'Cairo', 'Segoe UI', sans-serif; overflow: hidden; height: 100vh; display: flex; flex-direction: column; }}
  .font-en {{ font-family: 'Outfit', sans-serif; }}
  
  .g-hud {{ display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: rgba(12,20,39,0.85); backdrop-filter: blur(12px); border-bottom: 2px solid #ec4899; z-index: 10; height: 55px; }}
  .g-title {{ font-size: 1.15rem; font-weight: 900; color: #ec4899; text-shadow: 0 0 12px rgba(236,72,153,0.4); display: flex; align-items: center; gap: 8px; }}
  .g-qnum {{ font-size: 1rem; color: #f8fafc; background: rgba(255,255,255,0.1); padding: 4px 14px; border-radius: 20px; font-weight: 700; font-family: 'Outfit', sans-serif; }}
  .g-score {{ font-size: 1.15rem; font-weight: 900; color: #10b981; font-family: 'Outfit', sans-serif; }}
  
  .g-qpanel {{ background: rgba(12,20,39,0.92); padding: 12px 20px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); z-index: 10; min-height: 85px; display: flex; align-items: center; justify-content: center; gap: 16px; }}
  .q-img {{ width: 65px; height: 65px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); border-radius: 12px; background: rgba(255,255,255,0.08); padding: 4px; border: 1px solid rgba(255,255,255,0.15); }}
  #qt {{ font-size: 1.35rem !important; color: #ffffff !important; font-weight: 800 !important; line-height: 1.35 !important; font-family: 'Outfit', sans-serif; }}
  
  .g-targets {{ position: absolute; inset: 0; z-index: 8; pointer-events: none; }}
  .tbtn {{ position: absolute; pointer-events: auto; background: radial-gradient(circle at 30% 30%, rgba(244,63,94,0.85), rgba(190,18,60,0.9)); border: 2px solid rgba(255,255,255,0.4); color: #fff; padding: 16px 26px !important; font-size: 1.25rem !important; font-weight: 900 !important; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; cursor: pointer; transition: transform 0.15s; box-shadow: 0 10px 25px rgba(244,63,94,0.4); text-align: center; min-width: 130px; font-family: 'Outfit', sans-serif; }}
  .tbtn:hover {{ transform: scale(1.1); box-shadow: 0 14px 35px rgba(244,63,94,0.7); }}
  .tbtn.correct {{ background: radial-gradient(circle at 30% 30%, #34d399, #059669) !important; border-color: #a7f3d0 !important; transform: scale(1.2); box-shadow: 0 0 35px #10b981; }}
  .tbtn.wrong {{ background: radial-gradient(circle at 30% 30%, #64748b, #334155) !important; opacity: 0.5; transform: scale(0.9); }}

  .g-canvas {{ flex: 1; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; }}
  .g-pbar {{ height: 5px; background: #ec4899; width: 0%; transition: width 0.3s ease; position: absolute; bottom: 0; left: 0; z-index: 10; box-shadow: 0 0 10px #ec4899; }}

  .g-end {{ display: none; position: fixed; inset: 0; background: rgba(12,20,39,0.95); backdrop-filter: blur(20px); z-index: 100; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 20px; }}
  .g-end h1 {{ font-size: 2.8rem; color: #ec4899; text-shadow: 0 0 25px rgba(236,72,153,0.6); }}
  .g-end p {{ font-size: 1.8rem; color: #10b981; font-weight: 800; font-family: 'Outfit', sans-serif; }}
  .g-end button {{ padding: 14px 36px; font-size: 1.25rem; font-weight: 900; background: #ec4899; border: none; color: #fff; border-radius: 30px; cursor: pointer; transition: 0.2s; box-shadow: 0 8px 25px rgba(236,72,153,0.4); }}
  .g-end button:hover {{ transform: scale(1.06); box-shadow: 0 0 35px #ec4899; }}
</style>
</head>
<body>

<div class="g-hud" id="hud">
  <div class="g-title">🎈 {title}</div>
  <div id="qn" class="g-qnum">1 / 15</div>
  <div class="g-score">Score: <span id="sc">0</span></div>
</div>

<div class="g-qpanel">
  <img id="qImg" src="../../images/games/p1/trophy_cup.png" alt="Icon" class="q-img">
  <div id="qt">Loading...</div>
</div>
<div id="tg" class="g-targets"></div>
<canvas id="cv" class="g-canvas"></canvas>
<div id="pb" class="g-pbar"></div>

<div id="end" class="g-end">
  <h1 id="eh">Awesome! 🎉</h1>
  <p id="es">Score: 0</p>
  <button onclick="location.reload()">Play Again 🔄</button>
</div>

<script>
const QS = {qs_json};
let qi=0, score=0, locked=false, animId=null, time=0;
let cv, ctx, W, H, AC;
let balloons = [];

window.addEventListener('load', () => {{
  cv = document.getElementById('cv'); ctx = cv.getContext('2d');
  resize(); window.addEventListener('resize', resize);
  AC = new (window.AudioContext || window.webkitAudioContext)();
  loadQ(); loop();
}});

function resize() {{ W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }}

function tone(f,d,t,v) {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  try {{
    const o=AC.createOscillator(), gn=AC.createGain(); o.connect(gn); gn.connect(AC.destination);
    o.type=t||'sine'; o.frequency.value=f; gn.gain.setValueAtTime(v||0.3, AC.currentTime);
    gn.gain.exponentialRampToValueAtTime(0.001, AC.currentTime+d); o.start(); o.stop(AC.currentTime+d);
  }} catch(e) {{}}
}}

function playApplauseSnd() {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  tone(523.25, 0.1, 'sine', 0.4);
  setTimeout(()=> tone(659.25, 0.1, 'sine', 0.4), 90);
  setTimeout(()=> tone(783.99, 0.12, 'sine', 0.4), 180);
  setTimeout(()=> tone(1046.50, 0.35, 'triangle', 0.5), 270);
}}

function loadQ() {{
  if(qi >= QS.length) {{ endG(); return; }}
  locked = false;
  const q = QS[qi];
  document.getElementById('qn').innerText = `${{qi+1}} / ${{QS.length}}`;
  document.getElementById('qt').innerText = q.q;
  document.getElementById('qImg').src = q.img ? ('../../' + q.img) : '../../images/games/p1/trophy_cup.png';
  document.getElementById('pb').style.width = `${{(qi/QS.length)*100}}%`;
  
  const tg = document.getElementById('tg'); tg.innerHTML = '';
  balloons = [];
  
  const bColors = [
    'radial-gradient(circle at 30% 30%, #f43f5e, #be123c)',
    'radial-gradient(circle at 30% 30%, #3b82f6, #1d4ed8)',
    'radial-gradient(circle at 30% 30%, #10b981, #047857)',
    'radial-gradient(circle at 30% 30%, #f59e0b, #d97706)'
  ];
  
  q.choices.forEach((c, idx) => {{
    const btn = document.createElement('button');
    btn.className = 'tbtn';
    btn.style.background = bColors[idx % bColors.length];
    btn.innerText = c;
    btn.onclick = () => popBalloon(idx, btn);
    tg.appendChild(btn);
    
    balloons.push({{
      el: btn,
      x: W * 0.15 + (idx * (W * 0.28)),
      y: H * 0.45 + (idx % 2 === 0 ? 0 : 60),
      offset: idx * 1.5
    }});
  }});
}}

function popBalloon(idx, btn) {{
  if(locked) return; locked = true;
  const q = QS[qi];
  const isCorrect = (idx === q.answer);
  
  if(isCorrect) {{
    btn.classList.add('correct');
    score += 10;
    document.getElementById('sc').innerText = score;
    tone(600, 0.1, 'sine', 0.4);
    playApplauseSnd();
  }} else {{
    btn.classList.add('wrong');
    tone(130, 0.25, 'sawtooth', 0.4);
  }}
  
  setTimeout(() => {{
    qi++; loadQ();
  }}, 1100);
}}

function loop() {{
  time += 0.04;
  ctx.clearRect(0, 0, W, H);
  
  balloons.forEach(b => {{
    const curY = b.y + Math.sin(time + b.offset) * 18;
    b.el.style.left = `${{b.x}}px`;
    b.el.style.top = `${{curY}}px`;
    
    // Draw balloon string
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(b.x + 65, curY + 60);
    ctx.bezierCurveTo(b.x + 65 + Math.sin(time)*10, curY + 90, b.x + 65 - Math.sin(time)*10, curY + 110, b.x + 65, curY + 130);
    ctx.stroke();
  }});
  
  animId = requestAnimationFrame(loop);
}}

function endG() {{
  document.getElementById('end').style.display = 'flex';
  document.getElementById('es').innerText = `Score: ${{score}} / ${{QS.length * 10}}`;
  playApplauseSnd();
}}
</script>
</body>
</html>"""

def get_spaceship_template(title, unit_num, qs_json):
    return f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>{title} - Primary 1 Unit {unit_num}</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-tap-highlight-color: transparent; }}
  body {{ background: #050510; color: #fff; font-family: 'Cairo', 'Segoe UI', sans-serif; overflow: hidden; height: 100vh; display: flex; flex-direction: column; }}
  .font-en {{ font-family: 'Outfit', sans-serif; }}
  
  .g-hud {{ display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: rgba(5,5,16,0.85); backdrop-filter: blur(12px); border-bottom: 2px solid #8b5cf6; z-index: 10; height: 55px; }}
  .g-title {{ font-size: 1.15rem; font-weight: 900; color: #a78bfa; text-shadow: 0 0 12px rgba(167,139,250,0.4); display: flex; align-items: center; gap: 8px; }}
  .g-qnum {{ font-size: 1rem; color: #f8fafc; background: rgba(255,255,255,0.1); padding: 4px 14px; border-radius: 20px; font-weight: 700; font-family: 'Outfit', sans-serif; }}
  .g-score {{ font-size: 1.15rem; font-weight: 900; color: #10b981; font-family: 'Outfit', sans-serif; }}
  
  .g-qpanel {{ background: rgba(5,5,16,0.92); padding: 12px 20px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); z-index: 10; min-height: 85px; display: flex; align-items: center; justify-content: center; gap: 16px; }}
  .q-img {{ width: 65px; height: 65px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); border-radius: 12px; background: rgba(255,255,255,0.08); padding: 4px; border: 1px solid rgba(255,255,255,0.15); }}
  #qt {{ font-size: 1.35rem !important; color: #ffffff !important; font-weight: 800 !important; line-height: 1.35 !important; font-family: 'Outfit', sans-serif; }}
  
  .g-targets {{ position: absolute; width: 100%; top: 34%; display: flex; justify-content: space-around; padding: 0 16px; z-index: 8; pointer-events: none; }}
  .tbtn {{ pointer-events: auto; background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(139,92,246,0.1)); border: 2.5px solid #a78bfa; color: #fff; padding: 14px 24px !important; font-size: 1.25rem !important; font-weight: 900 !important; border-radius: 20px; cursor: pointer; transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0,0,0,0.6); min-width: 130px; text-align: center; font-family: 'Outfit', sans-serif; }}
  .tbtn:hover {{ transform: translateY(-4px) scale(1.05); background: #8b5cf6; color: #fff; box-shadow: 0 12px 30px rgba(139,92,246,0.6); }}
  .tbtn.correct {{ background: #10b981 !important; border-color: #059669 !important; color: #fff !important; transform: scale(1.12); box-shadow: 0 0 30px #10b981; }}
  .tbtn.wrong {{ background: #f43f5e !important; border-color: #e11d48 !important; color: #fff !important; opacity: 0.55; transform: scale(0.94); }}

  .g-canvas {{ flex: 1; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; }}
  .g-pbar {{ height: 5px; background: #8b5cf6; width: 0%; transition: width 0.3s ease; position: absolute; bottom: 0; left: 0; z-index: 10; box-shadow: 0 0 10px #8b5cf6; }}

  .g-end {{ display: none; position: fixed; inset: 0; background: rgba(5,5,16,0.95); backdrop-filter: blur(20px); z-index: 100; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 20px; }}
  .g-end h1 {{ font-size: 2.8rem; color: #a78bfa; text-shadow: 0 0 25px rgba(167,139,250,0.6); }}
  .g-end p {{ font-size: 1.8rem; color: #10b981; font-weight: 800; font-family: 'Outfit', sans-serif; }}
  .g-end button {{ padding: 14px 36px; font-size: 1.25rem; font-weight: 900; background: #8b5cf6; border: none; color: #fff; border-radius: 30px; cursor: pointer; transition: 0.2s; box-shadow: 0 8px 25px rgba(139,92,246,0.4); }}
  .g-end button:hover {{ transform: scale(1.06); box-shadow: 0 0 35px #8b5cf6; }}
</style>
</head>
<body>

<div class="g-hud" id="hud">
  <div class="g-title">🚀 {title}</div>
  <div id="qn" class="g-qnum">1 / 15</div>
  <div class="g-score">Score: <span id="sc">0</span></div>
</div>

<div class="g-qpanel">
  <img id="qImg" src="../../images/games/p1/trophy_cup.png" alt="Icon" class="q-img">
  <div id="qt">Loading...</div>
</div>
<div id="tg" class="g-targets"></div>
<canvas id="cv" class="g-canvas"></canvas>
<div id="pb" class="g-pbar"></div>

<div id="end" class="g-end">
  <h1 id="eh">Awesome! 🎉</h1>
  <p id="es">Score: 0</p>
  <button onclick="location.reload()">Play Again 🔄</button>
</div>

<script>
const QS = {qs_json};
let qi=0, score=0, locked=false, lasers=[], stars=[], animId=null;
let cv, ctx, W, H, AC;
let shipX = 0;

window.addEventListener('load', () => {{
  cv = document.getElementById('cv'); ctx = cv.getContext('2d');
  resize(); window.addEventListener('resize', resize);
  AC = new (window.AudioContext || window.webkitAudioContext)();
  initStars();
  loadQ(); loop();
}});

function resize() {{ W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; shipX = W/2; }}

function tone(f,d,t,v) {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  try {{
    const o=AC.createOscillator(), gn=AC.createGain(); o.connect(gn); gn.connect(AC.destination);
    o.type=t||'sine'; o.frequency.value=f; gn.gain.setValueAtTime(v||0.3, AC.currentTime);
    gn.gain.exponentialRampToValueAtTime(0.001, AC.currentTime+d); o.start(); o.stop(AC.currentTime+d);
  }} catch(e) {{}}
}}

function playApplauseSnd() {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  tone(523.25, 0.1, 'sine', 0.4);
  setTimeout(()=> tone(659.25, 0.1, 'sine', 0.4), 90);
  setTimeout(()=> tone(783.99, 0.12, 'sine', 0.4), 180);
  setTimeout(()=> tone(1046.50, 0.35, 'triangle', 0.5), 270);
}}

function initStars() {{
  stars = [];
  for(let i=0; i<60; i++) {{
    stars.push({{ x: Math.random()*W, y: Math.random()*H, speed: Math.random()*2+1, r: Math.random()*1.5+0.5 }});
  }}
}}

function loadQ() {{
  if(qi >= QS.length) {{ endG(); return; }}
  locked = false;
  const q = QS[qi];
  document.getElementById('qn').innerText = `${{qi+1}} / ${{QS.length}}`;
  document.getElementById('qt').innerText = q.q;
  document.getElementById('qImg').src = q.img ? ('../../' + q.img) : '../../images/games/p1/trophy_cup.png';
  document.getElementById('pb').style.width = `${{(qi/QS.length)*100}}%`;
  
  const tg = document.getElementById('tg'); tg.innerHTML = '';
  q.choices.forEach((c, idx) => {{
    const btn = document.createElement('button');
    btn.className = 'tbtn';
    btn.innerText = c;
    btn.onclick = () => fireLaser(idx, btn);
    tg.appendChild(btn);
  }});
}}

function fireLaser(idx, btn) {{
  if(locked) return; locked = true;
  const q = QS[qi];
  const isCorrect = (idx === q.answer);
  
  const rect = btn.getBoundingClientRect();
  const tx = rect.left + rect.width/2;
  const ty = rect.top + rect.height/2;
  
  shipX = tx;
  
  lasers.push({{
    x: tx, y: H - 70, targetY: ty,
    isCorrect: isCorrect, btn: btn
  }});
  
  tone(880, 0.1, 'square', 0.3);
}}

function loop() {{
  ctx.clearRect(0, 0, W, H);
  
  // Starfield
  ctx.fillStyle = '#fff';
  stars.forEach(s => {{
    s.y += s.speed;
    if(s.y > H) {{ s.y = 0; s.x = Math.random()*W; }}
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
  }});
  
  // Draw Spaceship at bottom
  const sy = H - 55;
  ctx.fillStyle = '#8b5cf6';
  ctx.beginPath();
  ctx.moveTo(shipX, sy - 30);
  ctx.lineTo(shipX - 25, sy + 20);
  ctx.lineTo(shipX + 25, sy + 20);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle = '#06b6d4';
  ctx.beginPath(); ctx.arc(shipX, sy, 8, 0, Math.PI*2); ctx.fill();
  
  // Thruster Flame
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.moveTo(shipX - 10, sy + 20);
  ctx.lineTo(shipX + 10, sy + 20);
  ctx.lineTo(shipX, sy + 35 + Math.random()*10);
  ctx.closePath();
  ctx.fill();
  
  // Lasers
  for(let i=lasers.length-1; i>=0; i--) {{
    const l = lasers[i];
    l.y -= 25;
    
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(l.x, l.y - 30);
    ctx.stroke();
    
    if(l.y <= l.targetY) {{
      hitLaser(l);
      lasers.splice(i, 1);
    }}
  }}
  
  animId = requestAnimationFrame(loop);
}}

function hitLaser(l) {{
  if(l.isCorrect) {{
    l.btn.classList.add('correct');
    score += 10;
    document.getElementById('sc').innerText = score;
    playApplauseSnd();
  }} else {{
    l.btn.classList.add('wrong');
    tone(140, 0.25, 'sawtooth', 0.4);
  }}
  
  setTimeout(() => {{
    qi++; loadQ();
  }}, 1100);
}}

function endG() {{
  document.getElementById('end').style.display = 'flex';
  document.getElementById('es').innerText = `Score: ${{score}} / ${{QS.length * 10}}`;
  playApplauseSnd();
}}
</script>
</body>
</html>"""

def get_archery_template(title, unit_num, qs_json):
    return f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>{title} - Primary 1 Unit {unit_num}</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-tap-highlight-color: transparent; }}
  body {{ background: #061a14; color: #fff; font-family: 'Cairo', 'Segoe UI', sans-serif; overflow: hidden; height: 100vh; display: flex; flex-direction: column; }}
  .font-en {{ font-family: 'Outfit', sans-serif; }}
  
  .g-hud {{ display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: rgba(6,26,20,0.85); backdrop-filter: blur(12px); border-bottom: 2px solid #10b981; z-index: 10; height: 55px; }}
  .g-title {{ font-size: 1.15rem; font-weight: 900; color: #10b981; text-shadow: 0 0 12px rgba(16,185,129,0.4); display: flex; align-items: center; gap: 8px; }}
  .g-qnum {{ font-size: 1rem; color: #f8fafc; background: rgba(255,255,255,0.1); padding: 4px 14px; border-radius: 20px; font-weight: 700; font-family: 'Outfit', sans-serif; }}
  .g-score {{ font-size: 1.15rem; font-weight: 900; color: #10b981; font-family: 'Outfit', sans-serif; }}
  
  .g-qpanel {{ background: rgba(6,26,20,0.92); padding: 12px 20px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); z-index: 10; min-height: 85px; display: flex; align-items: center; justify-content: center; gap: 16px; }}
  .q-img {{ width: 65px; height: 65px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); border-radius: 12px; background: rgba(255,255,255,0.08); padding: 4px; border: 1px solid rgba(255,255,255,0.15); }}
  #qt {{ font-size: 1.35rem !important; color: #ffffff !important; font-weight: 800 !important; line-height: 1.35 !important; font-family: 'Outfit', sans-serif; }}
  
  .g-targets {{ position: absolute; width: 100%; top: 34%; display: flex; justify-content: space-around; padding: 0 16px; z-index: 8; pointer-events: none; }}
  .tbtn {{ pointer-events: auto; background: linear-gradient(135deg, rgba(16,185,129,0.25), rgba(16,185,129,0.08)); border: 2.5px solid #10b981; color: #fff; padding: 14px 24px !important; font-size: 1.25rem !important; font-weight: 900 !important; border-radius: 20px; cursor: pointer; transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0,0,0,0.6); min-width: 130px; text-align: center; font-family: 'Outfit', sans-serif; }}
  .tbtn:hover {{ transform: translateY(-4px) scale(1.05); background: #10b981; color: #061a14; box-shadow: 0 12px 30px rgba(16,185,129,0.6); }}
  .tbtn.correct {{ background: #10b981 !important; border-color: #059669 !important; color: #fff !important; transform: scale(1.12); box-shadow: 0 0 30px #10b981; }}
  .tbtn.wrong {{ background: #f43f5e !important; border-color: #e11d48 !important; color: #fff !important; opacity: 0.55; transform: scale(0.94); }}

  .g-canvas {{ flex: 1; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; }}
  .g-pbar {{ height: 5px; background: #10b981; width: 0%; transition: width 0.3s ease; position: absolute; bottom: 0; left: 0; z-index: 10; box-shadow: 0 0 10px #10b981; }}

  .g-end {{ display: none; position: fixed; inset: 0; background: rgba(6,26,20,0.95); backdrop-filter: blur(20px); z-index: 100; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 20px; }}
  .g-end h1 {{ font-size: 2.8rem; color: #10b981; text-shadow: 0 0 25px rgba(16,185,129,0.6); }}
  .g-end p {{ font-size: 1.8rem; color: #10b981; font-weight: 800; font-family: 'Outfit', sans-serif; }}
  .g-end button {{ padding: 14px 36px; font-size: 1.25rem; font-weight: 900; background: #10b981; border: none; color: #061a14; border-radius: 30px; cursor: pointer; transition: 0.2s; box-shadow: 0 8px 25px rgba(16,185,129,0.4); }}
  .g-end button:hover {{ transform: scale(1.06); box-shadow: 0 0 35px #10b981; }}
</style>
</head>
<body>

<div class="g-hud" id="hud">
  <div class="g-title">🏹 {title}</div>
  <div id="qn" class="g-qnum">1 / 15</div>
  <div class="g-score">Score: <span id="sc">0</span></div>
</div>

<div class="g-qpanel">
  <img id="qImg" src="../../images/games/p1/trophy_cup.png" alt="Icon" class="q-img">
  <div id="qt">Loading...</div>
</div>
<div id="tg" class="g-targets"></div>
<canvas id="cv" class="g-canvas"></canvas>
<div id="pb" class="g-pbar"></div>

<div id="end" class="g-end">
  <h1 id="eh">Awesome! 🎉</h1>
  <p id="es">Score: 0</p>
  <button onclick="location.reload()">Play Again 🔄</button>
</div>

<script>
const QS = {qs_json};
let qi=0, score=0, locked=false, arrows=[], animId=null;
let cv, ctx, W, H, AC;

window.addEventListener('load', () => {{
  cv = document.getElementById('cv'); ctx = cv.getContext('2d');
  resize(); window.addEventListener('resize', resize);
  AC = new (window.AudioContext || window.webkitAudioContext)();
  loadQ(); loop();
}});

function resize() {{ W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }}

function tone(f,d,t,v) {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  try {{
    const o=AC.createOscillator(), gn=AC.createGain(); o.connect(gn); gn.connect(AC.destination);
    o.type=t||'sine'; o.frequency.value=f; gn.gain.setValueAtTime(v||0.3, AC.currentTime);
    gn.gain.exponentialRampToValueAtTime(0.001, AC.currentTime+d); o.start(); o.stop(AC.currentTime+d);
  }} catch(e) {{}}
}}

function playApplauseSnd() {{
  if(!AC) return; if(AC.state==='suspended') AC.resume();
  tone(523.25, 0.1, 'sine', 0.4);
  setTimeout(()=> tone(659.25, 0.1, 'sine', 0.4), 90);
  setTimeout(()=> tone(783.99, 0.12, 'sine', 0.4), 180);
  setTimeout(()=> tone(1046.50, 0.35, 'triangle', 0.5), 270);
}}

function loadQ() {{
  if(qi >= QS.length) {{ endG(); return; }}
  locked = false;
  const q = QS[qi];
  document.getElementById('qn').innerText = `${{qi+1}} / ${{QS.length}}`;
  document.getElementById('qt').innerText = q.q;
  document.getElementById('qImg').src = q.img ? ('../../' + q.img) : '../../images/games/p1/trophy_cup.png';
  document.getElementById('pb').style.width = `${{(qi/QS.length)*100}}%`;
  
  const tg = document.getElementById('tg'); tg.innerHTML = '';
  q.choices.forEach((c, idx) => {{
    const btn = document.createElement('button');
    btn.className = 'tbtn';
    btn.innerText = c;
    btn.onclick = () => shootArrow(idx, btn);
    tg.appendChild(btn);
  }});
}}

function shootArrow(idx, btn) {{
  if(locked) return; locked = true;
  const q = QS[qi];
  const isCorrect = (idx === q.answer);
  
  const rect = btn.getBoundingClientRect();
  const tx = rect.left + rect.width/2;
  const ty = rect.top + rect.height/2;
  
  arrows.push({{
    x: W/2, y: H - 60, tx: tx, ty: ty,
    vx: (tx - W/2)/12, vy: (ty - (H-60))/12,
    isCorrect: isCorrect, btn: btn
  }});
  
  tone(440, 0.12, 'triangle', 0.3);
}}

function loop() {{
  ctx.clearRect(0, 0, W, H);
  
  // Bow at bottom
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(W/2, H - 35, 45, Math.PI*1.1, Math.PI*1.9);
  ctx.stroke();
  
  for(let i=arrows.length-1; i>=0; i--) {{
    const a = arrows[i];
    a.x += a.vx; a.y += a.vy;
    
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(a.x - a.vx*1.5, a.y - a.vy*1.5);
    ctx.stroke();
    
    const dist = Math.hypot(a.x - a.tx, a.y - a.ty);
    if(dist < 20 || a.y <= a.ty) {{
      hitArrow(a);
      arrows.splice(i, 1);
    }}
  }}
  
  animId = requestAnimationFrame(loop);
}}

function hitArrow(a) {{
  if(a.isCorrect) {{
    a.btn.classList.add('correct');
    score += 10;
    document.getElementById('sc').innerText = score;
    playApplauseSnd();
  }} else {{
    a.btn.classList.add('wrong');
    tone(130, 0.25, 'sawtooth', 0.4);
  }}
  
  setTimeout(() => {{
    qi++; loadQ();
  }}, 1100);
}}

function endG() {{
  document.getElementById('end').style.display = 'flex';
  document.getElementById('es').innerText = `Score: ${{score}} / ${{QS.length * 10}}`;
  playApplauseSnd();
}}
</script>
</body>
</html>"""

# Now iterate over all 6 worlds and generate 5 games per unit!
new_p1_games_map = {}

for w in adv_data["worlds"]:
    u_id = str(w["id"])
    u_dir = f"games/primary-1/unit{u_id}"
    os.makedirs(u_dir, exist_ok=True)
    
    # Collect all questions in this world
    all_qs = []
    for l in w["lessons"]:
        for g in l["games"]:
            for q in g["questions"]:
                # Convert options and answer string to choice array + answer index
                choices = q["options"]
                correct_ans = q["a"]
                try:
                    ans_idx = choices.index(correct_ans)
                except:
                    ans_idx = 0
                all_qs.append({
                    "q": q["q"],
                    "choices": choices,
                    "answer": ans_idx,
                    "img": q.get("img", "")
                })
    
    # Partition into 5 sets of 15 questions (or cycle if fewer)
    def get_qs_slice(start_idx, count=15):
        res = []
        for i in range(count):
            idx = (start_idx + i) % len(all_qs)
            res.append(all_qs[idx])
        return res

    games_defs = [
        {"file": "G1_cannon.html", "name": "مدفع الكلمات والحروف 💣", "tpl": get_cannon_template, "qs": get_qs_slice(0, 15)},
        {"file": "G1_fishing.html", "name": "صائد الأسماك السحري 🎣", "tpl": get_fishing_template, "qs": get_qs_slice(15, 15)},
        {"file": "G3_balloon.html", "name": "فرقعة البالونات السريعة 🎈", "tpl": get_balloon_template, "qs": get_qs_slice(30, 15)},
        {"file": "G4_spaceship.html", "name": "سفينة الفضاء والدفاع النيزكي 🚀", "tpl": get_spaceship_template, "qs": get_qs_slice(5, 15)},
        {"file": "G5_archery.html", "name": "رمي السهام والنيشان 🏹", "tpl": get_archery_template, "qs": get_qs_slice(20, 15)}
    ]
    
    new_p1_games_map[u_id] = []
    
    for gd in games_defs:
        qs_json_str = json.dumps(gd["qs"], ensure_ascii=False)
        html_content = gd["tpl"](gd["name"], u_id, qs_json_str)
        
        file_path = os.path.join(u_dir, gd["file"])
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html_content)
            
        new_p1_games_map[u_id].append({
            "name": gd["name"],
            "file": gd["file"]
        })

print("Generated all 30 rich arcade games for Units 1 to 6!")

# Update js/data.js and games_map.json
with open('js/data.js', 'r', encoding='utf-8') as f:
    data_js = f.read()

p1_json_str = json.dumps(new_p1_games_map, ensure_ascii=False)

data_js = re.sub(
    r'"primary-1"\s*:\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}',
    f'"primary-1": {p1_json_str}',
    data_js,
    count=1
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_js)
print("Updated js/data.js with rich arcade games.")

with open('games_map.json', 'r', encoding='utf-8') as f:
    gm = json.load(f)
gm["primary-1"] = new_p1_games_map
with open('games_map.json', 'w', encoding='utf-8') as f:
    json.dump(gm, f, ensure_ascii=False, indent=2)
print("Updated games_map.json successfully.")
