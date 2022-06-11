window.addEventListener("load", () => {
  new Swiper(".image-slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 50,
    slidesPerView: 5,
    breakpoints: {
      // when window is <= 575px
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window is <= 767px
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window is <= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window is <= 1199px
      1199: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
