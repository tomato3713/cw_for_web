"use strict";

// If support service worker, register service-worker.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/js/service-worker.js')
        .then((registration) => {
            console.log('Service Worker Registered.');
        })
        .catch((err) => {
            console.log('Service Worker Registration failed: ', err);
        });
}

