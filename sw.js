const CACHE_NAME = 'english-toon-v20260718203258';
const urlsToCache = [
    "/",
    "/.gitattributes",
    "/admin.html",
    "/check_images.py",
    "/dashboard.html",
    "/fix-alert.py",
    "/fix-arabic.js",
    "/fix-arabic.ps1",
    "/fix-arabic.py",
    "/fix-meta.py",
    "/games_map.json",
    "/generate-3d-assets-v2.ps1",
    "/generate-3d-assets.ps1",
    "/grade.html",
    "/import_games.js",
    "/import_games.ps1",
    "/index.html",
    "/inject-enhancements.py",
    "/inject_emojis.ps1",
    "/inject_enhancements.ps1",
    "/inject_sentences.ps1",
    "/migrate-games.ps1",
    "/migrate-games.py",
    "/protect_games.ps1",
    "/README.md",
    "/regenerate_json.ps1",
    "/test-bytes.py",
    "/test-decode.py",
    "/test_apple.jpg",
    "/unit.html",
    "/assets/images/words/ant.jpg",
    "/assets/images/words/apple.jpg",
    "/assets/images/words/arm.jpg",
    "/assets/images/words/arrow.jpg",
    "/assets/images/words/axe.jpg",
    "/assets/images/words/bag.jpg",
    "/assets/images/words/bee.jpg",
    "/assets/images/words/bird.jpg",
    "/assets/images/words/blue.jpg",
    "/assets/images/words/board.jpg",
    "/assets/images/words/book.jpg",
    "/assets/images/words/brother.jpg",
    "/assets/images/words/bus.jpg",
    "/assets/images/words/butterfly.jpg",
    "/assets/images/words/chair.jpg",
    "/assets/images/words/desk.jpg",
    "/assets/images/words/dog.jpg",
    "/assets/images/words/doll.jpg",
    "/assets/images/words/door.jpg",
    "/assets/images/words/drum.jpg",
    "/assets/images/words/duck.jpg",
    "/assets/images/words/father.jpg",
    "/assets/images/words/five.jpg",
    "/assets/images/words/flower.jpg",
    "/assets/images/words/flowers.jpg",
    "/assets/images/words/four.jpg",
    "/assets/images/words/Goodbye.jpg",
    "/assets/images/words/grandfather.jpg",
    "/assets/images/words/grandmother.jpg",
    "/assets/images/words/grass.jpg",
    "/assets/images/words/hair.jpg",
    "/assets/images/words/hana.jpg",
    "/assets/images/words/hands.jpg",
    "/assets/images/words/hany.jpg",
    "/assets/images/words/hat.jpg",
    "/assets/images/words/Hello.jpg",
    "/assets/images/words/horse.jpg",
    "/assets/images/words/house.jpg",
    "/assets/images/words/ill.jpg",
    "/assets/images/words/in.jpg",
    "/assets/images/words/ink.jpg",
    "/assets/images/words/insect.jpg",
    "/assets/images/words/miss_mona.jpg",
    "/assets/images/words/mother.jpg",
    "/assets/images/words/nail.jpg",
    "/assets/images/words/neck.jpg",
    "/assets/images/words/net.jpg",
    "/assets/images/words/nose.jpg",
    "/assets/images/words/nurse.jpg",
    "/assets/images/words/one.jpg",
    "/assets/images/words/open your books.jpg",
    "/assets/images/words/panda.jpg",
    "/assets/images/words/parents.jpg",
    "/assets/images/words/parrot.jpg",
    "/assets/images/words/pencil.jpg",
    "/assets/images/words/pizza.jpg",
    "/assets/images/words/play.jpg",
    "/assets/images/words/potato.jpg",
    "/assets/images/words/shake hands.jpg",
    "/assets/images/words/shake_hands.jpg",
    "/assets/images/words/sister.jpg",
    "/assets/images/words/sit down.jpg",
    "/assets/images/words/sky.jpg",
    "/assets/images/words/snake.jpg",
    "/assets/images/words/spider.jpg",
    "/assets/images/words/spoon.jpg",
    "/assets/images/words/stand up.jpg",
    "/assets/images/words/star.jpg",
    "/assets/images/words/sun.jpg",
    "/assets/images/words/table.jpg",
    "/assets/images/words/teacher.jpg",
    "/assets/images/words/three.jpg",
    "/assets/images/words/tiger.jpg",
    "/assets/images/words/tomato.jpg",
    "/assets/images/words/tree.jpg",
    "/assets/images/words/two.jpg",
    "/css/style.css",
    "/images/clean_bg.png",
    "/images/dashboard_bg.png",
    "/images/game_icon_1.png",
    "/images/game_icon_2.png",
    "/images/game_icon_3.png",
    "/images/game_icon_4.png",
    "/images/login_bg.png",
    "/images/logo_icon.png",
    "/images/pixar_bg.png",
    "/images/prep_1.png",
    "/images/prep_2.png",
    "/images/prep_3.png",
    "/images/primary_1.png",
    "/images/primary_2.png",
    "/images/primary_3.png",
    "/images/primary_4.png",
    "/images/primary_5.png",
    "/images/primary_6.png",
    "/js/auth.js",
    "/js/data.js",
    "/js/game-enhancements.js"
];

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
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
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
