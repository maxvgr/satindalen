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


document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.catalog-menu');
  const items = document.querySelectorAll('.catalog-menu__item');

  for (const item of items) {
    item.addEventListener('mouseover', (event) => {
      const active = menu.querySelector('.active');
      if (active) active.classList.remove('active');
      item.classList.add('active');

      const ul = item.querySelector('.catalog-menu__nav');
      const itemsli = item.querySelectorAll('.catalog-menu__nav > li');
      for (const item of itemsli) {
        item.addEventListener('mouseover', (event) => {
          const active = ul.querySelector('.active');
          if (active) active.classList.remove('active');
          item.classList.add('active');
        });
      }
    });
  }
});





// document.addEventListener('DOMContentLoaded', () => {
//   const ul = document.querySelector('.catalog-menu__nav');
//   const itemsli = document.querySelectorAll('.catalog-menu__nav > li');

//   for (const item of itemsli) {
//     item.addEventListener('mouseover', (event) => {
//       const active = ul.querySelector('.active');
//       if (active) active.classList.remove('active');
//       item.classList.add('active');
//     });
//   }
// });