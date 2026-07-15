const fs = require('fs');
const path = require('path');

const directoryToScan = __dirname;
const filesToCache = [];

function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (let file of files) {
        const fullPath = path.join(currentPath, file);
        const relativePath = path.relative(__dirname, fullPath).replace(/\\/g, '/');

        // Skip certain directories and files
        if (file === '.git' || file === 'node_modules' || file === 'generate-sw.js' || file === 'sw.js') {
            continue;
        }

        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            // Add relative path (e.g. 'index.html', 'games/file.png')
            // Don't cache the root '/' directly if we rely on 'index.html'
            filesToCache.push('/' + relativePath);
        }
    }
}

// Add root manually to be safe
filesToCache.push('/');

walkDir(__dirname);

console.log(`Found ${filesToCache.length} files to cache.`);

const swContent = `
const CACHE_NAME = 'english-toon-v1-offline';
const urlsToCache = ${JSON.stringify(filesToCache, null, 2)};

self.addEventListener('install', event => {
    // Force immediate installation
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache, starting massive download...');
                
                // Addall might fail if a single file fails (e.g., 404). 
                // We'll map them individually to avoid a single point of failure.
                return Promise.all(
                    urlsToCache.map(url => {
                        return cache.add(url).catch(err => {
                            console.warn('Failed to cache:', url, err);
                        });
                    })
                );
            })
    );
});

self.addEventListener('activate', event => {
    // Take over immediately
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                
                // Fallback to network
                return fetch(event.request).catch(err => {
                    console.log('Offline and not cached:', event.request.url);
                });
            })
    );
});
`;

fs.writeFileSync(path.join(__dirname, 'sw.js'), swContent);
console.log('Successfully generated sw.js');
