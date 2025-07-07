const swiper = new Swiper('.swcon', {
  slidesPerView: 1,
  spaceBetween: 22,
  loop: true,
  centeredSlides: false,
  grabCursor: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.slider__arrow-right',
    prevEl: '.slider__arrow-left',
  },
  pagination: {
    el: '.slider__pug',
    clickable: true,
  },

  breakpoints: {

    800: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});
window.addEventListener('resize', () => {
  swiper.update();
});