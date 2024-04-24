import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  Navigation,
  Autoplay,
  Mousewheel,
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