// Game Enhancements Script
// Injected into all games to provide unified Back Button, disable background music, and improve readability

document.addEventListener('DOMContentLoaded', () => {
    createBackButton();
    injectMissingElementPolyfill();
    disableLegacyBGM();
    injectReadabilityCSS();
});

function createBackButton() {
    const btn = document.createElement('button');
    btn.innerHTML = 'العودة للوحدة';
    
    // Inline styling specifically for the back button so it ignores the global button CSS
    btn.style.cssText = 'position:fixed !important; top:15px !important; left:15px !important; z-index:999999 !important; padding:10px 20px !important; background:linear-gradient(135deg, #ef4444, #dc2626) !important; color:white !important; border:2px solid #b91c1c !important; border-radius:12px !important; cursor:pointer !important; font-weight:bold !important; font-size:16px !important; font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important; box-shadow:0 4px 15px rgba(0,0,0,0.4) !important; transition:all 0.3s ease !important; text-decoration:none !important; height: auto !important; min-height: 0 !important; display: block !important; margin: 0 !important; white-space: nowrap !important;';
    
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
    const style = document.createElement('style');
    style.innerHTML = `
        /* --- PROFESSIONAL 3D PIXAR GAME STYLE --- */
        
        /* Animated 3D Gradient Background */
        body {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #00d2ff 100%) !important;
            background-size: 400% 400% !important;
            animation: gradientBG 15s ease infinite !important;
            font-family: 'Fredoka One', 'Segoe UI', Tahoma, sans-serif !important;
            color: white !important;
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
        button:not(#start-btn):not(.back-btn):not([onclick*="window.location"]) {
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

        button:not(#start-btn):not(.back-btn):not([onclick*="window.location"]):active {
            transform: translateY(10px) !important;
            box-shadow: 0 0 0 #d88185, 0 5px 10px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.6) !important;
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

        /* Premium UI Counters (Score/Lives) */
        #ui div, #score, #lives {
            background: rgba(0, 0, 0, 0.4) !important;
            padding: 8px 18px !important;
            border-radius: 20px !important;
            border: 2px solid rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3) !important;
            color: #fff !important;
            text-shadow: 2px 2px 4px #000 !important;
            font-weight: bold !important;
        }

        /* Screens (Start/Game Over) Styling */
        .screen {
            background: rgba(0,0,0,0.85) !important;
            backdrop-filter: blur(10px) !important;
            border-radius: 24px !important;
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