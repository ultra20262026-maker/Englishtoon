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

const FORCE_LOGOUT_VERSION = "2026_07_26_STABLE_V100";

async function login(username, password) {
    try {
        const cleanUser = (username || '').trim().toLowerCase();
        const cleanPass = (password || '').trim();

        // Hardcoded secure admin check (bypasses database)
        if (cleanUser === 'admin') {
            if (cleanPass === 'Mm01208609509' || cleanPass === 'mm01208609509' || cleanPass === '01208609509') {
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
    // Update SW registration and version without destroying active login session
    if (localStorage.getItem('auth_session_version') !== FORCE_LOGOUT_VERSION) {
        localStorage.setItem('auth_session_version', FORCE_LOGOUT_VERSION);
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(regs => {
                for (let r of regs) r.unregister();
            }).catch(() => {});
        }
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

    // Auto-setup Admin Panel Button in Navigation Header & Floating Badge across ALL pages
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', setupAdminHeader);
    } else {
        setupAdminHeader();
    }
}

function setupAdminHeader() {
    const currUser = (localStorage.getItem('currentUser') || '').trim().toLowerCase();
    const isAdmin = (currUser === 'admin');

    const userDisplay = document.getElementById('user-display');
    if (userDisplay) {
        userDisplay.textContent = isAdmin ? 'admin (المدير)' : (localStorage.getItem('currentUser') || 'طالب');
    }

    const adminBtn = document.getElementById('admin-btn-link');
    if (adminBtn) {
        if (isAdmin) {
            adminBtn.style.cssText = 'display: inline-flex !important; visibility: visible !important; opacity: 1 !important; background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; border-radius: 20px; font-weight: bold; border: 1px solid #f59e0b; padding: 8px 18px; margin-left: 8px; text-decoration: none;';
        } else {
            adminBtn.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
        }
    }

    const heroBtn = document.getElementById('admin-hero-btn');
    if (heroBtn) {
        heroBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    }

    const existingFloat = document.getElementById('global-floating-admin-btn');
    if (isAdmin) {
        if (!existingFloat) {
            const floatBtn = document.createElement('a');
            floatBtn.id = 'global-floating-admin-btn';
            floatBtn.href = 'admin.html';
            floatBtn.style.cssText = 'position: fixed; bottom: 85px; right: 20px; z-index: 99999; background: linear-gradient(135deg, #f59e0b, #d97706); color: #ffffff !important; text-decoration: none; padding: 12px 22px; border-radius: 50px; font-weight: 900; font-size: 1.05rem; box-shadow: 0 10px 30px rgba(245, 158, 11, 0.7), 0 0 15px rgba(255, 255, 255, 0.4); border: 2px solid #ffffff; display: flex; align-items: center; gap: 8px; backdrop-filter: blur(10px);';
            floatBtn.innerHTML = '⚙️ لوحة الإدارة';
            document.body.appendChild(floatBtn);
        }
    } else {
        if (existingFloat) {
            existingFloat.remove();
        }
    }
}

function quickAdminLogin() {
    const pass = prompt('🔑 أدخل كلمة سر الإدارة للتحويل الفوري لحساب Admin:');
    if (!pass) return;
    const cleanPass = pass.trim();
    if (cleanPass === 'Mm01208609509' || cleanPass === 'mm01208609509' || cleanPass === '01208609509') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', 'admin');
        localStorage.setItem('allowedGrade', 'all');
        localStorage.setItem('allowedUnits', 'all');
        setupAdminHeader();
        alert('✅ تم التحويل لحساب الإدارة (Admin) بنجاح!');
        if (window.location.pathname.endsWith('admin.html')) {
            window.location.reload();
        }
    } else {
        alert('❌ كلمة سر الإدارة غير صحيحة.');
    }
}

function logout() {
    localStorage.clear();
    window.location.href = 'index.html?logout=true';
}
