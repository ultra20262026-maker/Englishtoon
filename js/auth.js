const firebaseConfig = {
    apiKey: "AIzaSyA1_kx4HmDWZF_T_EnZDKgq5yssYlOMaWM",
    authDomain: "english-toon-14072.firebaseapp.com",
    projectId: "english-toon-14072",
    storageBucket: "english-toon-14072.firebasestorage.app",
    messagingSenderId: "276063917807",
    appId: "1:276063917807:web:c794621a4df054fdaaad1a",
    measurementId: "G-NH1DKSJ2W4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function login(username, password) {
    try {
        // Hardcoded secure admin check (bypasses database)
        if (username === 'admin') {
            if (password === 'Mm01208609509') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', 'admin');
                return { success: true };
            } else {
                return { success: false, message: 'كلمة مرور الإدارة غير صحيحة.' };
            }
        }

        let userRef = db.collection("codes").doc(username);
        let userSnap = await userRef.get();

        // Fallback for the accidental space in collection name
        if (!userSnap.exists) {
            userRef = db.collection("codes ").doc(username);
            userSnap = await userRef.get();
        }

        if (userSnap.exists) {
            const data = userSnap.data();
            
            if (data.password !== password) {
                return { success: false, message: 'كلمة المرور غير صحيحة.' };
            }

            // Get or create Device ID for this browser
            let localDeviceId = localStorage.getItem('device_id');
            if (!localDeviceId) {
                localDeviceId = 'dev_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
                localStorage.setItem('device_id', localDeviceId);
            }

            if (data.used === true) {
                // It was used. Is it the same device?
                if (data.deviceId === localDeviceId) {
                    // Same device! Let them in.
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('currentUser', username);
                    return { success: true };
                } else {
                    // Different device! Block them.
                    return { success: false, message: 'عذراً، لا يمكنك الدخول من جهاز جديد. لقد تم تفعيل هذا الحساب على جهاز آخر.' };
                }
            }

            // First time login ever: Mark as used and save this device ID
            await userRef.update({ 
                used: true,
                deviceId: localDeviceId
            });

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', username);
            
            return { success: true };
        } else {
            return { success: false, message: 'بيانات الدخول غير صحيحة أو غير موجودة.' };
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return { success: false, message: 'حدث خطأ في الاتصال. حاول مرة أخرى. ' + error.message };
    }
}

function checkAuth() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
