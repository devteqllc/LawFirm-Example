const CACHE_NAME = 'lawfirm-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html'
  // later you can add: '/css/style.css', '/js/main.js', etc.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // If we have it in cache, use it; otherwise go to the network
      return response || fetch(event.request);
    })
  );
});
