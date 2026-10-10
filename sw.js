const CACHE="anno-reader-v2";
const FILES=["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "jszip.min.js", "dict-a.js", "dict-b.js", "dict-c.js", "dict-d.js", "dict-e.js", "dict-f.js", "dict-g.js", "dict-h.js", "dict-i.js", "dict-j.js", "dict-k.js", "dict-l.js", "dict-m.js", "dict-n.js", "dict-o.js", "dict-p.js", "dict-q.js", "dict-r.js", "dict-s.js", "dict-t.js", "dict-u.js", "dict-v.js", "dict-w.js", "dict-x.js", "dict-y.js", "dict-z.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin) return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));
});
