$dir = Get-Location
$files = Get-ChildItem -Path $dir -Recurse -File | Where-Object {
    $_.FullName -notmatch "\\\.git\\" -and
    $_.Name -ne "generate-sw.js" -and
    $_.Name -ne "generate-sw.ps1" -and
    $_.Name -ne "sw.js"
}

$fileList = @("/")
foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($dir.Path.Length + 1).Replace("\", "/")
    $fileList += "/$relativePath"
}

$jsonArray = ConvertTo-Json $fileList

$swContent = @"
const CACHE_NAME = 'english-toon-v3-offline';
const urlsToCache = $jsonArray;

// Always add core pages to cache as well
const corePages = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/grade.html',
  '/admin.html',
  '/unit.html'
];
urlsToCache.push(...corePages);

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
"@

Set-Content -Path "sw.js" -Value $swContent -Encoding UTF8
Write-Host "Generated sw.js with $($fileList.Count) files."
