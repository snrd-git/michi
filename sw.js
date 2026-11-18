const CACHE = 'nihongo-michi-v15';
const FILES = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'icon.svg',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png',
  'data/n5.js', 'data/n4.js', 'data/n3.js', 'data/n2.js', 'data/n1.js',
  'data/n5-plus.js', 'data/n4-plus.js', 'data/n3-plus.js', 'data/n2-plus.js', 'data/n1-plus.js',
  'data/n5-more-a.js', 'data/n5-more-b.js', 'data/n5-more-c.js', 'data/n4-more-a.js', 'data/n4-more-b.js', 'data/n4-more-c.js', 'data/n3-more-a1.js', 'data/n3-more-a2.js', 'data/n3-more-b.js', 'data/n3-more-c.js', 'data/n2-more-a1.js', 'data/n2-more-a2.js', 'data/n2-more-b.js', 'data/n2-more-c.js', 'data/n1-more-a1.js', 'data/n1-more-a2.js', 'data/n1-more-b.js', 'data/n1-more-c.js', 'data/daily-4.js', 'data/daily-5.js',
  'data/n5-more-d.js', 'data/n5-more-e.js', 'data/n5-more-f.js', 'data/n5-more-g.js', 'data/n4-more-d.js', 'data/n4-more-e.js', 'data/n4-more-f.js', 'data/n4-more-g.js', 'data/n3-more-d.js', 'data/n3-more-e.js', 'data/n3-more-f.js', 'data/n3-more-g.js', 'data/n2-more-d.js', 'data/n2-more-e.js', 'data/n2-more-f.js', 'data/n2-more-g.js', 'data/n1-more-d.js', 'data/n1-more-e.js', 'data/n1-more-f.js', 'data/n1-more-g.js', 'data/phrases.js', 'data/kana.js', 'data/videos.js', 'data/format.js', 'data/akselerator.js', 'data/daily-1.js', 'data/daily-2.js', 'data/daily-3.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache:'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('nihongo-michi') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // hanya berkas aplikasi ini; situs yang sama juga memuat aplikasi lain (mis. /issi-app/)
  const OWN = new Set(FILES.map(f => new URL(f, self.registration.scope).pathname));
  if (!OWN.has(new URL(e.request.url).pathname)) return;
  // stale-while-revalidate: tampil cepat dari cache, lalu perbarui cache di latar untuk kunjungan berikutnya
  e.respondWith(caches.match(e.request).then(hit => {
    const net = fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => hit || caches.match('index.html'));
    return hit || net;
  }));
});
