const fs = require('fs');
const path = require('path');

const gamesDir = 'C:\\Users\\Mr Mahmoud Elziadi\\Documents\\GitHub\\Englishtoon\\games';

function getHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getHtmlFiles(file));
        } else if (file.endsWith('.html')) {
            results.push(file);
        }
    });
    return results;
}

const files = getHtmlFiles(gamesDir);
console.log(`Fixing Arabic text in ${files.length} files...`);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // 1. Fix guard script alert
    content = content.replace(/alert\('O1O.*?U<\.'\);/g, "alert('عذراً لا يمكنك الدخول للعبة مباشرة. يرجى تسجيل الدخول أولاً.');");

    // 2. Fix Score and Lives
    content = content.replace(/<div>\?+:\s*<span id="score"/g, '<div>النقاط: <span id="score"');
    content = content.replace(/<div>\?+:\s*<span id="lives"/g, '<div>القلوب: <span id="lives"');

    // 3. Fix Game Over Screen
    content = content.replace(/(<h1[^>]*>)\?+ \?+!(<\/h1>)/g, '$1انتهت اللعبة!$2');
    content = content.replace(/(<p[^>]*>)\?+:\s*<span id="final-score"/g, '$1النقاط: <span id="final-score"');

    // 4. Fix Buttons
    content = content.replace(/(onclick="startGame\(\)"[^>]*>)\?+!*(<\/button>)/g, '$1إبدأ اللعب$2');
    content = content.replace(/(onclick="startGame\(\)"[^>]*>)\?+ \?+ \?+(<\/button>)/g, '$1إلعب مرة أخرى$2');

    // 5. Fix Start Screen Title
    content = content.replace(/(id="start-screen"[^>]*>[\s\S]*?<h1[^>]*>)\?+.*?(<\/h1>)/g, '$1مرحباً بك في اللعبة$2');

    // 6. Fix Start Screen Subtitle
    content = content.replace(/(id="start-screen"[^>]*>[\s\S]*?<p[^>]*>)\?+.*?(<\/p>)/g, '$1اضغط على زر إبدأ اللعب لتبدأ المغامرة!$2');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
    }
});

console.log('Fix complete!');
