// const { isFunctionScopedDeclaration } = require("sucrase/dist/types/parser/tokenizer");

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Humberger
const hamberger = document.querySelector("#hamberger");
const navMenu = document.querySelector("#nav-menu");

hamberger.addEventListener("click", function () {
  hamberger.classList.toggle("hamberger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamberger && e.target != navMenu) {
    hamberger.classList.remove("hamberger-active");
    navMenu.classList.add("hidden");
  }
});
