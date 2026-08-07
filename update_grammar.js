const fs = require('fs');
const path = require('path');

let rawData = fs.readFileSync('js/data.js', 'utf8');

// Extract GRAMMAR_GAMES_MAP
const mapMatch = rawData.match(/const GRAMMAR_GAMES_MAP = ({.*});/s);
if (!mapMatch) {
    console.error('GRAMMAR_GAMES_MAP not found');
    process.exit(1);
}
let grammarMap = JSON.parse(mapMatch[1]);

const gradesToUpdate = [
    { id: 'primary-6', src: 'C:/Users/Mr Mahmoud Elziadi/Downloads/جديد/العاب/سنة ٦' },
    { id: 'prep-1', src: 'C:/Users/Mr Mahmoud Elziadi/Downloads/جديد/العاب/اولي اعدادي' },
    { id: 'prep-2', src: 'C:/Users/Mr Mahmoud Elziadi/Downloads/جديد/العاب/تانية اعدادي' }
];

gradesToUpdate.forEach(g => {
    let gradeObj = { '1':[], '2':[], '3':[], '4':[], '5':[], '6':[] };
    if (fs.existsSync(g.src)) {
        let folders = fs.readdirSync(g.src);
        // sort them by name, but actually we need to map to unit 1..6
        // folders usually look like 'Unit 1', 'Unit1_something', etc.
        folders.forEach(f => {
            let unitNum = f.match(/\d/);
            if (unitNum) {
                let u = unitNum[0];
                let fPath = path.join(g.src, f);
                if (fs.statSync(fPath).isDirectory()) {
                    let files = fs.readdirSync(fPath).filter(file => file.endsWith('.html') || file.endsWith('.htm'));
                    let gamesArr = files.map(file => {
                        return { name: file.replace(/\.html?$/i, ''), file: file };
                    });
                    gradeObj[u] = gamesArr;
                }
            }
        });
    }
    grammarMap[g.id] = gradeObj;
});

const newMapStr = JSON.stringify(grammarMap);
rawData = rawData.replace(/const GRAMMAR_GAMES_MAP = {.*};/s, 'const GRAMMAR_GAMES_MAP = ' + newMapStr + ';');
fs.writeFileSync('js/data.js', rawData, 'utf8');
console.log('Successfully updated GRAMMAR_GAMES_MAP');
