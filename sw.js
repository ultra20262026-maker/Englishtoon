self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        return caches.delete(key);
      }));
    }).then(() => {
        self.registration.unregister();
    })
  );
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // bypass cache completely
});
