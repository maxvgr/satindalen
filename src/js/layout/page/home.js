import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

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

  navigation: {
    nextEl: "#slider .swiper-button-next",
    prevEl: "#slider .swiper-button-prev",
  },

});


new Swiper("#best-offers .swiper", {
  modules: [Pagination, Autoplay],

  slidesPerView: 2,
  spaceBetween: 20,
  // loop: true,

  speed: 2000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  },

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

  slidesPerView: 3.05,
  spaceBetween: 20,
  // loop: true,

  speed: 2400,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    540: {
      slidesPerView: 3.05,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3.05,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3.05,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4.05,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 5.05,
      spaceBetween: 20
    }
  },

  pagination: {
    el: '#brands .swiper-pagination',
    clickable: true,
  },
});

new Accordion('.accordion-container');

new Accordion('.accordion-container1');

const footertitle01 = document.querySelector(".footer__col--01 .footer__title");
const footertitle02 = document.querySelector(".footer__col--02 .footer__title");
const footertitle03 = document.querySelector(".footer__col--03 .footer__title");
const footertitle04 = document.querySelector(".footer__col--04 .footer__title");
const footernav01 = document.querySelector(".footer__col--01");
const footernav02 = document.querySelector(".footer__col--02");
const footernav03 = document.querySelector(".footer__col--03");
const footernav04 = document.querySelector(".footer__col--04");

if (document.querySelector('.footer__col--01')) {
  footertitle01.addEventListener("click", () => {
    footernav01.classList.toggle("is-active");
  });
};

if (document.querySelector('.footer__col--02')) {
  footertitle02.addEventListener("click", () => {
    footernav02.classList.toggle("is-active");
  });
};

if (document.querySelector('.footer__col--03')) {
  footertitle03.addEventListener("click", () => {
    footernav03.classList.toggle("is-active");
  });
};

if (document.querySelector('.footer__col--04')) {
  footertitle04.addEventListener("click", () => {
    footernav04.classList.toggle("is-active");
  });
};