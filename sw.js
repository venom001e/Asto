// Service Worker for Astro Cloud PWA
const CACHE_NAME = 'astro-cloud-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about-us.html',
  '/contact-us.html',
  '/services.html',
  '/products.html',
  '/blogs.html',
  '/assets/css/bootstrap.css',
  '/assets/css/style.css',
  '/assets/css/mystyle.css',
  '/assets/css/mobile-responsive.css',
  '/assets/js/jquery.js',
  '/assets/js/bootstrap.js',
  '/assets/js/custom.js',
  '/assets/js/mobile-enhancements.js',
  '/uploads/images/logo/1669716928.png',
  '/assets/images/favicon.png',
  '/manifest.json'
];

// Install event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});