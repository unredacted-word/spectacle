// Use a cacheName for cache versioning
var VERSION = "0.1.0",
  CACHENAME = "spectacle-v" + VERSION,
  ASSETS = ["./", "./index.html"];

// During the installation phase, add static assets to the cache
self.addEventListener("install", function (event) {
  // prevent the service worker from becoming active until…
  event.waitUntil(
    // fetch the cache for the application
    self.caches.open(CACHENAME).then(function (cache) {
      // fetch app assets from network, add them to cache
      return cache.addAll(ASSETS).then(function () {
        /* eslint-disable no-console */
        console.log("Successfully registered service worker");
        /* eslint-enable no-console */
        // all assets have been fetched, stop waiting to allow the service
        // worker to become active
        self.skipWaiting();
      });
    })
  );
});

// the latest service worker is installed and the old has been killed, time to
// remove the inactive cache
self.addEventListener("activate", function (event) {
  var appCacheNames = [CACHENAME];

  event.waitUntil(
    // get all cache key names
    self.caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          // if the cacheName is not in our appCacheNames
          if (appCacheNames.indexOf(cacheName) === -1) {
            // delete it
            return self.caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Start controlling all open clients without needing to reload them
  return self.clients.claim();
});

// listen for network requests
self.addEventListener("fetch", function (event) {
  // either respond with the cached object or go ahead and fetch the actual URL
  event.respondWith(
    self.caches.match(event.request).then(function (response) {
      // if the cache resolves with a matched response…
      if (response) {
        // return the cached response
        return response;
      }
      // otherwise make a network request for the request
      return fetch(event.request);
    })
  );
});
