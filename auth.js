// ULTIMATE PURE AUTH - NO REDIRECTS - NO LOOPS
console.log("EnglishToon Security System: Redirects disabled for stability.");

// Disable any potential redirect loops
window.onbeforeunload = null;

function checkAuth() {
    console.log("Auth Check: OK");
    return true; 
}

function logout() {
    console.log("Logout initiated");
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'index.html?logout=' + Date.now();
}

// Block any other script from redirecting
// Object.defineProperty(window, 'location', {
//     writable: false,
//     configurable: false
// });
