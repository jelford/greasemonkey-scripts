// ==UserScript==
// @name        Load Onion Images
// @namespace   com.jameselford.scripts
// @description Surrogate script to properly load images from The Onion
// @match       http://*.theonion.com/*
// @include     http://*.theonion.com/*
// @version     2
// @grant       none
// @downloadURL https://github.com/jelford/greasemonkey-scripts/raw/master/onion-image-load.user.js
// ==/UserScript==

Array.forEach(Array.filter(document.getElementsByTagName('img'), function(img) { return img.classList.contains('lazy-load') }), function(img) {
    img.src = img.dataset.src;
});
