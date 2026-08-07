const fs = require('fs');
let data = fs.readFileSync('js/data.js', 'utf8');

// Find the GRAMMAR_GAMES_MAP definition
let match = data.match(/const\s+GRAMMAR_GAMES_MAP\s*=\s*(\{.*?\});/);
if (match) {
    let map = JSON.parse(match[1]);
    
    // Clear all grades
    for (let grade in map) {
        for (let unit in map[grade]) {
            map[grade][unit] = [];
        }
    }
    
    // Set games for primary-4
    if (!map['primary-4']) map['primary-4'] = {};
    
    map['primary-4']['1'] = [
        {file: 'lesson1-fishing.html', name: 'Fishing Game ??'},
        {file: 'lesson2-balloons.html', name: 'Balloons Pop ??'},
        {file: 'lesson3-planets.html', name: 'Planets Game ??'},
        {file: 'lesson5-archery.html', name: 'Archery ??'}
    ];
    
    map['primary-4']['2'] = [
        {file: 'u2-lesson1-balloons.html', name: 'Balloons Pop ??'},
        {file: 'u2-lesson2-planets.html', name: 'Planets Game ??'},
        {file: 'u2-lesson3-archery.html', name: 'Archery ??'},
        {file: 'u2-lesson4-fishing.html', name: 'Fishing Game ??'}
    ];
    
    map['primary-4']['3'] = [
        {file: 'u3-lesson1-fishing.html', name: 'Fishing Game ??'},
        {file: 'u3-lesson2-balloons.html', name: 'Balloons Pop ??'},
        {file: 'u3-lesson3-planets.html', name: 'Planets Game ??'},
        {file: 'u3-lesson4-archery.html', name: 'Archery ??'}
    ];
    
    map['primary-4']['4'] = [
        {file: 'u4-lesson1-fishing.html', name: 'Fishing Game ??'},
        {file: 'u4-lesson2-balloons.html', name: 'Balloons Pop ??'},
        {file: 'u4-lesson3-planets.html', name: 'Planets Game ??'},
        {file: 'u4-lesson4-archery.html', name: 'Archery ??'}
    ];
    
    map['primary-4']['5'] = [
        {file: 'u5-lesson1-fishing.html', name: 'Fishing Game ??'},
        {file: 'u5-lesson2-balloons.html', name: 'Balloons Pop ??'},
        {file: 'u5-lesson3-planets.html', name: 'Planets Game ??'},
        {file: 'u5-lesson4-archery.html', name: 'Archery ??'}
    ];

    let newJson = JSON.stringify(map);
    data = data.replace(match[0], 'const GRAMMAR_GAMES_MAP = ' + newJson + ';');
    fs.writeFileSync('js/data.js', data, 'utf8');
    console.log('Successfully updated js/data.js');
} else {
    console.log('Could not find GRAMMAR_GAMES_MAP');
}
