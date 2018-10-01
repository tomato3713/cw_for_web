'use strict';

const CACHE_NAME = 'cache-v1';
const urlsToCache = [
	'./',
	'./img/icons/144.png'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Opened cache');

			// Add resources to caches
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('activate', (event) => {
	let cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					// Delete old cache
					if(cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then(
			(response) => {
				if(response) {
					return response;
				}

				// Clone request
				let fetchRequest = event.request.clone();

				return fetch(fetchRequest)
					.then((response) => {
						if(!response || response.status !== 200 || response.type !== 'basic') {
							return response;
						}

						// Clone response
						let responseToCache = response.clone();

						caches.open(CACHE_NAME)
							.then((cache) => {
								cache.put(event.request, responseToCache);
							});

						return response;
					});
			})
	);
});
