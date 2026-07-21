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
            filesToCache.push('./' + relativePath);
        }
    }
}

// Add root
filesToCache.push('./');

walkDir(__dirname);

console.log(`Found ${filesToCache.length} files to cache.`);

const timestamp = Date.now();
const swContent = `
const CACHE_NAME = 'english-toon-v${timestamp}';
const urlsToCache = ${JSON.stringify(filesToCache, null, 2)};

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened new cache:', CACHE_NAME);
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
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // Network-first strategy for HTML and JS to ensure instant updates
    if (event.request.mode === 'navigate' || event.request.url.endsWith('.html') || event.request.url.endsWith('.js')) {
        event.respondWith(
            fetch(event.request)
                .then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Cache-first for images/audio
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                });
            })
    );
});
`;

fs.writeFileSync(path.join(__dirname, 'sw.js'), swContent);
console.log('Successfully generated sw.js with cache name: english-toon-v' + timestamp);
