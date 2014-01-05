// ==UserScript==
// @name        Load Onion Images
// @namespace   com.jameselford.scripts
// @description Surrogate script to properly load images from The Onion
// @match       http://*.theonion.com/*
// @include     http://*.theonion.com/*
// @version     1
// @grant       none
// ==/UserScript==

Array.forEach(Array.filter(document.getElementsByTagName('img'), function(img) { return img.classList.contains('lazy-load') }), function(img) {
    img.src = img.dataset.src;
});
