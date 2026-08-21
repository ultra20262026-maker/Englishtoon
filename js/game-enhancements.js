// Game Enhancements Script - FIXED VERSION 2027
// Injected into all games to provide unified UI and improve mobile experience

document.addEventListener('DOMContentLoaded', () => {
    createBackButton();
    injectMissingElementPolyfill();
    disableLegacyBGM();
    injectReadabilityCSS();
    injectGlobalDimensions();
    fixGameLoopTimers();
});

function injectGlobalDimensions() {
    if (document.getElementById('global-game-dimensions')) return;
    const style = document.createElement('style');
    style.id = 'global-game-dimensions';
    style.innerHTML = `
        html, body {
            width: 100vw !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            background: #0f172a !important;
        }
        canvas {
            max-width: 100% !important;
            max-height: 100% !important;
            object-fit: contain !important;
        }
    `;
    document.head.appendChild(style);
}

function createBackButton() {
    if (document.querySelector('.back-btn-injected')) return;

    const btn = document.createElement('button');
    btn.innerHTML = '‹ العودة';
    btn.className = 'back-btn-injected';
    btn.onclick = (e) => {
        e.preventDefault();
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '../../../dashboard.html';
        }
    };
    document.body.appendChild(btn);
}

function disableLegacyBGM() {
    const muteAll = () => {
        document.querySelectorAll('audio, video').forEach(el => {
            if (el.hasAttribute('loop') || (el.id && /bg|music/i.test(el.id))) {
                el.pause();
                el.muted = true;
            }
        });
    };
    muteAll();
    setTimeout(muteAll, 1000);
}

function fixGameLoopTimers() {
    // We stopped killing ALL intervals because it breaks the game logic (question transitions)
    // Instead, we just hide the timer UI elements via CSS (see injectReadabilityCSS)
    
    // If a game has a specific 'timeLeft' variable that triggers game over, 
    // we try to keep it high so the game doesn't end abruptly.
    setInterval(() => {
        ['timeLeft', 'timerValue', 'countDown', 'gameTimer'].forEach(v => {
            if (typeof window[v] === 'number' && window[v] < 10) {
                window[v] = 999;
            }
        });
    }, 2000);
}

function injectReadabilityCSS() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* --- MOBILE OPTIMIZED UI --- */
        
        /* Hide Timer Elements without breaking logic */
        .timer, #timer, .time-left, #time-left, .gg-timer, 
        [id*="timer" i], [class*="timer" i], [id*="time-left" i], 
        [id*="clock" i], .gg-pill.time, .gg-timer-bar {
            display: none !important;
            visibility: hidden !important;
            pointer-events: none !important;
        }

        /* Fix HUD Overlap and Question Panel visibility */
        #gg-hud, #hud {
            position: relative !important;
            z-index: 9999 !important;
            width: 100% !important;
            padding: 5px 10px !important;
            background: rgba(15, 23, 42, 0.9) !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
        }
        
        #gg-q-panel, #q-panel {
            z-index: 9998 !important;
            pointer-events: none !important;
        }
        
        #gg-q-text, #q-text {
            pointer-events: auto !important;
        }

        /* Ensure Choice Buttons are ALWAYS on top and clickable */
        #gg-choices, .choices, #options-container, .gg-choice, .choice-btn, button.choice {
            z-index: 10000 !important;
            position: relative !important;
            pointer-events: auto !important;
            touch-action: manipulation !important;
        }

        .gg-target, .choice-btn, button.choice {
            cursor: pointer !important;
        }
        
        /* Make choices more visible on small screens */
        @media (max-width: 600px) {
            .gg-choice, .choice-btn {
                min-width: 80px !important;
                padding: 10px !important;
                font-size: 16px !important;
            }
        }
        
        /* Ensure arena doesn't block clicks */
        #gg-arena, #gg-stage, canvas {
            z-index: 1 !important;
        }

        /* Back Button Style */
        .back-btn-injected {
            position: fixed !important;
            top: 10px !important;
            left: 10px !important;
            z-index: 9999 !important;
            padding: 8px 16px !important;
            background: #ef4444 !important;
            color: white !important;
            border: none !important;
            border-radius: 8px !important;
            font-weight: bold !important;
            box-shadow: 0 4px 0 #b91c1c !important;
            cursor: pointer !important;
            font-size: 14px !important;
        }
        .back-btn-injected:active {
            transform: translateY(2px) !important;
            box-shadow: 0 2px 0 #b91c1c !important;
        }

        /* Ensure Choice Buttons are Clickable and Visible */
        #gg-choices, .choices, #options-container {
            z-index: 50 !important;
            position: relative !important;
        }

        .gg-target, .choice-btn, button.choice {
            touch-action: manipulation !important;
            cursor: pointer !important;
        }

        /* Fix for potential z-index issues where game objects cover buttons */
        #gg-arena, #gg-stage {
            z-index: 10 !important;
        }
        
        /* Toast messages should be on top */
        .gg-toast {
            z-index: 2000 !important;
        }
    `;
    document.head.appendChild(style);
}

function injectMissingElementPolyfill() {
    // Basic polyfill for common game functions if missing
    window.ggVibrate = window.ggVibrate || function(ms) {
        if (navigator.vibrate) navigator.vibrate(ms);
    };
}
