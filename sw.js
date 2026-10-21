// Service Worker — Carpintaria PWA (Estratégia Network-First)
const CACHE = 'carpintaria-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalar: guarda os ficheiros base em cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

// Ativar: limpa caches antigas
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: Tenta ir à rede primeiro (para ter sempre a versão mais recente).
// Se estiver offline, serve a versão guardada em cache.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(resp => {
        // Se a resposta da rede for válida, atualiza a cache automaticamente
        if (resp && resp.status === 200 && e.request.url.startsWith(self.location.origin)) {
          const respClone = resp.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, respClone));
        }
        return resp;
      })
      .catch(() => {
        // Sem internet: procura na cache
        return caches.match(e.request).then(cached => cached || caches.match('./index.html'));
      })
  );
});
