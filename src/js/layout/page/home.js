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
  modules: [Pagination, Autoplay],

  slidesPerView: 1,
  // spaceBetween: 20,
  // loop: true,

  speed: 2000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // navigation: {
  //   nextEl: "#slider .swiper-button-next",
  //   prevEl: "#slider .swiper-button-prev",
  // },

  pagination: {
    el: '#slider .swiper-pagination',
    clickable: true,
  },

});

new Swiper("#catalog .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 6,
  // spaceBetween: 160,
  loop: true,

  speed: 2500,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1400: {
      slidesPerView: 6,
      // spaceBetween: 200,
    }
  },

  navigation: {
    nextEl: "#catalog .swiper-button-next",
    prevEl: "#catalog .swiper-button-prev",
  },

});


new Swiper("#best-offers .swiper", {
  modules: [Pagination, Autoplay],

  slidesPerView: 1,
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
    800: {
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
      slidesPerView: 4,
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

new Swiper("#best-offers-second .swiper", {
  modules: [Pagination, Autoplay],

  slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,

  speed: 1900,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    800: {
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
      slidesPerView: 4,
      spaceBetween: 20
    }
  },

  // navigation: {
  //   nextEl: "#best-offers .swiper-button-next",
  //   prevEl: "#best-offers .swiper-button-prev",
  // },

  pagination: {
    el: '#best-offers-second .swiper-pagination',
    clickable: true,
    // type: 'custom',
  },
});

new Swiper("#brands .swiper", {
  modules: [Navigation, Autoplay],

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

  // pagination: {
  //   el: '#brands .swiper-pagination',
  //   clickable: true,
  // },

  navigation: {
    nextEl: "#brands .swiper-button-next",
    prevEl: "#brands .swiper-button-prev",
  },
});

if (document.querySelector('.accordion-container')) {
  new Accordion('.accordion-container');
};

const accordionsecond = document.querySelectorAll('.accordion-second');

for (const accordion of accordionsecond) {
  new Accordion(accordion);
}

if (document.querySelector('.accordion-container1')) {
  new Accordion('.accordion-container1');
};

if (document.querySelector('.accordion-container-about')) {
  new Accordion('.accordion-container-about');
};

// new Accordion('.accordion-container2');

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

// скрывает остальные пункты мобильного меню, кроме открытого
const elsP = document.querySelectorAll('.ac');

for (let i = 0, length = elsP.length; i < length; i++) {
  elsP[i].addEventListener("click", () => {
    if (document.querySelector('.accordion-container > .ac.is-active')) {
      const element = document.querySelector('.accordion-container > .is-active');
      const parent = element.parentNode;
      parent.classList.toggle("hidden-satin");
    }
    else {
      const parentall = document.querySelector('.accordion-container');
      parentall.classList.toggle("hidden-satin");
    };
  });
}

