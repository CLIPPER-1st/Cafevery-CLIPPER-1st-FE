// Define Cache data
const CACHE_NAME = 'pwa-cache-v1';
const offlinePage = 'offline.html';
const urlsToCache = ['/', '/manifest.json', '/index.html', offlinePage];

// Install Event
self.addEventListener('install', (e) => {
  console.log('[Service Worker] installed');
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] caching all: app shell and content');
      return cache.addAll();
    }),
  );
});

// Activate Event
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activate');
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => {
      return (
        response || fetch(e.request).catch(() => caches.match(offlinePage))
      );
    }),
  );
});
