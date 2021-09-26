'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "74b65abe6cd3af4c22adfd3fe940641c",
".git/config": "3b2f7fe9cbb6cacc01c8bc3d24a056bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4a9e468b8110c641455a3e8e94468ef6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e51f5bca5a2a64823e8f0474abbb1102",
".git/logs/refs/heads/master": "e51f5bca5a2a64823e8f0474abbb1102",
".git/objects/05/b36cca832b349dda9d60163e9346346d1551ea": "f4036e2dfd3d3035054cfa7fd187b8da",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/13/bbc53cb85a41c0a5a8dd2be619ac0b05730bcf": "e958fed780540bc2c02354c8e369c125",
".git/objects/17/80be5f6e9d08e7148cb50335177372a72ba7a1": "fb6bcb8eadda670c653e935f2e9c80dc",
".git/objects/1e/c20bd0db798ba6bb973b9d9466eff9e25ce58b": "a88ca22861c3d4389c7beb666015750e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/be50a6c768f143bd5f1bf0d5e17eb5cea19e20": "a482c8b6a48658d5b41190f1a8b09d12",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/42/3293f78bf56e7ee191367fd4d8a5dd8e32de12": "7645b889a191bc86eca6a6158cecc843",
".git/objects/50/bf7270cd3c2eb1e12fb0430f0e63bed3193a25": "1852d79328a89242765399dc03eb4747",
".git/objects/65/05aac02ee4020ccbdfb49dee9231d0249a4e07": "66cb4985f5c6a10bf9bc03ce6146b818",
".git/objects/6e/931624dae93612aec07fdd741e4f1b43be7ccf": "8c877d43dc3ad878bfe6f44bed6883fb",
".git/objects/70/5c8c9f0bfd36516dddf01f73e375b09de2bb00": "3819e017084894d25f88b21c07198e8a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/ac034d5cbf0f3b114f6c5ecec9f5fbf51b2eac": "0b2d419106cf0ca755416371b9e5d444",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6fcaff716e33977010854bc2590938ba8bc8b9": "2b7c5c2599787bda41b4d86ed3962a35",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/95/dcbb06f2542d5cc8efe0694cf3baac85ef58c7": "ec0df9b4e067fb8f6ef6300cedd65f41",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/bd/52fa9c23a679c6e0228a87e573f211180c4c61": "086414dca20eab0bb7a562e9c5916f8d",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d2/25cf78b670bdd3acc3250128b52aef11315def": "4038035f44cb71248b37bed944f3fa6a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f6/4eba11d19008d0e1b38bf54d740fdbfd50c8a6": "465a9f794f58cbb09550aaafa1e6d7a1",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/refs/heads/master": "2498a59339372b361a610ef2918a0527",
"assets/AssetManifest.json": "af30d7e052d885bb6dddb9750f66bd28",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/FontManifest.json": "b4170675f658d521605a4a3d84791623",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/Models/projects_model.json": "8b9c6ea6655d42c5575bd638a8953f5b",
"assets/NOTICES": "a39d95f7de2658f73430fce6309532c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fd3043214cb704391c04b70795c32b63",
"/": "db4bef21fddbc00f5dbb33be9c0ec065",
"main.dart.js": "7680d60e64ecd5a4601267e5bca7cb4e",
"manifest.json": "97031daec864e7f753fe03ee0b9c12d0",
"version.json": "bfe96502e95929a7e362320f676bc9ef",
"zunairpervaiz.github.io/.git/COMMIT_EDITMSG": "8b43caef23844d364a3c1479a80c93bc",
"zunairpervaiz.github.io/.git/config": "bfacc75824253e44c84ff5c78b36fa3f",
"zunairpervaiz.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"zunairpervaiz.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"zunairpervaiz.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"zunairpervaiz.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"zunairpervaiz.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"zunairpervaiz.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"zunairpervaiz.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"zunairpervaiz.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"zunairpervaiz.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"zunairpervaiz.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"zunairpervaiz.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"zunairpervaiz.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"zunairpervaiz.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"zunairpervaiz.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"zunairpervaiz.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"zunairpervaiz.github.io/.git/index": "7252914a6fc2fa341ab7aca5bcf94d79",
"zunairpervaiz.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"zunairpervaiz.github.io/.git/logs/HEAD": "60a7f4f1fd4485fb6dc34d86d4f5a74c",
"zunairpervaiz.github.io/.git/logs/refs/heads/main": "60a7f4f1fd4485fb6dc34d86d4f5a74c",
"zunairpervaiz.github.io/.git/logs/refs/remotes/origin/HEAD": "7128f133dfff98c8a75c3d97ad02c307",
"zunairpervaiz.github.io/.git/logs/refs/remotes/origin/main": "263d725e624452e9280472a9775d1458",
"zunairpervaiz.github.io/.git/objects/05/b36cca832b349dda9d60163e9346346d1551ea": "f4036e2dfd3d3035054cfa7fd187b8da",
"zunairpervaiz.github.io/.git/objects/1a/ada93ac0634e33aec99c537cb6fc98a079a57e": "e84d62f5ea53efc54bc5b1268cbc19fb",
"zunairpervaiz.github.io/.git/objects/37/b98a04fd4ced516247882ef90fd5c1faa1028a": "4c57ce67d9d8bfe9cbdbd3f267efdff5",
"zunairpervaiz.github.io/.git/objects/42/3293f78bf56e7ee191367fd4d8a5dd8e32de12": "7645b889a191bc86eca6a6158cecc843",
"zunairpervaiz.github.io/.git/objects/6f/0c650363a8ee60a0c64135004be686997b73c3": "7a2e0e17853bf96132296c44b592ff64",
"zunairpervaiz.github.io/.git/objects/pack/pack-e9472c03881a405f6709b69024daae72ea5bec71.idx": "4707a0def48a78c9362daa331566f89b",
"zunairpervaiz.github.io/.git/objects/pack/pack-e9472c03881a405f6709b69024daae72ea5bec71.pack": "8c96ab6911f452ab7cdb1bb1031d204c",
"zunairpervaiz.github.io/.git/packed-refs": "518e6c4acda7256e340d6c1a5dcfb207",
"zunairpervaiz.github.io/.git/refs/heads/main": "90ec83a06c8687c11902ffb38bcd514c",
"zunairpervaiz.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"zunairpervaiz.github.io/.git/refs/remotes/origin/main": "90ec83a06c8687c11902ffb38bcd514c",
"zunairpervaiz.github.io/assets/AssetManifest.json": "af30d7e052d885bb6dddb9750f66bd28",
"zunairpervaiz.github.io/assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"zunairpervaiz.github.io/assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"zunairpervaiz.github.io/assets/FontManifest.json": "b4170675f658d521605a4a3d84791623",
"zunairpervaiz.github.io/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"zunairpervaiz.github.io/assets/lib/Models/projects_model.json": "05afb853167aee4b3d8025d91bfdc02b",
"zunairpervaiz.github.io/assets/NOTICES": "a39d95f7de2658f73430fce6309532c9",
"zunairpervaiz.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"zunairpervaiz.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"zunairpervaiz.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"zunairpervaiz.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"zunairpervaiz.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"zunairpervaiz.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"zunairpervaiz.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"zunairpervaiz.github.io/index.html": "db4bef21fddbc00f5dbb33be9c0ec065",
"zunairpervaiz.github.io/main.dart.js": "01d6c9cf71f093826d6ec47c1c72970e",
"zunairpervaiz.github.io/manifest.json": "97031daec864e7f753fe03ee0b9c12d0",
"zunairpervaiz.github.io/version.json": "bfe96502e95929a7e362320f676bc9ef"
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
