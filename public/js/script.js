const { isFunctionScopedDeclaration } = require("sucrase/dist/types/parser/tokenizer");

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Humberger
const hamberger = document.querySelector('#hamberger');

hamberger.addEventListener('click', function() {
    hamberger.classList.toggle('hamberger-active');
});