//let leftBtn = document.querySelector("#left");
//let rightBtn = document.querySelector("#right");
//let items = document.querySelector("#items");
//let currentRight = 0;

//rightBtn.addEventListener("click", e => {
//  e.preventDefault();
//  currentRight += 350;
//  items.style.right = `${currentRight}px`;
//});
//leftBtn.addEventListener("click", e => {
//  e.preventDefault();
//});



new Swiper('.partner__slider-content', {
  navigation: {
    nextEl: '.partner__arrow-right',
    prevEl: '.partner__arrow-left'
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
});




new Swiper('.rewies__wrapp', {
  navigation: {
    nextEl: '.rewies__arrow-right',
    prevEl: '.rewies__arrow-left'
  },
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
});
