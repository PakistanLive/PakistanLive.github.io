'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "3fb57a9f570186de25a2fb5bf7c49957",
"app-ads.txt": "edbf102392f4daa9da625b4fff62b873",
"assets/AssetManifest.json": "b01f79b484101d6a8087558c1980a255",
"assets/assets/app_icon.ai": "b231c517b4ad330bafa4a988a709cb9a",
"assets/assets/logo.png": "ded49918aab3b62c783739d517bf2eb3",
"assets/assets/news/92.png": "ca4b2d002e486eb1361de5476f7e3b0f",
"assets/assets/news/aaj.png": "e4b1dbd115f15d25c875f07948130c25",
"assets/assets/news/ary.png": "711feb61a762b39f2cfe5fa05df6403b",
"assets/assets/news/bol.png": "d79109b2a2e30060d082fc7ff76e6fa5",
"assets/assets/news/dawn.jpg": "3c5d568ccafb56e8c00f6dfcef98ebe7",
"assets/assets/news/dunya.png": "4c644736bfd3abb476808f24c6de38b2",
"assets/assets/news/express.jpg": "4e8902a248e368923ed55ea63fd637d3",
"assets/assets/news/geo.png": "899d99acb5c62b016f62644db9136956",
"assets/assets/news/gnn.png": "d3ed8e1efc9161391d17dbb2c28d2187",
"assets/assets/news/hum.png": "4173a24428d0f2bd88617b2b86740da6",
"assets/assets/news/nbc.png": "bfb08aa6c2f9e15c2022cb776b476eca",
"assets/assets/news/ptvnews.png": "5444da29fa0248740e5be13cc8515b64",
"assets/assets/news/ptvworld.png": "4182dee55c7163dceea404278ad2de58",
"assets/assets/news/samaa.png": "aade725e028b7006c56e1e5cd93fd1b1",
"assets/assets/news/sky.png": "d7b28e802ebf0287bc44c2043b90e841",
"assets/assets/other_icon.eps": "9c1f9c5aa7890b4ae8f3639287f374aa",
"assets/assets/psl/psl.png": "3da0d54e316b83ce7592e2b54765b298",
"assets/assets/psl/psl_cover.jpg": "bd7b39498873b1857f70d99d0e300cef",
"assets/assets/psl/psl_logo.png": "141b7ddba1361ded4c8a8331a11510c7",
"assets/assets/sports/basketball.png": "b4216b217ed6adfa8aa07a4528b839c3",
"assets/assets/sports/cricket.png": "1ef2215359ad510dce1ab53941224940",
"assets/assets/sports/football.png": "97aaf47191dfd314dab202e8f1f43ba6",
"assets/assets/sports/geosuper.png": "d95a0cbc78457443a577ef0a319b9846",
"assets/assets/sports/ptvsports.png": "7f651d15f6acfb008dac954a94d67e53",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "f133325888ccd24a2c25c386dc678245",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"CNAME": "2134b3a8e2b979661fedbdd9549f56b5",
"favicon.png": "3a5c333dd3b24cd52f9512e25b3f7415",
"icons/Icon-192.png": "6f42d7b3a7b1fc930eb89f3bc0e14ef0",
"icons/Icon-512.png": "190bb6660e185ec13023eefdbac31f1c",
"index.html": "880ec5136582bafadfcec45a59746cf2",
"/": "605259ebaebc879fbcec3003d9ed5271",
"main.dart.js": "b0858098017b1b1ae08d3fcdbba435c3",
"manifest.json": "3aca4c6933e4538523462824c6ce9468",
"privacy/index.html": "605259ebaebc879fbcec3003d9ed5271",
"script.js": "623f98325a78e17972d5d940e2783ad3",
"service-worker.js": "f733d78ed0caa99fa9cb0f7499d27904",
"sitemap/sitemap.xml": "c8581a641a3e58a69470265365332ea3",
"style.css": "c3cbad18da7cf4dbff05e7a0a60814a0",
"version.json": "6288f96d7eccd7a9b8a5795fad409326"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
