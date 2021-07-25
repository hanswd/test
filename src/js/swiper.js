import Swiper from 'swiper/bundle';

var swiper = new Swiper(".adidas-swiper", {
    slidesPerView: 1,
    spaceBetween: 70,
    pagination: true
  }, 
    "pagination", ({
        el: ".swiper-pagination",
        // dynamicBullets: true,
        clickable: true
}));