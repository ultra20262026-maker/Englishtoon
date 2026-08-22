/**
 * EnglishToon Game Engine v5.5.2
 * Professional Educational Arcade Engine
 * - Fixed: Target word UI at the very top (Slim Bar)
 * - Fixed: Robust canvas initialization
 * - Fixed: Manual control and feedback
 */

const Engine = {
    gameActive: false,
    isPaused: false,
    score: 0,
    speed: 0.6,
    onContinue: null,
    onListen: null,
    
    init(config = {}) {
        this.score = 0;
        this.gameActive = true;
        this.isPaused = false;
        this.onContinue = config.onContinue || null;
        this.onListen = config.onListen || null;
        
        this.injectUI();
        this.setupStyles();
        console.log("Engine v5.5.2 Ready");
    },

    injectUI() {
        const oldUI = document.getElementById('engine-ui');
        if (oldUI) oldUI.remove();

        const ui = document.createElement('div');
        ui.id = 'engine-ui';
        ui.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; z-index: 9999; pointer-events: none; font-family: "Cairo", sans-serif;';
        
        ui.innerHTML = `
            <!-- Top Slim Bar -->
            <div style="background: rgba(15, 23, 42, 0.9); color: white; display: flex; justify-content: space-between; align-items: center; padding: 5px 15px; border-bottom: 2px solid #3b82f6; pointer-events: auto;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="color: #38bdf8; font-size: 10px; font-weight: bold;">SCORE:</span>
                    <span id="score-display" style="font-size: 16px; font-weight: 900; font-family: monospace;">0000</span>
                </div>
                
                <div style="background: #1d4ed8; padding: 2px 15px; border-radius: 10px; display: flex; align-items: center; gap: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                    <span style="color: #dbeafe; font-size: 10px; font-weight: bold;">المطلوب:</span>
                    <span id="engine-target-word" style="font-size: 18px; font-weight: 900; letter-spacing: 1px; color: white;">---</span>
                    <button onclick="Engine.speakTarget()" style="background: rgba(255,255,255,0.2); border: none; border-radius: 50%; width: 26px; height: 26px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: white;">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM3 9v6h4l5 5V4L7 9H3z"/></svg>
                    </button>
                </div>

                <button onclick="Engine.togglePause()" style="background: rgba(255,255,255,0.1); border: none; border-radius: 5px; padding: 4px; cursor: pointer; color: white;">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </button>
            </div>
            
            <!-- Win Screen -->
            <div id="win-screen" style="display: none; position: fixed; inset: 0; background: rgba(15, 23, 42, 0.98); flex-direction: column; align-items: center; justify-content: center; pointer-events: auto; z-index: 10000;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="width: 100px; height: 100px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 4px solid white; box-shadow: 0 0 30px rgba(34,197,94,0.5);">
                        <svg width="60" height="60" fill="none" stroke="white" stroke-width="4" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h2 style="color: white; font-size: 32px; font-weight: 900; margin-top: 20px;">ممتاز!</h2>
                    <p style="color: #4ade80; font-weight: bold;">+100 POINTS</p>
                </div>
                <button onclick="Engine.continue()" style="background: #0ea5e9; color: white; font-size: 20px; font-weight: 900; padding: 12px 35px; border: none; border-radius: 15px; cursor: pointer; box-shadow: 0 6px 0 #0369a1;">
                    متابعة اللعب 🚀
                </button>
            </div>
        `;
        document.body.appendChild(ui);
    },

    setupStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-8px); }
                75% { transform: translateX(8px); }
            }
            body { margin: 0; padding: 0; overflow: hidden; background: #0f172a; touch-action: none; }
            canvas { display: block; touch-action: none; }
        `;
        document.head.appendChild(style);
    },

    speakTarget() {
        const word = document.getElementById('engine-target-word').innerText;
        if (word && word !== "---") this.speak(word);
        if (this.onListen) this.onListen();
    },

    speak(text) {
        if (!text) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.65;
        window.speechSynthesis.speak(utterance);
    },

    addScore(points) {
        this.score += points;
        const display = document.getElementById('score-display');
        if (display) display.innerText = this.score.toString().padStart(4, '0');
    },

    showWin() {
        this.isPaused = true;
        const screen = document.getElementById('win-screen');
        if (screen) screen.style.display = 'flex';
        this.speak("Excellent");
    },

    hideWin() {
        const screen = document.getElementById('win-screen');
        if (screen) screen.style.display = 'none';
        this.isPaused = false;
    },

    continue() {
        this.hideWin();
        if (this.onContinue) this.onContinue();
    },

    togglePause() {
        this.isPaused = !this.isPaused;
    },

    shake() {
        document.body.style.animation = 'shake 0.2s ease-in-out 0s 2';
        setTimeout(() => document.body.style.animation = '', 400);
        this.speak("Try again");
    },

    getChoices(vocab, currentIndex, count = 3) {
        const correct = vocab[currentIndex];
        let choices = [correct];
        const others = vocab.filter((_, i) => i !== currentIndex);
        while (choices.length < Math.min(count, vocab.length)) {
            const random = others[Math.floor(Math.random() * others.length)];
            if (!choices.find(c => c.word === random.word)) {
                choices.push(random);
            }
        }
        return choices.sort(() => Math.random() - 0.5);
    }
};

window.Engine = Engine;
