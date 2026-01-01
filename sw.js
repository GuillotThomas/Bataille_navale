const CACHE_NAME = 'bataille-navale-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

**3. Instructions pour créer les icônes**

Pour les icônes, vous pouvez utiliser un outil en ligne comme [https://realfavicongenerator.net/](https://realfavicongenerator.net/) ou créer vos propres PNG avec le logo du bateau.

**4. Structure du dépôt GitHub**

Créez un dépôt avec cette structure :
```
votre-repo/
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
└── icon-180.png (pour iOS)