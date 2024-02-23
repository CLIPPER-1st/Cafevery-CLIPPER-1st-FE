// // Define Cache data
// const CACHE_NAME = 'pwa-cache-v2';
// const urlsToCache = ['/', '/manifest.json', '/index.html', '/offline.html'];

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/PWAServiceWorker.js');
// }

// // Install Event
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache).then(() => {
//         return self.skipWaiting();
//       });
//     }),
//   );
// });

// // Activate Event
// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches
//       .keys()
//       .then((cacheNames) => {
//         return Promise.all(
//           cacheNames.map((cacheName) => {
//             if (cacheName !== CACHE_NAME) {
//               return caches.delete(cacheName);
//             }
//           }),
//         );
//       })
//       .then(() => {
//         return self.clients.claim();
//       }),
//   );
// });

// // Fetch Event
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response;
//       }

//       return fetch(event.request)
//         .then((response) => {
//           if (
//             !response ||
//             response.status !== 200 ||
//             response.type !== 'basic'
//           ) {
//             return response;
//           }

//           var responseToCache = response.clone();
//           caches.open(CACHE_NAME).then((cache) => {
//             cache.put(event.request, responseToCache);
//           });

//           return response;
//         })
//         .catch(() => {
//           return caches.match('/offline.html');
//         });
//     }),
//   );
// });
