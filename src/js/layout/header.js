const header = document.querySelector('.header__wrapper');

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    header.classList.add('header__wrapper--fixed');
  } else {
    header.classList.remove('header__wrapper--fixed');
  }
});

const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__menu-mobile");
const overlay = document.querySelector(".header__menu-mobile--overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileNavs.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
});