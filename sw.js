const C='vh-v1';const A=['./','index.html','manifest.json','icon-192.png','icon-512.png','cover.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(i=>i!=C).map(i=>caches.delete(i))))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request))));
