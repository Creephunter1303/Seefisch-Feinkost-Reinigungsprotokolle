// Service Worker für die Testseite: nötig, damit Chrome „App installieren“ anbietet.
// Holt immer zuerst die neueste Version aus dem Netz, ohne Netz die zuletzt geladene.
const CACHE = 'reinigung-test-4';
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((n) => n !== CACHE).map((n) => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then((r) => { const c = r.clone(); caches.open(CACHE).then((ca) => ca.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request)));
});
