/* Прописываются все инициализации и первичные параметры для скриптов */

import LazyLoad from 'vanilla-lazyload';

export const lazyImageController = new LazyLoad({
  elements_selector: '.lazy__item',
  class_loaded: "imgloader",

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    container.classList.remove('lazy--preloader');
  },
});

export const lazyBackgroundController = new LazyLoad({
  elements_selector: '.lazy-bg',
});
