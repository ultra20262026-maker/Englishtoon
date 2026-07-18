const VALID_USERS = [
    { username: 'student1', password: '123' },
    { username: 'student2', password: '456' },
    { username: 'admin', password: 'admin' }
];

const GRADES_DATA = [
    { id: 'primary-1', name: 'الصف الأول الابتدائي', image: 'images/primary_1.png' },
    { id: 'primary-2', name: 'الصف الثاني الابتدائي', image: 'images/primary_2.png' },
    { id: 'primary-3', name: 'الصف الثالث الابتدائي', image: 'images/primary_3.png' },
    { id: 'primary-4', name: 'الصف الرابع الابتدائي', image: 'images/primary_4.png' },
    { id: 'primary-5', name: 'الصف الخامس الابتدائي', image: 'images/primary_5.png' },
    { id: 'primary-6', name: 'الصف السادس الابتدائي', image: 'images/primary_6.png' },
    { id: 'prep-1', name: 'الصف الأول الإعدادي', image: 'images/prep_1.png' },
    { id: 'prep-2', name: 'الصف الثاني الإعدادي', image: 'images/prep_2.png' },
    { id: 'prep-3', name: 'الصف الثالث الإعدادي', image: 'images/prep_3.png' }
];

const UNITS_PER_GRADE = 6;

function getGamePath(gradeId, unitNumber) {
    return "games/${gradeId}/unit${unitNumber}/index.html";
}

const GAMES_MAP = {};
