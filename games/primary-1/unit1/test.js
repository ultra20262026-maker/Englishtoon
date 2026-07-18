
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        
        const words = [
            {w: 'Hello', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>??</text></svg>'}, {w: 'Goodbye', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>??</text></svg>'},
            {w: 'shake hands', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>??</text></svg>'}, {w: 'play', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>?</text></svg>'},
            {w: 'table', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>??</text></svg>'}, {w: 'tomato', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>??</text></svg>'},
            {w: 'tiger', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>??</text></svg>'}, {w: 'teacher', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>?????</text></svg>'},
            {w: 'tree', i: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>??</text></svg>'}
        ];
        
        let images = {};
        words.forEach(w => { let img = new Image(); img.src = w.i; images[w.w] = img; });

        let isPlaying = false, score = 0, lives = 3, targetWord = '';
        let enemies = [], bullets = [], mouseX = 400, mouseY = 300, spawnRate = 2000;

        function speak(text) { if('speechSynthesis' in window) { let u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; speechSynthesis.speak(u); } }

        function setTarget() {
            targetWord = words[Math.floor(Math.random() * words.length)].w;
            document.getElementById('target-span').innerText = targetWord;
            speak(targetWord);
        }

        function startGame() {
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('game-over-screen').classList.add('hidden');
            isPlaying = true; score = 0; lives = 3; enemies = []; bullets = []; spawnRate = 2000;
            document.getElementById('score').innerText = score; document.getElementById('lives').innerText = '??'.repeat(lives);
            setTarget();
            requestAnimationFrame(gameLoop);
            spawnEnemy();
        }

        function spawnEnemy() {
            if(!isPlaying) return;
            let word = Math.random() > 0.4 ? targetWord : words[Math.floor(Math.random() * words.length)].w;
            enemies.push({ x: Math.random() * (canvas.width - 80) + 40, y: -40, r: 40, word: word, speed: Math.random()*1 + 0.5 + (score/100) });
            setTimeout(spawnEnemy, spawnRate);
            if(spawnRate > 500) spawnRate -= 50;
        }

        ['mousemove', 'touchmove'].forEach(evt => canvas.addEventListener(evt, e => { 
            if (e.type === 'touchmove') e.preventDefault();
            let rect = canvas.getBoundingClientRect(); 
            let clientX = e.touches ? e.touches[0].clientX : e.clientX;
            let clientY = e.touches ? e.touches[0].clientY : e.clientY;
            let scaleX = canvas.width / rect.width; let scaleY = canvas.height / rect.height;
            mouseX = (clientX - rect.left) * scaleX; mouseY = (clientY - rect.top) * scaleY; 
        }));
        ['mousedown', 'touchstart'].forEach(evt => canvas.addEventListener(evt, e => {
            if (e.type === 'touchstart') e.preventDefault();
            if(!isPlaying) return; document.getElementById('snd-shoot').play();
            let rect = canvas.getBoundingClientRect(); 
            let clientX = e.touches ? e.touches[0].clientX : e.clientX;
            let clientY = e.touches ? e.touches[0].clientY : e.clientY;
            let scaleX = canvas.width / rect.width; let scaleY = canvas.height / rect.height;
            mouseX = (clientX - rect.left) * scaleX; mouseY = (clientY - rect.top) * scaleY; 
            let dx = mouseX - canvas.width/2; let dy = mouseY - (canvas.height - 50); let angle = Math.atan2(dy, dx);
            bullets.push({x: canvas.width/2, y: canvas.height - 50, vx: Math.cos(angle)*15, vy: Math.sin(angle)*15});
        }));

        function takeDamage() {
            lives--; document.getElementById('lives').innerText = '??'.repeat(lives);
            document.getElementById('snd-wrong').play(); document.body.classList.add('damage'); setTimeout(()=>document.body.classList.remove('damage'), 300);
            if(lives<=0) {isPlaying=false; document.getElementById('game-over-screen').classList.remove('hidden');}
        }

        function gameLoop() {
            if(!isPlaying) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#95a5a6'; ctx.fillRect(0, canvas.height - 80, canvas.width, 80);
            ctx.fillRect(canvas.width/2 - 40, canvas.height - 120, 80, 40); 
            ctx.fillStyle = '#7f8c8d'; for(let i=0; i<canvas.width; i+=40) ctx.fillRect(i, canvas.height - 100, 20, 20);

            ctx.save(); ctx.translate(canvas.width/2, canvas.height - 50);
            let angle = Math.atan2(mouseY - (canvas.height - 50), mouseX - canvas.width/2);
            ctx.rotate(angle); ctx.fillStyle = '#34495e'; ctx.fillRect(0, -10, 60, 20); ctx.restore();
            ctx.fillStyle = '#2c3e50'; ctx.beginPath(); ctx.arc(canvas.width/2, canvas.height - 50, 25, 0, Math.PI*2); ctx.fill();

            ctx.fillStyle = '#f1c40f';
            for(let i=bullets.length-1; i>=0; i--) {
                let b = bullets[i]; b.x += b.vx; b.y += b.vy;
                ctx.beginPath(); ctx.arc(b.x, b.y, 8, 0, Math.PI*2); ctx.fill();
                if(b.x < 0 || b.x > canvas.width || b.y < 0) bullets.splice(i, 1);
            }

            for(let i=enemies.length-1; i>=0; i--) {
                let e = enemies[i]; e.y += e.speed;
                ctx.fillStyle = e.word===targetWord ? 'rgba(231, 76, 60, 0.5)' : 'rgba(189, 195, 199, 0.5)';
                ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, Math.PI*2); ctx.fill(); ctx.lineWidth=2; ctx.strokeStyle='#fff'; ctx.stroke();
                let img = images[e.word]; if(img && img.complete) ctx.drawImage(img, e.x-30, e.y-30, 60, 60);

                if(e.y + e.r > canvas.height - 80) { if(e.word === targetWord) { takeDamage(); } enemies.splice(i, 1); continue; }

                let hit = false;
                for(let j=bullets.length-1; j>=0; j--) {
                    let b = bullets[j]; let dx = b.x - e.x, dy = b.y - e.y;
                    if(Math.sqrt(dx*dx + dy*dy) < e.r + 8) {
                        bullets.splice(j, 1); hit = true;
                        if(e.word === targetWord) { score += 10; document.getElementById('score').innerText = score; document.getElementById('snd-correct').play(); setTarget(); } 
                        else { takeDamage(); }
                        break;
                    }
                }
                if(hit) enemies.splice(i, 1);
            }
            requestAnimationFrame(gameLoop);
        }
    
