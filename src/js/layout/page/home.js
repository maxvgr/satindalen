import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Navigation,
  Autoplay,
  Mousewheel,
  Pagination,
} from "swiper/modules";

new Swiper("#slider .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  // spaceBetween: 20,
  // loop: true,

  speed: 2000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // breakpoints: {
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   1200: {
  //     slidesPerView: 3.5,
  //     spaceBetween: 20
  //   },
  //   1400: {
  //     slidesPerView: 4.8,
  //     spaceBetween: 20
  //   }
  // },

  navigation: {
    nextEl: "#slider .swiper-button-next",
    prevEl: "#slider .swiper-button-prev",
  },

});


new Swiper("#best-offers .swiper", {
  modules: [Pagination, Autoplay],

  slidesPerView: 5,
  spaceBetween: 20,
  // loop: true,

  speed: 2000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // breakpoints: {
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   1200: {
  //     slidesPerView: 3.5,
  //     spaceBetween: 20
  //   },
  //   1400: {
  //     slidesPerView: 4.8,
  //     spaceBetween: 20
  //   }
  // },

  // navigation: {
  //   nextEl: "#best-offers .swiper-button-next",
  //   prevEl: "#best-offers .swiper-button-prev",
  // },

  pagination: {
    el: '#best-offers .swiper-pagination',
    clickable: true,
    // type: 'custom',
  },
});

new Swiper("#brands .swiper", {
  modules: [Pagination, Autoplay],

  slidesPerView: 5.05,
  spaceBetween: 20,
  // loop: true,

  speed: 2400,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // breakpoints: {
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   1200: {
  //     slidesPerView: 3.5,
  //     spaceBetween: 20
  //   },
  //   1400: {
  //     slidesPerView: 4.8,
  //     spaceBetween: 20
  //   }
  // },

  pagination: {
    el: '#brands .swiper-pagination',
    clickable: true,
  },
});