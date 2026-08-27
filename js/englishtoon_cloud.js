(function(){
  'use strict';
  const FIREBASE_CONFIG={
    apiKey:'AIzaSyA1_kx4HmDWZF_T_EnZDKgq5yssYlOMaWM',
    authDomain:'english-toon-14072.firebaseapp.com',
    projectId:'english-toon-14072',
    storageBucket:'english-toon-14072.firebasestorage.app',
    messagingSenderId:'276063917807',
    appId:'1:276063917807:web:c794621a4df054fdaaad1a'
  };
  let dbPromise=null;
  function script(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s);});}
  async function db(){
    if(window.firebase && typeof firebase.firestore==='function'){
      if(!firebase.apps || !firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      return firebase.firestore();
    }
    if(!dbPromise) dbPromise=(async()=>{await script('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');await script('https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js');if(!firebase.apps.length)firebase.initializeApp(FIREBASE_CONFIG);return firebase.firestore();})();
    return dbPromise;
  }
  function user(){const u=(localStorage.getItem('currentUser')||'').trim();return u&&u.toLowerCase()!=='admin'?u:null;}
  function docId(g){return encodeURIComponent(`${user()||'guest'}__${g}`);}
  function local(g){return window.EnglishtoonProfile?.profile(g)||null;}
  function stamp(){return (window.firebase&&firebase.firestore&&firebase.firestore.FieldValue)?firebase.firestore.FieldValue.serverTimestamp():new Date().toISOString();}
  async function syncProfile(g){
    const account=user(); if(!account||!window.EnglishtoonProfile)return local(g);
    try{
      const ref=(await db()).collection('student_profiles').doc(docId(g));
      const snap=await ref.get(); const current=local(g);
      if(snap.exists){const d=snap.data();window.EnglishtoonProfile.hydrate(g,d);return d;}
      if(current&&current.name){const data={accountId:account,grade:g,name:current.name,points:Number(current.points)||0,bestScore:Number(current.bestScore)||0,games:Number(current.games)||0,correct:Number(current.correct)||0,inventory:Array.isArray(current.inventory)?current.inventory:[],updatedAt:stamp()};await ref.set(data,{merge:true});return data;}
    }catch(e){console.warn('Cloud profile sync unavailable:',e.message||e);}
    return local(g);
  }
  async function registerStudent(g,name){
    const account=user(),clean=String(name||'').trim().slice(0,40); if(!account||!clean)return null;
    try{
      const ref=(await db()).collection('student_profiles').doc(docId(g)),snap=await ref.get(),remote=snap.exists?snap.data():null,current=local(g)||{};
      const data=Object.assign({},remote||{}, {accountId:account,grade:g,name:clean,points:Number(remote?.points??current.points)||0,bestScore:Number(remote?.bestScore??current.bestScore)||0,games:Number(remote?.games??current.games)||0,correct:Number(remote?.correct??current.correct)||0,inventory:Array.isArray(remote?.inventory)?remote.inventory:(Array.isArray(current.inventory)?current.inventory:[]),updatedAt:stamp()});
      await ref.set(data,{merge:true}); window.EnglishtoonProfile.hydrate(g,data); return data;
    }catch(e){console.warn('Cloud student registration unavailable:',e.message||e);return local(g);}
  }
  async function recordAward(g,after,points,meta){
    const account=user(); if(!account||!after)return after;
    try{
      const firestore=await db(),ref=firestore.collection('student_profiles').doc(docId(g)),delta=Math.max(0,Math.round(Number(points)||0)),correct=Math.max(0,Math.round(Number(meta&&meta.correct)||0)),score=Math.max(0,Math.round(Number(meta&&meta.score)||0));
      let result;
      await firestore.runTransaction(async tx=>{
        const snap=await tx.get(ref),remote=snap.exists?snap.data():null;
        const data=remote?Object.assign({},remote,{name:after.name||remote.name,points:(Number(remote.points)||0)+delta,games:(Number(remote.games)||0)+1,correct:(Number(remote.correct)||0)+correct,bestScore:Math.max(Number(remote.bestScore)||0,score),inventory:Array.isArray(remote.inventory)?remote.inventory:[],updatedAt:stamp()}):{accountId:account,grade:g,name:after.name||'بطل التوون',points:Number(after.points)||delta,bestScore:Number(after.bestScore)||score,games:Number(after.games)||1,correct:Number(after.correct)||correct,inventory:Array.isArray(after.inventory)?after.inventory:[],updatedAt:stamp()};
        tx.set(ref,data,{merge:true});result=data;
      });
      if(result)window.EnglishtoonProfile.hydrate(g,result);
    }catch(e){console.warn('Cloud award unavailable; local score kept:',e.message||e);}
    return window.EnglishtoonProfile?.profile(g)||after;
  }
  async function spend(g,after,amount,itemId){
    const account=user(); if(!account||!after)return {ok:false,reason:'no_name'};
    try{
      const firestore=await db(),ref=firestore.collection('student_profiles').doc(docId(g)),cost=Math.max(0,Math.round(Number(amount)||0));let result={ok:false};
      await firestore.runTransaction(async tx=>{
        const snap=await tx.get(ref),remote=snap.exists?snap.data():null;
        if(remote && (Number(remote.points)||0)<cost){result={ok:false,reason:'insufficient',points:Number(remote.points)||0};return;}
        const source=remote||after,inventory=Array.isArray(source.inventory)?source.inventory.slice():[];
        if(itemId&&!inventory.includes(itemId))inventory.push(itemId);
        const data=Object.assign({},source,{accountId:account,grade:g,name:source.name||after.name,points:Math.max(0,(Number(source.points)||0)-cost),inventory,updatedAt:stamp()});
        tx.set(ref,data,{merge:true});result={ok:true,points:data.points,player:data};
      });
      if(result.ok)window.EnglishtoonProfile.hydrate(g,result.player);else if(result.reason==='insufficient'&&result.points!=null)window.EnglishtoonProfile.hydrate(g,Object.assign({},after,{points:result.points}));
      return result;
    }catch(e){console.warn('Cloud purchase unavailable; local wallet kept:',e.message||e);return {ok:false,reason:'offline'};}
  }
  async function leaderboard(g){
    try{
      const snap=await (await db()).collection('student_profiles').where('grade','==',g).limit(100).get();
      const rows=[];snap.forEach(doc=>{const d=doc.data();if(d.name)rows.push({name:d.name,points:Number(d.points)||0,bestScore:Number(d.bestScore)||0,games:Number(d.games)||0,correct:Number(d.correct)||0});});
      rows.sort((a,b)=>(b.points-a.points)||String(a.name).localeCompare(String(b.name)));return rows.slice(0,20);
    }catch(e){console.warn('Cloud leaderboard unavailable; local rows shown:',e.message||e);return window.EnglishtoonProfile?.leaderboard(g)||[];}
  }
  window.EnglishtoonCloud={syncProfile,registerStudent,recordAward,spend,leaderboard};
})();
