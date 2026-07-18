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
    btn.innerHTML = 'ðŸ”™ Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„ÙˆØ­Ø¯Ø§Øª';
    
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
        /* Force all choice/option buttons to be fully readable, wrap text, and center */
        button:not(#start-btn):not(.back-btn):not([onclick*="window.location"]) {
            white-space: normal !important;
            word-wrap: break-word !important;
            height: auto !important;
            min-height: 60px !important;
            padding: 12px 20px !important;
            font-size: clamp(16px, 3vw, 24px) !important;
            line-height: 1.5 !important;
            margin: 8px !important;
            border-radius: 12px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            max-width: 95vw !important;
            overflow: visible !important;
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