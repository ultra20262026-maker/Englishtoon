// EnglishToon Professional Arcade Engine V5.2
// Fixed UI Scaling, Mobile Layout, and Asset Mapping Accuracy

const Engine = {
    score: 0,
    stars: 0,
    currentWord: null,
    gameActive: false,
    speed: parseFloat(localStorage.getItem('et_game_speed')) || 0.5,
    studentName: localStorage.getItem('et_student_name') || 'البطل الصغير',
    assets: {},
    
    init() {
        this.addSpeedControl();
        this.setupProfessionalUI();
        this.gameActive = true;
        this.setSpeed(this.speed);
        console.log("Professional Engine V5.2 - UI & Assets Fixed");
    },

    speak(text) {
        if (!text) return;
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'en-US';
        msg.rate = 0.8;
        window.speechSynthesis.speak(msg);
    },

    setupProfessionalUI() {
        if (document.getElementById('et-top-bar')) return;
        const topBar = document.createElement('div');
        topBar.id = 'et-top-bar';
        topBar.className = "fixed top-0 left-0 w-full p-2 flex justify-between items-center pointer-events-none z-[100]";
        topBar.innerHTML = `
            <div class="flex items-center gap-2 bg-black/60 backdrop-blur-xl p-2 rounded-2xl border border-white/20 pointer-events-auto shadow-xl scale-90 sm:scale-100 origin-left">
                <div class="flex items-center gap-2">
                    <span class="text-xl filter drop-shadow-lg">🏆</span>
                    <span id="score" class="text-white font-black text-xl font-mono tracking-tighter">0000</span>
                </div>
                <div class="h-6 w-[1px] bg-white/10"></div>
                <div class="flex items-center gap-2">
                    <span class="text-xl text-yellow-400 filter drop-shadow-lg">⭐</span>
                    <span id="stars" class="text-white font-black text-xl font-mono">0</span>
                </div>
            </div>
            <div class="bg-black/60 backdrop-blur-xl p-2 rounded-2xl border border-white/20 pointer-events-auto shadow-xl flex items-center gap-2 scale-90 sm:scale-100 origin-right">
                <span class="text-white font-black px-2 text-sm truncate max-w-[80px]">${this.studentName}</span>
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 border border-white/50 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${this.studentName}" alt="avatar">
                </div>
            </div>
        `;
        document.body.appendChild(topBar);
    },

    addScore(points) {
        this.score += points;
        if (this.score < 0) this.score = 0;
        this.stars = Math.floor(this.score / 500);
        
        const scoreEl = document.getElementById('score');
        const starsEl = document.getElementById('stars');
        if (scoreEl) scoreEl.innerText = String(this.score).padStart(4, '0');
        if (starsEl) starsEl.innerText = this.stars;
        
        this.createJuiceEffect(points > 0);
    },

    createJuiceEffect(isPositive) {
        const container = document.createElement('div');
        container.className = "fixed inset-0 pointer-events-none z-[1000]";
        document.body.appendChild(container);
        
        for(let i=0; i<20; i++) {
            const p = document.createElement('div');
            p.className = `absolute w-2 h-2 rounded-full ${isPositive ? 'bg-yellow-400' : 'bg-red-500'} shadow-lg`;
            const angle = Math.random() * Math.PI * 2;
            const dist = 50 + Math.random() * 150;
            p.style.left = '50%';
            p.style.top = '50%';
            p.animate([
                { transform: 'translate(0,0) scale(1.2)', opacity: 1 },
                { transform: `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) scale(0)`, opacity: 0 }
            ], { duration: 800, easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)' });
            container.appendChild(p);
        }
        setTimeout(() => container.remove(), 1000);
    },

    getAssetPath(word) {
        if (!word) return "";
        // Normalize word for asset mapping
        const cleanWord = word.toLowerCase().trim().replace(/ /g, '_');
        // Handle specific naming issues (e.g., plurals or casing)
        return `../../../assets/p1/${cleanWord}.png`;
    },

    loadSprite(word, callback) {
        if (this.assets[word]) return callback(this.assets[word]);
        const img = new Image();
        img.src = this.getAssetPath(word);
        img.onload = () => {
            this.assets[word] = img;
            callback(img);
        };
        img.onerror = () => {
            console.warn("Asset not found for: " + word);
            const canvas = document.createElement('canvas');
            canvas.width = 100; canvas.height = 100;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#3b82f6';
            ctx.beginPath(); ctx.arc(50, 50, 45, 0, Math.PI*2); ctx.fill();
            ctx.fillStyle = 'white'; ctx.font = 'bold 20px Cairo'; ctx.textAlign = 'center';
            ctx.fillText(word.substring(0,3), 50, 60);
            const fallback = new Image();
            fallback.src = canvas.toDataURL();
            this.assets[word] = fallback;
            callback(fallback);
        };
    },

    addSpeedControl() {
        if (document.getElementById('speed-container')) return;
        const speedContainer = document.createElement('div');
        speedContainer.id = 'speed-container';
        speedContainer.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] flex gap-2 bg-black/80 backdrop-blur-2xl p-2 rounded-2xl border border-white/20 pointer-events-auto shadow-2xl scale-90 sm:scale-100';
        speedContainer.innerHTML = `
            <button onclick="Engine.setSpeed(0.5)" id="speed-slow" class="px-6 py-2 text-sm font-black rounded-xl transition-all">بطيء</button>
            <button onclick="Engine.setSpeed(1.0)" id="speed-normal" class="px-6 py-2 text-sm font-black rounded-xl transition-all">عادي</button>
            <button onclick="Engine.setSpeed(1.5)" id="speed-fast" class="px-6 py-2 text-sm font-black rounded-xl transition-all">سريع</button>
        `;
        document.body.appendChild(speedContainer);
    },

    setSpeed(val) {
        this.speed = val;
        localStorage.setItem('et_game_speed', val);
        ['slow', 'normal', 'fast'].forEach(s => {
            const btn = document.getElementById('speed-' + s);
            if (btn) {
                const isActive = (s==='slow'&&val===0.5)||(s==='normal'&&val===1.0)||(s==='fast'&&val===1.5);
                btn.className = `px-6 py-2 text-sm font-black rounded-xl transition-all ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50 scale-105' : 'bg-white/5 text-white/40 hover:bg-white/10'}`;
            }
        });
        window.dispatchEvent(new CustomEvent('speedChanged', { detail: val }));
    },

    showWinScreen(callback) {
        const win = document.createElement('div');
        win.className = "fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/90 backdrop-blur-3xl p-4 text-center";
        win.innerHTML = `
            <div class="animate-in fade-in zoom-in duration-500 max-w-[90%] w-[400px] bg-slate-900 border-2 border-blue-500/30 rounded-[2.5rem] p-8 shadow-2xl">
                <div class="text-6xl mb-4 filter drop-shadow-lg">✨</div>
                <h1 class="text-4xl font-black text-white mb-2 uppercase tracking-tighter">رائع!</h1>
                <p class="text-lg text-blue-400 font-bold mb-8">أحسنت يا ${this.studentName}، إجابة صحيحة!</p>
                <button id="next-btn" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-4 rounded-2xl text-xl font-black shadow-xl transition-all active:scale-95">استمر في اللعب 🚀</button>
            </div>
        `;
        document.body.appendChild(win);
        this.speak("Excellent! Well done.");
        document.getElementById('next-btn').onclick = () => {
            win.remove();
            if(callback) callback();
        };
    },

    showFeedback(isCorrect) {
        const fb = document.createElement('div');
        fb.className = `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3000] text-7xl pointer-events-none transition-all duration-500`;
        fb.innerHTML = isCorrect ? '✅' : '❌';
        document.body.appendChild(fb);
        fb.animate([
            { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0 },
            { transform: 'translate(-50%, -50%) scale(1.5)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }
        ], { duration: 800 });
        setTimeout(() => fb.remove(), 800);
    }
};

window.Engine = Engine;
