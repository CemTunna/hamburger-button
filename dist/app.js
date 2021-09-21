"use strict";
var btn = document.querySelector('.menu-btn');
var isMenuOpen = false;
var clickHandler = function () {
    if (!isMenuOpen) {
        btn.classList.add('open');
        isMenuOpen = true;
    }
    else {
        btn.classList.remove('open');
        isMenuOpen = false;
    }
};
btn.addEventListener('click', clickHandler);
