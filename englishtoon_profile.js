/* EnglishToon local student profile, score bridge, choice visibility repair. */
(function(){
  'use strict';
  const VERSION='v2';
  const LABELS={
    'primary-1':'الصف الأول الابتدائي','primary-2':'الصف الثاني الابتدائي','primary-3':'الصف الثالث الابتدائي','primary-4':'الصف الرابع الابتدائي','primary-5':'الصف الخامس الابتدائي','primary-6':'الصف السادس الابتدائي','prep-1':'الصف الأول الإعدادي','prep-2':'الصف الثاني الإعدادي','prep-3':'الصف الثالث الإعدادي'
  };
  function gradeFromPath(){
    const m=location.pathname.match(/(?:games\/)(primary-[1-6]|prep-[1-3])(?:\/|$)/i);
    const q=new URLSearchParams(location.search).get('grade');
    return (m&&m[1].toLowerCase()) || (q&&LABELS[q]?q:null) || localStorage.getItem('et_current_grade') || 'primary-1';
  }
  function key(g){return `et_grade_profile_${g}_${VERSION}`;}
  function fresh(){return {activeName:'',players:{}};}
  function load(g){try{return Object.assign(fresh(),JSON.parse(localStorage.getItem(key(g))||'{}'));}catch(e){return fresh();}}
  function save(g,p){try{localStorage.setItem(key(g),JSON.stringify(p));localStorage.setItem('et_current_grade',g);if(p.activeName)localStorage.setItem('et_student_name',p.activeName);}catch(e){}}
  function ensurePlayer(g,name){const p=load(g);const n=String(name||p.activeName||'').trim().slice(0,40);if(!n)return p;p.activeName=n;p.players[n] ||= {name:n,points:0,bestScore:0,games:0,correct:0,items:[],lastPlayed:''};return p;}
  function get(g){const p=load(g||gradeFromPath());return p;}
  function setName(g,name){const p=ensurePlayer(g||gradeFromPath(),name);save(g||gradeFromPath(),p);return p;}
  function profile(g){const p=get(g);return p.activeName?(p.players[p.activeName]||{name:p.activeName,points:0,bestScore:0,games:0,correct:0}):null;}
  function hydrate(g,d){g=g||gradeFromPath();if(!d||!d.name)return null;const p=load(g);p.activeName=String(d.name).slice(0,40);p.players=p.players||{};p.players[p.activeName]=Object.assign({name:p.activeName,points:0,bestScore:0,games:0,correct:0,items:[]},d,{name:p.activeName,points:Number(d.points)||0,bestScore:Number(d.bestScore)||0,games:Number(d.games)||0,correct:Number(d.correct)||0,inventory:Array.isArray(d.inventory)?d.inventory:[]});save(g,p);return p.players[p.activeName];}
  function award(g,points,meta){
    g=g||gradeFromPath();const registeredGrade=localStorage.getItem('et_current_grade');if(localStorage.getItem('et_student_registered')==='true'&&registeredGrade&&registeredGrade!==g){console.warn('Score blocked: game grade does not match the student-selected grade.');return null;}const p=load(g);if(!p.activeName)return null;p.players=p.players||{};p.players[p.activeName] ||= {name:p.activeName,points:0,bestScore:0,games:0,correct:0,items:[],lastPlayed:''};const pl=p.players[p.activeName];
    const pts=Math.max(0,Math.round(Number(points)||0));pl.points+=pts;pl.games++;pl.correct+=Math.max(0,Math.round(Number(meta&&meta.correct)||0));pl.bestScore=Math.max(pl.bestScore,Math.round(Number(meta&&meta.score)||0));pl.lastPlayed=new Date().toISOString();
    if(meta&&meta.game)pl.items=(pl.items||[]).concat([{game:String(meta.game).slice(0,100),points:pts,at:pl.lastPlayed}]).slice(-30);
    save(g,p);if(window.EnglishtoonCloud?.recordAward)window.EnglishtoonCloud.recordAward(g,pl,pts,meta||{}).catch(()=>{});return pl;
  }
  function leaderboard(g){const p=get(g||gradeFromPath());return Object.values(p.players||{}).sort((a,b)=>(b.points||0)-(a.points||0)||String(a.name).localeCompare(String(b.name))).slice(0,20);}
  function points(g){const x=profile(g);return x?x.points:0;}
  function spend(g,amount,itemId){g=g||gradeFromPath();const p=load(g);if(!p.activeName)return {ok:false,reason:'no_name'};p.players=p.players||{};p.players[p.activeName] ||= {name:p.activeName,points:0,bestScore:0,games:0,correct:0,items:[],lastPlayed:''};const pl=p.players[p.activeName];const n=Math.max(0,Math.round(Number(amount)||0));if((pl.points||0)<n)return {ok:false,reason:'insufficient',points:pl.points||0};pl.points-=n;pl.inventory=Array.isArray(pl.inventory)?pl.inventory:[];if(itemId&&!pl.inventory.includes(itemId))pl.inventory.push(itemId);save(g,p);return {ok:true,points:pl.points,player:pl};}
  function owns(g,itemId){const x=profile(g);return !!(x&&Array.isArray(x.inventory)&&x.inventory.includes(itemId));}
  function equip(g,itemId){g=g||gradeFromPath();const p=load(g);if(!p.activeName)return null;p.players=p.players||{};p.players[p.activeName] ||= {name:p.activeName,points:0,bestScore:0,games:0,correct:0,items:[],lastPlayed:''};const pl=p.players[p.activeName];pl.equipped=pl.equipped||{};pl.equipped[itemId]=true;save(g,p);return pl;}
  function name(g){return get(g||gradeFromPath()).activeName||'';}
  function installNameGate(){
    const g=gradeFromPath();
    if(document.getElementById('et-name-gate'))return;
    if(localStorage.getItem('et_student_registered')==='true'){showChip(g);return;}
    const p=get(g),existing=p.activeName||'',pendingName=localStorage.getItem('et_pending_name')||'',confirmed=localStorage.getItem('et_grade_confirmed_'+g)==='true';
    if(existing&&confirmed){showChip(g);return;}
    const style=document.createElement('style');style.id='et-profile-style';style.textContent=`
#et-name-gate{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 50% 15%,#26366f,#080b1b 72%);padding:20px;font-family:Cairo,Arial,sans-serif}
#et-name-gate.et-gone{display:none!important}.et-name-card{width:min(460px,94vw);padding:28px 22px;border-radius:28px;text-align:center;color:#fff;background:linear-gradient(145deg,rgba(31,45,93,.98),rgba(10,14,35,.98));border:2px solid rgba(255,209,102,.5);box-shadow:0 24px 70px rgba(0,0,0,.45)}.et-name-card h2{margin:0 0 8px;font-size:clamp(22px,6vw,34px)}.et-name-card p{margin:0 0 18px;color:#b9c5ef;font-weight:700}.et-name-card label{display:block;text-align:right;margin:0 2px 6px;color:#ffd166;font-size:13px;font-weight:900}.et-name-card select,.et-name-card input{width:100%;padding:14px 16px;border-radius:15px;border:2px solid #6176cf;background:#101735;color:#fff;font-size:18px;text-align:center;outline:none;margin-bottom:10px}.et-name-card select:focus,.et-name-card input:focus{border-color:#ffd166;box-shadow:0 0 0 4px rgba(255,209,102,.15)}.et-name-card button{margin-top:8px;width:100%;padding:14px;border:0;border-radius:15px;background:linear-gradient(135deg,#ffd166,#f59e0b);color:#251a00;font-weight:900;font-size:18px;cursor:pointer}.et-name-card button:disabled{opacity:.45;filter:grayscale(1);cursor:not-allowed}.et-name-skip{display:block;margin:12px auto 0!important;color:#a9b6e8!important;background:none!important;border:0!important;font-weight:700!important;cursor:pointer;font-size:14px!important}
/* Universal visibility fallback for answer controls in all game engines. */
#choices>* ,#gg-choices>* ,#targets>* ,#tg>* ,.choices>* ,.options>* ,.answers>* ,.target-btn,.choice-btn,.option-btn,.tbtn,.gg-target,.gg-food,.letter-btn,.word-btn,.answer-btn{visibility:visible;color:#fff;text-shadow:0 2px 3px rgba(0,0,0,.88);pointer-events:auto!important}
#choices>*,#gg-choices>*,#targets>*,#tg>*,.choices>*,.options>*,.answers>*{border-color:rgba(255,209,102,.9)!important}
`;
    document.head.appendChild(style);
    const options='<option value="" selected disabled>اختر الصف الدراسي</option>'+Object.entries(LABELS).map(([id,label])=>`<option value="${id}">${label}</option>`).join('');
    const gate=document.createElement('div');gate.id='et-name-gate';gate.innerHTML=`<div class="et-name-card"><div style="font-size:48px">🎮</div><h2>ابدأ باختيار صفك</h2><p>اختر صفك أولًا حتى تُحفظ النتيجة في ترتيبه الصحيح، ثم اكتب اسم الطالب</p><label for="et-grade-select">الصف الدراسي</label><select id="et-grade-select">${options}</select><input id="et-name-input" maxlength="40" autocomplete="name" placeholder="اسم الطالب" value="${String(existing||pendingName).replace(/"/g,'&quot;')}"><button id="et-name-save">تأكيد الصف والدخول إلى اللعبة ▶</button></div>`;document.body.appendChild(gate);
    const input=gate.querySelector('#et-name-input'),gradeSelect=gate.querySelector('#et-grade-select'),saveButton=gate.querySelector('#et-name-save');saveButton.disabled=true;gradeSelect.addEventListener('change',()=>{saveButton.disabled=!LABELS[gradeSelect.value];});
    const chooseGrade=(nameForTransfer)=>{const selected=gradeSelect.value;if(selected!==g){localStorage.setItem('et_current_grade',selected);localStorage.setItem('et_pending_grade',selected);localStorage.setItem('et_pending_name',nameForTransfer||'');const base=location.pathname.includes('/games/')?location.origin+location.pathname.split('/games/')[0]+'/':new URL('./',location.href).href;location.href=base+'games-grade.html?grade='+encodeURIComponent(selected)+'&mode='+(location.pathname.includes('dictation')?'dictation':'games');return false;}return true;};
    const finish=(fallback)=>{const n=(input.value||fallback||'بطل التوون').trim();if(!chooseGrade(n))return;setName(g,n);localStorage.removeItem('et_pending_name');localStorage.setItem('et_grade_confirmed_'+g,'true');gate.classList.add('et-gone');showChip(g);};
    gate.querySelector('#et-name-save').onclick=()=>finish('');input.addEventListener('keydown',e=>{if(e.key==='Enter')finish('');});setTimeout(()=>input.focus(),50);
  }
  function showChip(g){let c=document.getElementById('et-score-chip');if(!c){c=document.createElement('div');c.id='et-score-chip';document.body.appendChild(c);}const x=profile(g);c.textContent=`${x?.name||'بطل التوون'}  •  ${x?.points||0} نقطة`;}
  function wrapOnce(obj,name,handler){if(!obj||typeof obj[name]!=='function'||obj[name].__etWrapped)return false;const orig=obj[name];const w=function(){return handler.call(this,orig,arguments);};w.__etWrapped=true;obj[name]=w;return true;}
  function resetResult(){window.__ET_AWARDED=false;window.__ET_RESULT_RECORDED=false;}
  function recordOnce(g,score,meta){if(window.__ET_RESULT_RECORDED)return;window.__ET_RESULT_RECORDED=true;window.__ET_AWARDED=true;award(g,Math.max(0,Math.round(Number(score)||0)),meta||{game:location.pathname});showChip(g);}
  function installScoreBridges(){
    const g=gradeFromPath();
    if(window.GG27){wrapOnce(window.GG27,'recordResult',function(orig,args){const res=args[1]||{};const out=orig.apply(this,args);recordOnce(g,(res.coins||res.score||0),{score:res.score,correct:res.score,game:location.pathname});return out;});}
    if(window.Engine){wrapOnce(window.Engine,'init',function(orig,args){resetResult();return orig.apply(this,args);});}
    wrapOnce(window,'ggStartSession',function(orig,args){resetResult();return orig.apply(this,args);});
    if(window.Engine){wrapOnce(window.Engine,'showWin',function(orig,args){const out=orig.apply(this,args);recordOnce(g,(this.score||0),{score:this.score,game:location.pathname});return out;});}
    if(window.GameBase){wrapOnce(window.GameBase,'startGame',function(orig,args){resetResult();return orig.apply(this,args);});wrapOnce(window.GameBase,'endGame',function(orig,args){const score=Number(this.getScore?.()||0);const out=orig.apply(this,args);recordOnce(g,score*10,{score,game:location.pathname});return out;});}
    ['showResultScreen','showResult','endGame','finishGame','gameOver'].forEach(n=>{wrapOnce(window,n,function(orig,args){const out=orig.apply(this,args);let score=0;for(const a of Array.from(args)){if(typeof a==='number')score=Math.max(score,a);else if(a&&typeof a==='object')score=Math.max(score,Number(a.score||a.points||a.correct||0));}recordOnce(g,score*10,{score,game:location.pathname});return out;});});
  }
  function observeResult(g){const mo=new MutationObserver(()=>{if(window.__ET_AWARDED)return;const selectors=['#screen-result','#result-screen','#gg-result','#win-screen','#game-over-screen','#end-screen','.result-screen'];for(const sel of selectors){const el=document.querySelector(sel);if(!el)continue;const cs=getComputedStyle(el);if(cs.display==='none'||cs.visibility==='hidden'||el.classList.contains('hidden')||el.classList.contains('gg-hidden'))continue;const text=el.textContent||'';const m=text.match(/(\d+)\s*\/\s*(\d+)/);const score=m?Number(m[1]):Number((text.match(/(?:score|النقاط|points)[^\d]*(\d+)/i)||[])[1]||0);recordOnce(g,m?score*10:score,{score,correct:m?score:0,game:location.pathname});break;}});mo.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','style']});}
  function repairChoices(){
    const roots=document.querySelectorAll('#choices,#gg-choices,#targets,#tg,.choices,.options,.answers,.word-bank,.letters,.cards-grid');
    roots.forEach(root=>{const rs=getComputedStyle(root);if(rs.display==='none'||rs.visibility==='hidden')return;root.querySelectorAll('button,[role="button"],.card,.target,.food,.gg-food,.gg-target,.choice-btn,.target-btn,.option-btn,.tbtn,.letter-btn,.word-btn,.answer-btn').forEach(el=>{const cs=getComputedStyle(el);if(cs.display==='none'&&!el.classList.contains('hidden')&&!el.classList.contains('gg-hidden'))el.style.display='flex';el.style.visibility='visible';el.style.opacity='1';el.style.pointerEvents='auto';el.style.zIndex='15';if(cs.color==='rgba(0, 0, 0, 0)'||cs.color==='transparent')el.style.color='#fff';});});
  }
  window.EnglishtoonProfile={grade:gradeFromPath,labels:LABELS,get,setName,profile,hydrate,award,leaderboard,points,name,spend,owns,equip,refresh:showChip};
  document.addEventListener('DOMContentLoaded',()=>{if(window.ET_HUB_PAGE||window.ET_DASHBOARD_PAGE)return;installNameGate();showChip(gradeFromPath());installScoreBridges();observeResult(gradeFromPath());repairChoices();const mo=new MutationObserver(()=>{repairChoices();installScoreBridges();});mo.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['style','class']});setInterval(installScoreBridges,500);});
})();
