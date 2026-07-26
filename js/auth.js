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

const FORCE_LOGOUT_VERSION = "2026_07_25_REVOKE_ALL";

async function login(username, password) {
    try {
        // Hardcoded secure admin check (bypasses database)
        if (username === 'admin') {
            if (password === 'Mm01208609509') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', 'admin');
                localStorage.setItem('auth_session_version', FORCE_LOGOUT_VERSION);
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

            // 24-Hour Trial Account Expiration Logic
            if (data.isTrial === true || data.isTrial24h === true) {
                let trialExpiresAt = data.trialExpiresAt;
                if (!trialExpiresAt) {
                    trialExpiresAt = Date.now() + (24 * 60 * 60 * 1000); // 24 hours from first login
                    await userRef.update({ trialExpiresAt: trialExpiresAt });
                }

                if (Date.now() > trialExpiresAt) {
                    return { success: false, message: 'عذراً، انتهت الفترة التجريبية لهذا الحساب (24 ساعة). يرجى التواصل مع الإدارة للتفعيل الكامل.' };
                }

                localStorage.setItem('isTrial', 'true');
                localStorage.setItem('trialExpiresAt', trialExpiresAt.toString());
            } else {
                localStorage.removeItem('isTrial');
                localStorage.removeItem('trialExpiresAt');
            }

            // If it's a multi-user account, let them in without device checking
            if (data.isMultiUser === true) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', username);
                localStorage.setItem('allowedGrade', data.allowedGrade || 'all');
                localStorage.setItem('allowedUnits', JSON.stringify(data.allowedUnits || 'all'));
                localStorage.setItem('auth_session_version', FORCE_LOGOUT_VERSION);
                return { success: true };
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
                    localStorage.setItem('allowedGrade', data.allowedGrade || 'all');
                    localStorage.setItem('allowedUnits', JSON.stringify(data.allowedUnits || 'all'));
                    localStorage.setItem('auth_session_version', FORCE_LOGOUT_VERSION);
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
            localStorage.setItem('allowedGrade', data.allowedGrade || 'all');
            localStorage.setItem('allowedUnits', JSON.stringify(data.allowedUnits || 'all'));
            localStorage.setItem('auth_session_version', FORCE_LOGOUT_VERSION);
            
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
    // Global Forced Logout Check
    if (localStorage.getItem('auth_session_version') !== FORCE_LOGOUT_VERSION) {
        const deviceId = localStorage.getItem('device_id');
        localStorage.clear();
        if (deviceId) localStorage.setItem('device_id', deviceId);
        localStorage.setItem('auth_session_version', FORCE_LOGOUT_VERSION);
        window.location.href = 'index.html';
        return;
    }

    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    // Check 24-Hour Trial Account Expiry
    if (localStorage.getItem('isTrial') === 'true') {
        const expiresAt = parseInt(localStorage.getItem('trialExpiresAt') || '0', 10);
        if (expiresAt > 0 && Date.now() > expiresAt) {
            localStorage.clear();
            alert('عذراً، انتهت الفترة التجريبية لحسابك (24 ساعة). تم تسجيل الخروج تلقائياً.');
            window.location.href = 'index.html';
            return;
        }
    }

    // Auto-setup Admin Panel Button in Navigation Header for Admin user
    window.addEventListener('DOMContentLoaded', () => {
        setupAdminHeader();
    });
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        setupAdminHeader();
    }
}

function setupAdminHeader() {
    if (localStorage.getItem('currentUser') === 'admin') {
        const adminBtn = document.getElementById('admin-btn-link');
        if (adminBtn) {
            adminBtn.style.display = 'inline-flex';
        } else {
            const headerActions = document.querySelector('.header-actions');
            if (headerActions && !document.getElementById('injected-admin-btn')) {
                const btn = document.createElement('a');
                btn.id = 'injected-admin-btn';
                btn.href = 'admin.html';
                btn.className = 'btn-nav-action btn-admin';
                btn.style.cssText = 'background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; text-decoration: none; padding: 8px 18px; border-radius: 20px; font-weight: bold; margin-left: 10px; border: 1px solid #f59e0b;';
                btn.innerHTML = '⚙️ لوحة الإدارة';
                headerActions.insertBefore(btn, headerActions.firstChild);
            }
        }
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('allowedGrade');
    localStorage.removeItem('allowedUnits');
    localStorage.removeItem('isTrial');
    localStorage.removeItem('trialExpiresAt');
    window.location.href = 'index.html';
}
