// EnglishToon Game Engine 2027
// Features: No Timers, Mobile Responsive, Manual Speech, Firebase Leaderboard

const Engine = {
    score: 0,
    stars: 0,
    currentWord: null,
    gameActive: false,
    speed: parseFloat(localStorage.getItem('et_game_speed')) || 1.0,
    studentName: localStorage.getItem('et_student_name') || 'Guest Student',
    
    init() {
        this.addSpeedControl();
        console.log("Game Engine Initialized for: " + this.studentName);
        this.updateUI();
        this.gameActive = true;
    },

    speak(text) {
        if (!text) return;
        try {
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();
            const msg = new SpeechSynthesisUtterance(text);
            msg.lang = 'en-US';
            msg.rate = 0.9;
            window.speechSynthesis.speak(msg);
        } catch (e) {
            console.error("Speech error:", e);
        }
    },

    updateUI() {
        const scoreEl = document.getElementById('score');
        const starsEl = document.getElementById('stars');
        if (scoreEl) scoreEl.innerText = this.score;
        if (starsEl) starsEl.innerText = this.stars;
    },

    addScore(points) {
        this.score += points;
        if (this.score > 0 && this.score % 50 === 0) this.stars++;
        this.updateUI();
        this.saveProgress();
    },

    saveProgress() {
        // Placeholder for Firebase Integration
        if (window.db) {
            // Logic to save to Firebase et_leaderboard
        }
    },

    getAssetPath(word) {
        if (!word) return "";
        const cleanWord = word.toLowerCase().trim().replace(/ /g, '_');
        // From unitN/game_N.html, assets are at ../../../assets/p1/
        return `../../../assets/p1/${cleanWord}.png`;
    },

    addSpeedControl() {
        const speedContainer = document.createElement('div');
        speedContainer.className = 'fixed top-4 right-20 z-[100] flex flex-col items-center bg-white/90 p-2 rounded-lg shadow-md border border-blue-200';
        speedContainer.innerHTML = `
            <label class="text-[10px] font-bold text-blue-600 mb-1">SPEED</label>
            <div class="flex gap-1">
                <button onclick="Engine.setSpeed(0.5)" id="speed-slow" class="px-2 py-1 text-xs rounded ${this.speed === 0.5 ? 'bg-blue-600 text-white' : 'bg-gray-200'}">Slow</button>
                <button onclick="Engine.setSpeed(1.0)" id="speed-normal" class="px-2 py-1 text-xs rounded ${this.speed === 1.0 ? 'bg-blue-600 text-white' : 'bg-gray-200'}">Normal</button>
                <button onclick="Engine.setSpeed(1.5)" id="speed-fast" class="px-2 py-1 text-xs rounded ${this.speed === 1.5 ? 'bg-blue-600 text-white' : 'bg-gray-200'}">Fast</button>
            </div>
        `;
        document.body.appendChild(speedContainer);
    },

    setSpeed(val) {
        this.speed = val;
        localStorage.setItem('et_game_speed', val);
        // Refresh UI
        ['slow', 'normal', 'fast'].forEach(s => {
            const btn = document.getElementById('speed-' + s);
            if (btn) {
                btn.className = `px-2 py-1 text-xs rounded ${((s==='slow'&&val===0.5)||(s==='normal'&&val===1.0)||(s==='fast'&&val===1.5)) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`;
            }
        });
        // Optional: Dispatch event for active games to update
        window.dispatchEvent(new CustomEvent('speedChanged', { detail: val }));
    },

    showFeedback(isCorrect) {
        const feedback = document.createElement('div');
        feedback.className = `fixed inset-0 flex items-center justify-center z-[100] pointer-events-none`;
        feedback.style.zIndex = "9999";
        feedback.innerHTML = isCorrect ? 
            `<div class="bg-green-500 text-white p-10 rounded-full text-4xl animate-bounce shadow-2xl border-4 border-white">Excellent! 🌟</div>` :
            `<div class="bg-red-500 text-white p-10 rounded-full text-4xl animate-pulse shadow-2xl border-4 border-white">Try Again! ❌</div>`;
        document.body.appendChild(feedback);
        setTimeout(() => {
            feedback.style.transition = "opacity 0.5s";
            feedback.style.opacity = "0";
            setTimeout(() => feedback.remove(), 500);
        }, 800);
    }
};

window.Engine = Engine;
// Don't auto-init here, let the game handle it after loading dependencies
// Engine.init(); 
