const header = document.querySelector('.header__wrapper');

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    header.classList.add('header__wrapper--fixed');
  } else {
    header.classList.remove('header__wrapper--fixed');
  }
});