// Game Enhancements Script - ULTRA FIX 2027
// Injected to fix HUD overlap, remove timers, and ensure game progression

(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Force Clean HUD Layout */
        #gg-hud, .gg-hud, #hud {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 10px !important;
            height: 60px !important;
            background: #1e293b !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 9999 !important;
            border-bottom: 2px solid #334155 !important;
        }

        /* Hide All Timers */
        .timer, #timer, [id*="timer" i], [class*="timer" i], 
        .time-left, #time-left, .gg-timer, .gg-pill.time, 
        #gg-timer-bar, .gg-timer-bar, .clock, #clock {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }

        /* Fix Overlapping Elements (Progress Bar & Lives) */
        div[style*="absolute"][style*="top"] {
            top: 65px !important; /* Push down below fixed HUD */
            background: rgba(15, 23, 42, 0.8) !important;
            padding: 5px 10px !important;
            border-radius: 0 0 15px 15px !important;
        }

        #gg-arena, .arena, #gg-stage, .stage {
            margin-top: 100px !important; /* Ensure content is visible below HUD */
        }

        /* Make Buttons Responsive and Clickable */
        .gg-target, .choice-btn, button.choice, .gg-btn {
            touch-action: manipulation !important;
            cursor: pointer !important;
            z-index: 10000 !important;
            position: relative !important;
        }

        /* Fix Back Button */
        #gg-back, .back-btn {
            background: #ef4444 !important;
            color: white !important;
            border-radius: 10px !important;
            padding: 5px 15px !important;
            font-weight: bold !important;
            min-width: 60px !important;
            height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
    `;
    document.head.appendChild(style);

    // Ensure Game Progression
    function fixGameLoop() {
        // Prevent game over from timer
        ['timeLeft', 'timerValue', 'countDown', 'gameTimer', 'time'].forEach(v => {
            if (typeof window[v] !== 'undefined') {
                if (typeof window[v] === 'number') window[v] = 999;
            }
        });

        // Ensure buttons are always enabled if they get stuck
        document.querySelectorAll('.gg-target, .choice-btn').forEach(btn => {
            if (btn.disabled && !btn.classList.contains('hit') && !btn.classList.contains('miss')) {
                // Only re-enable if no answer was registered yet for this round
                // This is tricky, but let's just ensure they are clickable
                btn.style.pointerEvents = 'auto';
            }
        });
    }

    setInterval(fixGameLoop, 1000);

    // Auto-fix Back Button
    document.addEventListener('DOMContentLoaded', () => {
        const backBtn = document.getElementById('gg-back') || document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.onclick = () => {
                window.history.back();
            };
        }
    });
})();
