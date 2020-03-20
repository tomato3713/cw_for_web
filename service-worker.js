"use strict";

const CACHE_NAME = 'cache-v7';
const urlsToCache = [
    '/',
    '/cwTutor.html',
    '/history.html',
    '/assets/js/common.js',
    '/assets/js/runner.js',
    '/assets/js/tutor.js',
    '/assets/css/style.css',
    '/assets/img/icon/144.png',
    '/assets/img/icon/192.png',
    '/assets/img/icon/512.png',
    '/assets/img/circle.png',
    '/assets/img/cross.png',
    '/assets/img/frame.png',
    '/assets/img/question-mark.png',
    '/data/basic.txt',
    '/data/ja.txt',
    '/data/world.txt',
    '/data/rubber-stump.txt'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
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
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }

                // Clone request For browser
                let fetchRequest = event.request.clone();

                return fetch(fetchRequest)
                    .then((response) => {
                        // Check if Response is right
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone response For Cache
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
