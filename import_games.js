const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Mr Mahmoud Elziadi\\.gemini\\antigravity\\scratch\\GAMES 2027';
const destDir = 'C:\\Users\\Mr Mahmoud Elziadi\\.gemini\\antigravity\\scratch\\school-games-portal\\games';

const gradeMap = {
    'grade 1 تم': 'primary-1',
    'prim 2 تم': 'primary-2',
    'prim 3 تم': 'primary-3',
    'prim 4 Standalone تم': 'primary-4',
    'prim 5 Standaloneتم': 'primary-5',
    'prim 6 Standalone  تم': 'primary-6'
};

const gamesDatabase = {};

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

function processDirectory() {
    const grades = fs.readdirSync(srcDir);
    
    for (const gradeFolder of grades) {
        const gradePath = path.join(srcDir, gradeFolder);
        if (!fs.statSync(gradePath).isDirectory()) continue;

        const gradeId = gradeMap[gradeFolder];
        if (!gradeId) {
            console.log(`Skipping unknown folder: ${gradeFolder}`);
            continue;
        }

        gamesDatabase[gradeId] = {};
        const destGradePath = path.join(destDir, gradeId);
        if (!fs.existsSync(destGradePath)) fs.mkdirSync(destGradePath, { recursive: true });

        const units = fs.readdirSync(gradePath);
        for (const unitFolder of units) {
            const unitPath = path.join(gradePath, unitFolder);
            if (!fs.statSync(unitPath).isDirectory()) continue;

            const unitMatch = unitFolder.match(/\d+/);
            if (!unitMatch) continue;
            const unitId = unitMatch[0];

            gamesDatabase[gradeId][unitId] = [];
            const destUnitPath = path.join(destGradePath, `unit${unitId}`);
            if (!fs.existsSync(destUnitPath)) fs.mkdirSync(destUnitPath, { recursive: true });

            const games = fs.readdirSync(unitPath);
            for (const gameFile of games) {
                if (gameFile.endsWith('.html')) {
                    const gameName = gameFile.replace('.html', '');
                    const srcGamePath = path.join(unitPath, gameFile);
                    const destGamePath = path.join(destUnitPath, gameFile);
                    
                    fs.copyFileSync(srcGamePath, destGamePath);
                    
                    gamesDatabase[gradeId][unitId].push({
                        name: gameName,
                        file: gameFile
                    });
                }
            }
        }
    }
}

processDirectory();
fs.writeFileSync('games_map.json', JSON.stringify(gamesDatabase, null, 2));
console.log('Successfully copied games and generated games_map.json');
