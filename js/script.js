const swiper = new Swiper('.reviews-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.reviews__swiper-pagination',
      clickable: true,
    },
  });