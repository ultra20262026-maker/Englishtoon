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

// Function to get game path dynamically based on actual directory structure
function getGamePath(gradeId, unitNumber) {
    if (gradeId.startsWith('prep-')) {
        const prepLevel = gradeId.split('-')[1]; // 1, 2, or 3
        const folderName = `العاب ${prepLevel} ${prepLevel === '3' ? 'ع' : 'ع'}`; // 'العاب 1 ع' or 'العاب 3ع'
        
        // Handle folder spacing variations (3ع vs 3 ع)
        const exactFolderName = prepLevel === '3' ? 'العاب 3ع' : `العاب ${prepLevel} ع`;
        
        // Handle unit name variations (UNIT vs unit)
        // Since it's GitHub pages (case sensitive on Linux servers usually, but local is Windows), it's safer to point to exact names.
        // For Prep 1: unit 1, unit 2, UNIT 3, UNIT 4, UNIT 5, UNIT 6
        let unitPrefix = (unitNumber === 1 || unitNumber === 2) ? 'unit' : 'UNIT';
        if (prepLevel === '2' || prepLevel === '3') {
            unitPrefix = 'UNIT'; // Assumption for 2 and 3 based on typical patterns, but might need adjustment
        }

        return `games/${exactFolderName}/${unitPrefix} ${unitNumber}/index.html`;
    }

    // Default for Primary grades (if you add them later)
    return `games/${gradeId}/unit${unitNumber}/index.html`;
}
