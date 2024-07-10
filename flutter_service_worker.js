'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4bc2cde5d2408c56558a09039fcd3d62",
"assets/AssetManifest.bin.json": "29baef4a6fc11917e868743323abd90f",
"assets/AssetManifest.json": "4c8055f30a34ef8fc3d47a9d7515524e",
"assets/assets/audio/Knaan%2520-%2520Wavin%2520Flag.mp3": "4142245f0a84834ececfa0aa49831bcd",
"assets/assets/audio/Nico%2520&%2520Vinz%2520-%2520Am%2520I%2520Wrong.mp3": "268da274e46ad17886aac8e63bd0c24e",
"assets/assets/audio/The%2520script%2520-%2520Hall%2520Of%2520Fame.mp3": "aa1de9db5c133935b77b378240e37129",
"assets/assets/images/album/hallOfFame.jpeg": "7991020bdf239758c6d7b3b97e5c9867",
"assets/assets/images/album/wavingFlag.jpeg": "2f6cf0a7c1238154e789d6546376bd12",
"assets/assets/images/album/wrong.png": "b94d744109807c6f3d6025cd0c4495ca",
"assets/assets/images/angham.png": "cc938a3c83448d727301f7449549740a",
"assets/assets/images/db/firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/images/db/mongodb.png": "9b46dcf7dee5947442926446e96f1626",
"assets/assets/images/db/mysql.png": "4c6ce57441b1180c1b25aa0112cd5d3c",
"assets/assets/images/db/oracleDB.png": "a6c4c8582bcf31f4ae787f04a7c420b3",
"assets/assets/images/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/framework/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/framework/nestjs.png": "619aac0de811fa585a0cc99cce9fabee",
"assets/assets/images/githubBlack.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/images/githubColor.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/images/githubWhite.png": "9fa6937a72f9c47a0c05135655262cbf",
"assets/assets/images/linkedinBlack.png": "d289f45e6c24d8fedbdcfd1a54015107",
"assets/assets/images/linkedinColor.png": "f33b3032dcc4df0e1c28e472742419d4",
"assets/assets/images/linkedinWhite.png": "deb53dc0167e87b83bea0aae696c16b2",
"assets/assets/images/others/getx.png": "a2a3d4935ca6e980257244a6a51a7cd0",
"assets/assets/images/others/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/images/others/linux.png": "e1e82f42a889005f38806051f50b58c9",
"assets/assets/images/others/postman.png": "872de4667c364065586a18df922bdf31",
"assets/assets/images/prog_lang/c++.png": "b8a1078d92d851db2364d5e405a0649d",
"assets/assets/images/prog_lang/c.png": "11396a41fce307b10316e942e62d2d39",
"assets/assets/images/prog_lang/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/images/prog_lang/java.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/images/prog_lang/javascript.png": "d8b359bb45cbe32632e8fc7901b27615",
"assets/assets/images/prog_lang/php.png": "94242182bd0c201484a8e9d8e8f55d25",
"assets/assets/images/prog_lang/plsql.png": "765fcb6bef7d0e39a56d628bd555b3e1",
"assets/assets/images/prog_lang/python.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/images/prog_lang/typescript.png": "cdceb0348ca4c75127c2515e3aa223e3",
"assets/assets/images/projects/geneticAlgo1.png": "4cab3225d6eac4f670ce950a8a9ecf07",
"assets/assets/images/projects/hangMan.png": "871aafb0f6c0939685c23564982ba1cc",
"assets/assets/images/projects/hangMan1.png": "a0c67f2cb35c197e929cda8b71fffd69",
"assets/assets/images/projects/hangMan2.png": "d451dda584170e9e4bfc3f29d26d2ebc",
"assets/assets/images/projects/hangMan3.png": "b1499d23e4284078407126f054fd8601",
"assets/assets/images/projects/myTasker.png": "8624ffe8d6cab63da9749ad67cadece4",
"assets/assets/images/projects/myTasker1.png": "a86c1e0cc9740851fd59d1066bba0953",
"assets/assets/images/projects/myTasker2.png": "f6c0feef8a3fbb775e8ebacd24b93a2f",
"assets/assets/images/projects/myTasker3.png": "5b73faac31b2ddebf0c737b2dc91dcbf",
"assets/assets/images/projects/myTasker4.png": "a01ad9954ed4c728edb62eb8d82f0348",
"assets/assets/images/projects/myTasker5.png": "7d4a78021dd7d3a62c0a2177056e0e93",
"assets/assets/images/projects/secureHome.png": "a46eb5e4674c0f1cf4ce78bc16760cdc",
"assets/assets/images/projects/secureHome1.png": "f51c6e1b914b02b2800e4e76e4cedc96",
"assets/assets/images/projects/secureHome2.png": "48803b1f069466cb7bd0f25845387437",
"assets/assets/images/projects/secureHome3.png": "69df1c118074a19cf92ec7fff29671df",
"assets/assets/images/projects/secureHome4.png": "9e94deba5a13b8e6dbce0c235aedecd6",
"assets/assets/images/projects/secureHome5.png": "bcfd3773d968130bf7d8a2c74119e8d8",
"assets/assets/images/projects/secureHome6.png": "d4af759ceb033d2936616292003307cf",
"assets/assets/images/redRect.png": "d91c72597f0947c0e0e220ccada7fa17",
"assets/assets/images/sadFaceBlue.png": "d4ca6a2998bfc32235d04b65460872a8",
"assets/assets/images/tunisia.png": "a10fa8ccb0fd523a8eb1ff19e79f5da4",
"assets/assets/images/web/css.png": "9d089bd0b10be9772b151c76fabe85ca",
"assets/assets/images/web/html.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/assets/images/yellowRect.png": "cba8f4ed9b52734c8be0fab27634edbe",
"assets/FontManifest.json": "b2cf0254d3fca51c80ea51cf016b4241",
"assets/fonts/MaterialIcons-Regular.otf": "ae7c5ad3153d6443ba785b545a7462dd",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Prompt-Regular.ttf": "b338ce0686cab0524db12000f9bbe92c",
"assets/NOTICES": "28acb7619d8894f57dd921e79f1697d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "7d3370862beb0e9f1ce39ecad7618ea6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"index.html": "48b76ab865da52ad88f3f511e36c1879",
"/": "48b76ab865da52ad88f3f511e36c1879",
"logo.png": "abf3c06729204d7e7d124f327c98fc33",
"main.dart.js": "68be256a8f151e5ca85ae4cf569d74cd",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "2c9ce5fbeacfdbb50a945cc9f41d42ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
