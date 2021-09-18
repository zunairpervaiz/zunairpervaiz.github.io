'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2ca20e67d265de2825435b11cb79196e",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/pic10.png": "456be8ff84569fe387557e5a5c6c72cf",
"assets/assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/assets/images/pic103.png": "ff30ff7baaa731959eb15b580d99e390",
"assets/assets/images/pic104.png": "a0c9061b828b8d584f1ac93edebdb16f",
"assets/assets/images/pic105.png": "fa0847ce647265f999983cff70280ecb",
"assets/assets/images/pic106.png": "e681e2de41c5c6f806a4669b119f14cc",
"assets/assets/images/pic107.PNG": "34a3bad1552b22a4d98152931928fec4",
"assets/assets/images/pic108.PNG": "6c1c94cb69fa9ba2bf543717f6f3e740",
"assets/assets/images/pic109.PNG": "b844d1320f00630551bd63883ee4fb06",
"assets/assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/assets/images/pic110.PNG": "89d3e174412a1422ceda2d6314b74c4a",
"assets/assets/images/pic111.PNG": "8f9b468c4ca0f528075572399dbcce26",
"assets/assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/assets/images/pic120.png": "b7e1cda3def29595cceed1fa53d443e6",
"assets/assets/images/pic121.png": "9fcadaed18ab91c76923ec90a6478873",
"assets/assets/images/pic122.png": "61c504eaf06092b341105992408a2e04",
"assets/assets/images/pic123.png": "d0a1647de5dec7a6bc1118c913f97939",
"assets/assets/images/pic124.png": "0942ee654c80868545d4f94d67a5775a",
"assets/assets/images/pic125.png": "91584790e8ff8762ba1147159d25284c",
"assets/assets/images/pic126.png": "428108669e3fdebdc2a07bedd1362409",
"assets/assets/images/pic2.png": "85b7e4ec70d220c01247343ca90b46db",
"assets/assets/images/pic3.png": "68cedbbcf02711839428cf84e516d5da",
"assets/assets/images/pic4.png": "aa6f46eb2fb0a2527eba780ee5d12eac",
"assets/assets/images/pic5.png": "54079c05fd2df6b664c9328a82d9a64d",
"assets/assets/images/pic506.png": "51947d83378b193aa5e84855879b753d",
"assets/assets/images/pic6.png": "9e8de66e1b4d4b260c9956022fc585ce",
"assets/assets/images/pic7.png": "186389cc8bf90f82b525ae237ed13aa4",
"assets/assets/images/pic8.png": "c859ffd96b824d7a4dda008f69ea793b",
"assets/assets/images/pic9.png": "9a798d2735999070bb337d24d9b71408",
"assets/assets/images/profile.png": "54905cc3619b1d6aed869b5ef68418b0",
"assets/FontManifest.json": "b4170675f658d521605a4a3d84791623",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "919e302a289fd6e74d9644974ed5ac45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "95075cdfd0a9d86a10c7a557326036b7",
"/": "95075cdfd0a9d86a10c7a557326036b7",
"main.dart.js": "f577fa0a8347e42e118892692aef89f9",
"manifest.json": "97031daec864e7f753fe03ee0b9c12d0",
"version.json": "bfe96502e95929a7e362320f676bc9ef"
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
