// EnglishToon Professional Arcade Engine V5.4
// Fixed: Empty Game Bug, localStorage Security, and UI Init Stability

const Engine = {
    score: 0,
    stars: 0,
    currentWord: null,
    gameActive: false,
    isProcessingResult: false,
    speed: 0.7, // Default speed
    studentName: 'البطل الصغير',
    assets: {},
    
    init() {
        try {
            // Safe localStorage access
            try {
                const savedSpeed = localStorage.getItem('et_game_speed');
                if (savedSpeed) this.speed = parseFloat(savedSpeed);
                const savedName = localStorage.getItem('et_student_name');
                if (savedName) this.studentName = savedName;
            } catch (e) { console.warn("LocalStorage access denied"); }

            this.setupProfessionalUI();
            this.addSpeedControl();
            this.setSpeed(this.speed);
            this.gameActive = true;
            console.log("Professional Engine V5.4 - Initialized Successfully");
        } catch (err) {
            console.error("Engine Init Error:", err);
        }
    },

    speak(text) {
        if (!text) return;
        try {
            window.speechSynthesis.cancel();
            const msg = new SpeechSynthesisUtterance(text);
            msg.lang = 'en-US';
            msg.rate = 0.7; // Slightly slower for kids
            setTimeout(() => window.speechSynthesis.speak(msg), 50);
        } catch (e) { console.error("Speech Error:", e); }
    },

    setupProfessionalUI() {
        if (document.getElementById('et-top-bar')) return;
        const topBar = document.createElement('div');
        topBar.id = 'et-top-bar';
        topBar.className = "fixed top-0 left-0 w-full p-2 flex justify-between items-center pointer-events-none z-[100]";
        topBar.innerHTML = `
            <div class="flex items-center gap-2 bg-black/60 backdrop-blur-xl p-2 rounded-2xl border border-white/20 pointer-events-auto shadow-xl scale-75 sm:scale-100 origin-left">
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
            <div class="bg-black/60 backdrop-blur-xl p-2 rounded-2xl border border-white/20 pointer-events-auto shadow-xl flex items-center gap-2 scale-75 sm:scale-100 origin-right">
                <span class="text-white font-black px-2 text-sm truncate max-w-[80px]">${this.studentName}</span>
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 border border-white/50 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(this.studentName)}" alt="avatar">
                </div>
            </div>
        `;
        if (document.body) {
            document.body.appendChild(topBar);
        } else {
            window.addEventListener('DOMContentLoaded', () => document.body.appendChild(topBar));
        }
    },

    addScore(points) {
        this.score += points;
        if (this.score < 0) this.score = 0;
        this.stars = Math.floor(this.score / 500);
        
        const scoreEl = document.getElementById('score');
        const starsEl = document.getElementById('stars');
        if (scoreEl) scoreEl.innerText = String(this.score).padStart(4, '0');
        if (starsEl) starsEl.innerText = this.stars;
        
        if (points > 0) this.createJuiceEffect(true);
    },

    createJuiceEffect(isPositive) {
        const container = document.createElement('div');
        container.className = "fixed inset-0 pointer-events-none z-[1000]";
        document.body.appendChild(container);
        
        for(let i=0; i<10; i++) {
            const p = document.createElement('div');
            p.className = `absolute w-2 h-2 rounded-full ${isPositive ? 'bg-yellow-400' : 'bg-red-500'}`;
            const angle = Math.random() * Math.PI * 2;
            const dist = 20 + Math.random() * 60;
            p.style.left = '50%';
            p.style.top = '50%';
            p.animate([
                { transform: 'translate(0,0) scale(1)', opacity: 1 },
                { transform: `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) scale(0)`, opacity: 0 }
            ], { duration: 500, easing: 'ease-out' });
            container.appendChild(p);
        }
        setTimeout(() => container.remove(), 600);
    },

    getAssetPath(word) {
        if (!word) return "";
        const cleanWord = word.toLowerCase().trim().replace(/ /g, '_');
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
            const canvas = document.createElement('canvas');
            canvas.width = 120; canvas.height = 120;
            const ctx = canvas.getContext('2d');
            
            // Nice fallback card
            ctx.fillStyle = '#1e293b';
            ctx.beginPath(); ctx.roundRect(5, 5, 110, 110, 20); ctx.fill();
            ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 4; ctx.stroke();
            
            ctx.fillStyle = 'white'; ctx.font = 'bold 16px Cairo'; ctx.textAlign = 'center';
            const shortText = word.length > 10 ? word.substring(0, 8) + '...' : word;
            ctx.fillText(shortText.toUpperCase(), 60, 65);
            
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
        speedContainer.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] flex gap-2 bg-black/80 backdrop-blur-2xl p-2 rounded-2xl border border-white/20 pointer-events-auto shadow-2xl scale-75 sm:scale-100';
        speedContainer.innerHTML = `
            <button onclick="Engine.setSpeed(0.5)" id="speed-slow" class="px-4 py-2 text-xs font-black rounded-xl transition-all">بطيء</button>
            <button onclick="Engine.setSpeed(1.0)" id="speed-normal" class="px-4 py-2 text-xs font-black rounded-xl transition-all">عادي</button>
            <button onclick="Engine.setSpeed(1.5)" id="speed-fast" class="px-4 py-2 text-xs font-black rounded-xl transition-all">سريع</button>
        `;
        if (document.body) {
            document.body.appendChild(speedContainer);
        } else {
            window.addEventListener('DOMContentLoaded', () => document.body.appendChild(speedContainer));
        }
    },

    setSpeed(val) {
        this.speed = val;
        try { localStorage.setItem('et_game_speed', val); } catch(e){}
        ['slow', 'normal', 'fast'].forEach(s => {
            const btn = document.getElementById('speed-' + s);
            if (btn) {
                const isActive = (s==='slow'&&val<=0.6)||(s==='normal'&&val>0.6&&val<1.2)||(s==='fast'&&val>=1.2);
                btn.className = `px-4 py-2 text-xs font-black rounded-xl transition-all ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50 scale-105' : 'bg-white/5 text-white/40 hover:bg-white/10'}`;
            }
        });
        window.dispatchEvent(new CustomEvent('speedChanged', { detail: val }));
    },

    showWinScreen(callback) {
        if (this.isProcessingResult) return;
        this.isProcessingResult = true;
        this.gameActive = false;
        
        const win = document.createElement('div');
        win.className = "fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 text-center";
        win.innerHTML = `
            <div class="animate-in fade-in zoom-in duration-300 max-w-[85%] w-[320px] bg-slate-900 border-2 border-green-500/50 rounded-[2.5rem] p-8 shadow-2xl">
                <div class="text-6xl mb-4">🌟</div>
                <h1 class="text-3xl font-black text-white mb-2">ممتاز!</h1>
                <p class="text-blue-300 font-bold mb-8">إجابة صحيحة يا ${this.studentName}</p>
                <button id="next-btn" class="w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl text-xl font-black shadow-lg active:scale-95 transition-all">متابعة اللعب 🚀</button>
            </div>
        `;
        document.body.appendChild(win);
        this.speak("Excellent!");
        
        document.getElementById('next-btn').onclick = () => {
            win.remove();
            this.gameActive = true;
            this.isProcessingResult = false;
            if(callback) callback();
        };
    },

    showFeedback(isCorrect) {
        const fb = document.createElement('div');
        fb.className = `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3000] text-7xl pointer-events-none`;
        fb.innerHTML = isCorrect ? '✅' : '❌';
        document.body.appendChild(fb);
        fb.animate([
            { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0 },
            { transform: 'translate(-50%, -50%) scale(1.3)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }
        ], { duration: 800 });
        setTimeout(() => fb.remove(), 800);
    },

    getWords(vocab, count = 3) {
        const actualCount = Math.min(count, 3);
        const shuffled = [...vocab].sort(() => Math.random() - 0.5);
        const result = [];
        const seen = new Set();
        for (let word of shuffled) {
            if (!seen.has(word.toLowerCase())) {
                result.push(word);
                seen.add(word.toLowerCase());
            }
            if (result.length >= actualCount) break;
        }
        return result;
    }
};

window.Engine = Engine;
