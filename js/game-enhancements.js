// Game Enhancements Script
// Injected into all games to provide unified Back Button, disable background music, and improve readability

document.addEventListener('DOMContentLoaded', () => {
    createBackButton();
    injectMissingElementPolyfill();
    disableLegacyBGM();
    injectReadabilityCSS();
});

function createBackButton() {
    // Smart Detection: If it's a modern game (e.g. primary-2) it already has a back button or a question zone.
    if (document.querySelector('.btn-back') || document.querySelector('#question-zone')) {
        return; // Abort injecting a redundant back button
    }

    const btn = document.createElement('button');
    btn.innerHTML = 'العودة للوحدة';
    btn.className = 'back-btn-injected';
    
    btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';
    
    btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Safely parse URL to go back to unit.html
        const parts = window.location.pathname.split('/');
        const gamesIndex = parts.findIndex(p => p === 'games');
        
        if (gamesIndex !== -1 && parts.length > gamesIndex + 2) {
            const gradePart = parts[gamesIndex + 1];
            const unitPart = parts[gamesIndex + 2];
            const unitNumber = unitPart.replace('unit', '').replace('UNIT', '').trim();
            
            const depth = parts.length - gamesIndex - 1;
            const upPath = '../'.repeat(depth);
            
            window.location.href = `${upPath}unit.html?grade=${gradePart}&unit=${unitNumber}`;
        } else {
            // Fallback
            window.location.href = '../../../dashboard.html';
        }
    };
    document.body.appendChild(btn);
}

function disableLegacyBGM() {
    // 1. Remove all audio tags that loop or mention bg/music
    document.querySelectorAll('audio').forEach(audio => {
        if (audio.hasAttribute('loop') || 
            (audio.id && (audio.id.toLowerCase().includes('bg') || audio.id.toLowerCase().includes('music')))) {
            audio.removeAttribute('autoplay');
            audio.pause();
            audio.volume = 0;
            audio.remove();
        }
    });

    // 2. Periodically mute audio tags that might be added dynamically later to play BGM
    setInterval(() => {
        document.querySelectorAll('audio').forEach(audio => {
            if (audio.hasAttribute('loop')) {
                audio.pause();
                audio.volume = 0;
            }
        });
    }, 1000);
}

function injectReadabilityCSS() {
    // Smart Detection
    const isModern = document.querySelector('.btn-back') !== null || document.querySelector('#question-zone') !== null;
    
    const style = document.createElement('style');
    let css = `
        /* --- PROFESSIONAL 3D PIXAR GAME STYLE --- */
        
        /* Animated 3D Gradient Background */
        body {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #00d2ff 100%) !important;
            background-size: 400% 400% !important;
            animation: gradientBG 15s ease infinite !important;
            font-family: 'Fredoka One', 'Segoe UI', Tahoma, sans-serif !important;
            color: white !important;
            user-select: none !important;
            -webkit-user-select: none !important;
            touch-action: none !important;
        }
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* 3D Glassmorphism Canvas Frame */
        canvas {
            border-radius: 24px !important;
            border: 6px solid rgba(255, 255, 255, 0.3) !important;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.3) !important;
            backdrop-filter: blur(8px) !important;
            background-color: rgba(255, 255, 255, 0.1) !important;
            margin-top: 15px !important;
        }

        /* 3D Glossy Buttons for Choices */
        button:not(#start-btn):not(.back-btn):not(.back-btn-injected):not([onclick*="window.location"]):not(.target-btn):not(.choice-btn):not(.btn-start):not(.level-btn):not(.btn-replay):not(.btn-home):not(.btn-next):not(#mute-btn) {
            white-space: normal !important;
            word-wrap: break-word !important;
            height: auto !important;
            min-height: 60px !important;
            padding: 15px 25px !important;
            font-size: clamp(16px, 3vw, 24px) !important;
            line-height: 1.5 !important;
            margin: 8px !important;
            
            /* 3D Jelly Effect */
            background: linear-gradient(180deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%) !important;
            color: #333 !important;
            border: none !important;
            border-radius: 20px !important;
            box-shadow: 0 10px 0 #d88185, 0 15px 20px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.6) !important;
            text-shadow: 1px 1px 0px rgba(255,255,255,0.6) !important;
            transition: all 0.1s ease !important;
            
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            max-width: 95vw !important;
            overflow: visible !important;
            cursor: pointer !important;
        }

        button:not(#start-btn):not(.back-btn):not(.back-btn-injected):not([onclick*="window.location"]):not(.target-btn):not(.choice-btn):not(.btn-start):not(.level-btn):not(.btn-replay):not(.btn-home):not(.btn-next):not(#mute-btn):active {
            transform: translateY(10px) !important;
            box-shadow: 0 0 0 #d88185, 0 5px 10px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.6) !important;
        }

        /* Action Game Targets Responsive Sizing */
        .target-btn {
            width: clamp(70px, 18vw, 140px) !important;
            height: clamp(70px, 18vw, 140px) !important;
            font-size: clamp(12px, 3vw, 24px) !important;
            border-radius: 50% !important; /* Ensure they remain circles */
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            touch-action: none !important;
        }

        /* Start Button 3D Effect */
        #start-btn, button[onclick*="startGame"] {
            background: linear-gradient(180deg, #00b09b, #96c93d) !important;
            border: none !important;
            border-radius: 50px !important;
            box-shadow: 0 12px 0 #008272, 0 15px 20px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.6) !important;
            color: white !important;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.3) !important;
            transition: all 0.1s ease !important;
            padding: 20px 50px !important;
            font-size: 3rem !important;
        }
        #start-btn:active, button[onclick*="startGame"]:active {
            transform: translateY(12px) !important;
            box-shadow: 0 0 0 #008272, 0 5px 10px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.6) !important;
        }

        /* Screens (Start/Game Over) Styling */
        .screen {
            background: rgba(0,0,0,0.85) !important;
            backdrop-filter: blur(10px) !important;
            border-radius: 24px !important;
        }
    `;

    if (!isModern) {
        css += `
        /* Premium UI Counters (Score/Lives/Question) */
        #ui div, #score, #lives {
            background: rgba(0, 0, 0, 0.4) !important;
            padding: clamp(6px, 1.5vw, 15px) clamp(10px, 2vw, 25px) !important;
            border-radius: 20px !important;
            border: 2px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3) !important;
            color: #fff !important;
            text-shadow: 2px 2px 4px #000 !important;
            font-weight: bold !important;
            font-size: clamp(14px, 2.5vw, 20px) !important;
        }

        /* Responsive HUD Overlay */
        #hud {
            padding: clamp(5px, 2vh, 15px) clamp(10px, 3vw, 30px) !important;
            font-size: clamp(12px, 3.5vw, 1.5rem) !important;
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: space-between !important;
            align-items: center !important;
            gap: 5px !important;
        }

        /* Hide the Game Title on very small screens to save space */
        @media (max-width: 600px) {
            #hud > div:first-child { display: none !important; }
            #q-panel { top: 40px !important; }
        }

        /* Responsive Question Panel */
        #q-panel {
            top: clamp(40px, 10vh, 70px) !important;
            left: 2% !important;
            right: 2% !important;
            width: 96% !important;
        }
        #q-text {
            background: rgba(0,0,0,0.85) !important;
            border: 2px solid rgba(255,255,255,0.3) !important;
            padding: clamp(10px, 2vh, 15px) clamp(15px, 4vw, 40px) !important;
            border-radius: clamp(15px, 4vw, 30px) !important;
            color: white !important;
            font-size: clamp(14px, 4vw, 24px) !important;
            font-weight: 900 !important;
            max-width: 100% !important;
            width: 100% !important;
            text-align: center;
            line-height: 1.3 !important;
            word-wrap: break-word !important;
            box-shadow: 0 10px 20px rgba(0,0,0,0.5) !important;
        }

        /* Responsive Back Button */
        .back-btn-injected {
            position: fixed !important;
            z-index: 999999 !important;
            background: linear-gradient(135deg, #ef4444, #dc2626) !important;
            color: white !important;
            border: 1px solid #b91c1c !important;
            border-radius: 6px !important;
            cursor: pointer !important;
            font-weight: bold !important;
            font-family: "Segoe UI", Tahoma, sans-serif !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3) !important;
            transition: all 0.3s ease !important;
            display: block !important;
            white-space: nowrap !important;
            text-decoration: none !important;
            top: 5px !important;
            left: 5px !important;
            padding: 4px 8px !important;
            font-size: 11px !important;
            opacity: 0.8 !important;
        }
        .back-btn-injected:hover {
            opacity: 1 !important;
        }
        
        /* Force shrink ALL back buttons on mobile */
        @media (max-width: 600px) {
            .btn-back, .back-btn-injected {
                padding: 2px 6px !important;
                font-size: 10px !important;
                border-radius: 4px !important;
                min-height: 0 !important;
                min-width: 0 !important;
                width: auto !important;
                height: auto !important;
                opacity: 0.6 !important;
            }
            .btn-back:hover, .back-btn-injected:hover {
                opacity: 1 !important;
            }
        }

        /* Ensure options containers wrap their buttons properly on all screen sizes */
        #options-container, .options, .choices, #choices, #answers {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            align-items: stretch !important;
            gap: 15px !important;
            width: 100% !important;
            padding: 15px !important;
            box-sizing: border-box !important;
            margin: 0 auto !important;
        }

        /* Keep the game container nicely positioned */
        #game-container, .game-container, .container {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding-bottom: 50px !important; /* Space for buttons at the bottom */
        }
        `;
    }

    style.innerHTML = css;
    document.head.appendChild(style);
}

function injectMissingElementPolyfill() {
    const originalGetElementById = document.getElementById;
    document.getElementById = function(id) {
        let el = originalGetElementById.call(document, id);
        if (!el) {
            if (id === 'target-span') {
                el = originalGetElementById.call(document, 'target-word');
            }
            if (!el && ['score', 'lives', 'target-span', 'target-word', 'game-over-screen', 'start-screen', 'snd-correct', 'snd-wrong'].includes(id)) {
                el = document.createElement('div');
                el.id = id;
                el.style.display = 'none';
                if (id.startsWith('snd-')) {
                    el.play = function() {};
                    el.pause = function() {};
                }
                document.body.appendChild(el);
            }
        }
        return el;
    };
}