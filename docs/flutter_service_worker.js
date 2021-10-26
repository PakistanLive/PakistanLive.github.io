'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "3fb57a9f570186de25a2fb5bf7c49957",
"app-ads.txt": "edbf102392f4daa9da625b4fff62b873",
"assets/AssetManifest.json": "3be86c130a5601938553e81f690b32bf",
"assets/assets/ads/growmorepk.jpg": "a740c6f45a949cdca6d666931f95389d",
"assets/assets/app_icon.ai": "eef2c4924fc05782e150eeeaab7202e3",
"assets/assets/channelLogo/92.png": "ca4b2d002e486eb1361de5476f7e3b0f",
"assets/assets/channelLogo/92_uk.png": "d737681ffcf8a49e996b6d3522138c20",
"assets/assets/channelLogo/aaj.png": "e4b1dbd115f15d25c875f07948130c25",
"assets/assets/channelLogo/ary.png": "711feb61a762b39f2cfe5fa05df6403b",
"assets/assets/channelLogo/babyTv.png": "7630c002fb51b205794bdb997aa0fed5",
"assets/assets/channelLogo/basketball.png": "b4216b217ed6adfa8aa07a4528b839c3",
"assets/assets/channelLogo/bol.png": "d79109b2a2e30060d082fc7ff76e6fa5",
"assets/assets/channelLogo/cartoonenglish.png": "8511210eb40f7f83f040e5a5aa72b2b7",
"assets/assets/channelLogo/cartoonurdu.png": "e4eadbee4c3db9d48457e69e74f62269",
"assets/assets/channelLogo/cricket.png": "1ef2215359ad510dce1ab53941224940",
"assets/assets/channelLogo/dawn.jpg": "3c5d568ccafb56e8c00f6dfcef98ebe7",
"assets/assets/channelLogo/discoveryKids.png": "b425785a3c817297de968f739f539431",
"assets/assets/channelLogo/dunya.png": "4c644736bfd3abb476808f24c6de38b2",
"assets/assets/channelLogo/express.jpg": "4e8902a248e368923ed55ea63fd637d3",
"assets/assets/channelLogo/filmworld.jpeg": "522c99adb9b043fe90ad0b600799392b",
"assets/assets/channelLogo/football.png": "97aaf47191dfd314dab202e8f1f43ba6",
"assets/assets/channelLogo/geo.png": "ff68fefe9b5c823ce639691e6cbce833",
"assets/assets/channelLogo/geoNews.png": "899d99acb5c62b016f62644db9136956",
"assets/assets/channelLogo/geosuper.png": "d95a0cbc78457443a577ef0a319b9846",
"assets/assets/channelLogo/gnn.png": "d3ed8e1efc9161391d17dbb2c28d2187",
"assets/assets/channelLogo/hum.png": "4173a24428d0f2bd88617b2b86740da6",
"assets/assets/channelLogo/humTv.jpg": "9e1a0853e08f1d38b65393d6d5139fec",
"assets/assets/channelLogo/k2.png": "cecb1dbffacb8f2941e6ea110f27bed0",
"assets/assets/channelLogo/khyber.png": "af4e4c09ee466804e7c535bcec494aac",
"assets/assets/channelLogo/khyberNews.png": "ef0c0aec9a7a4baa0087cd52e679187d",
"assets/assets/channelLogo/khyberTv.png": "936a378d330c2365cf44ca1fde648581",
"assets/assets/channelLogo/lahoreNews.png": "55623c79c34a67dbc8a4705947ba49a2",
"assets/assets/channelLogo/loiterSquad.jpeg": "1b8d59f787b11bc6fceaf5e17f4e8abd",
"assets/assets/channelLogo/minhajTv.png": "86566e8faf58ec9f7d3c5de8ecd9e91e",
"assets/assets/channelLogo/mrPickles.png": "6059f54ecf7294e5531c15aea4c51847",
"assets/assets/channelLogo/nbc.png": "bfb08aa6c2f9e15c2022cb776b476eca",
"assets/assets/channelLogo/psl.png": "3da0d54e316b83ce7592e2b54765b298",
"assets/assets/channelLogo/psl_cover.jpg": "bd7b39498873b1857f70d99d0e300cef",
"assets/assets/channelLogo/psl_logo.png": "141b7ddba1361ded4c8a8331a11510c7",
"assets/assets/channelLogo/ptvnews.png": "5444da29fa0248740e5be13cc8515b64",
"assets/assets/channelLogo/ptvsports.png": "7f651d15f6acfb008dac954a94d67e53",
"assets/assets/channelLogo/ptvworld.png": "4182dee55c7163dceea404278ad2de58",
"assets/assets/channelLogo/rickAndMorty.png": "629e61ebebe47ee3dae9c0cf1522e9ae",
"assets/assets/channelLogo/samaa.png": "aade725e028b7006c56e1e5cd93fd1b1",
"assets/assets/channelLogo/sky.png": "d7b28e802ebf0287bc44c2043b90e841",
"assets/assets/channelLogo/squidBillies.jpg": "32cbd3fa7f0e8f93c9e201708131065e",
"assets/assets/channelLogo/suchTv.png": "5bcf47b84d598642767bbef7ffaf0a27",
"assets/assets/channelLogo/tensports.jpg": "22693ea9b9332fe7daf2a68f6fe741d5",
"assets/assets/channelLogo/timAndEric.png": "65192522f9ab6ca78174f19a0af0bea3",
"assets/assets/channelLogo/ventureBros.png": "e992f629c774f8232354bd20251813b8",
"assets/assets/channelLogo/williamStreet.png": "4314c7c5af8cca4f10113ba9f3db028f",
"assets/assets/logo.png": "5bb2f4ec5d3f2d433b04fe5aaef83fc1",
"assets/assets/logo1x.png": "ded49918aab3b62c783739d517bf2eb3",
"assets/assets/other_icon.eps": "9c1f9c5aa7890b4ae8f3639287f374aa",
"assets/assets/simple.png": "0f9a20aa02bf6b1affe25040a7916c46",
"assets/FontManifest.json": "96b054457e4db8ea2de2e319b3ed8c43",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "58e0962e144b82f8dc25ff744a097413",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"CNAME": "2134b3a8e2b979661fedbdd9549f56b5",
"favicon.png": "174255231f0dad1a52cda123531d2faf",
"icons/Icon-192.png": "436f15499117d2efa73d063d871edb8b",
"icons/Icon-512.png": "95e27bc5898ea3e75ea461d3c41cca7f",
"index.html": "b93408edb0ddebff3a37699546140108",
"/": "605259ebaebc879fbcec3003d9ed5271",
"main.dart.js": "7415ecdc11dca7eb004e4801d444ce19",
"manifest.json": "3aca4c6933e4538523462824c6ce9468",
"privacy/index.html": "605259ebaebc879fbcec3003d9ed5271",
"robots.txt": "14bc29a4d73099b89613e98c1e31519a",
"script.js": "99177c1447aa616c56a64a186061502b",
"service-worker.js": "9026131f65283b0c9391a396969f0342",
"sitemap/sitemap.xml": "c8581a641a3e58a69470265365332ea3",
"style.css": "e1d01cbb939e469c484fe7ca7d653a8f",
"version.json": "dfeb6905dfd87bd92ec91754ff903739"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
