// Game Enhancements Script
// Injected into all games to provide unified Back Button and Background Music

document.addEventListener('DOMContentLoaded', () => {
    createBackButton();
    disableLegacyBGM();
    initNiceMusic();
});

function createBackButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '🔙 العودة للوحدات';
    btn.style.cssText = 'position:fixed; top:15px; left:15px; z-index:999999; padding:10px 20px; background:linear-gradient(135deg, #ef4444, #dc2626); color:white; border:2px solid #b91c1c; border-radius:12px; cursor:pointer; font-weight:bold; font-size:16px; font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif; box-shadow:0 4px 15px rgba(0,0,0,0.4); transition:all 0.3s ease; text-decoration:none;';
    
    btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';
    
    btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Safely parse URL to go back to unit.html
        const parts = window.location.pathname.split('/');
        // Typical structure: .../games/primary-1/unit1/game.html
        // We find the index of "games"
        const gamesIndex = parts.findIndex(p => p === 'games');
        
        if (gamesIndex !== -1 && parts.length > gamesIndex + 2) {
            const gradePart = parts[gamesIndex + 1];
            const unitPart = parts[gamesIndex + 2];
            const unitNumber = unitPart.replace('unit', '').replace('UNIT', '').trim();
            
            // Calculate how many levels to go up
            // if gamesIndex is parts.length - 4, we go up 3 levels.
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

    // 2. Override the global AudioContext briefly to stop inline Web Audio BGM if it starts on load
    // But since we don't want to break SFX, we'll just periodically mute audio tags that might be added later
    setInterval(() => {
        document.querySelectorAll('audio').forEach(audio => {
            if (audio.hasAttribute('loop')) {
                audio.pause();
                audio.volume = 0;
            }
        });
    }, 1000);
}

function initNiceMusic() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.08; // Very low volume for background ambient
    masterGain.connect(ctx.destination);
    
    // A soothing ambient pentatonic sequence (C Major Pentatonic)
    // C4, D4, E4, G4, A4, C5, D5, E5
    const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    
    let isPlaying = false;

    function playNote() {
        if (ctx.state === 'suspended') return;
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        // Random note from scale
        const note = pentatonic[Math.floor(Math.random() * pentatonic.length)];
        
        // Soft sine wave
        osc.type = 'sine';
        osc.frequency.value = note;
        
        osc.connect(gain);
        gain.connect(masterGain);
        
        const now = ctx.currentTime;
        osc.start(now);
        
        // Ambient envelope: Slow attack, long release
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.4, now + 1.5); // Attack
        gain.gain.exponentialRampToValueAtTime(0.001, now + 6); // Release
        
        osc.stop(now + 6);
    }
    
    function startMusic() {
        if (isPlaying) return;
        isPlaying = true;
        if (ctx.state === 'suspended') ctx.resume();
        
        // Play a note every 1.2 seconds for a slow, relaxing ambient feel
        setInterval(playNote, 1200);
        // Play a few notes immediately to form a chord
        playNote();
        setTimeout(playNote, 400);
        setTimeout(playNote, 800);
    }

    // Must start after user interaction
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('keydown', startMusic, { once: true });
    document.addEventListener('touchstart', startMusic, { once: true });
}
