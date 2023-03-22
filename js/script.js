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
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    810: {
      slidesPerView: 3,
    }
  }
});




new Swiper('.rewies__wrapp', {
  navigation: {
    nextEl: '.rewies__arrow-right',
    prevEl: '.rewies__arrow-left'
  },
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    810: {
      slidesPerView: 3,
    }
  }
});



const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};
if (isMobile.any()) {
  document.body.classList.add('_touch');


  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }
} else {
  document.body.classList.add('_pc');
}


let menuBurger = document.querySelector('.header__burger');
if (menuBurger) {
  let menuBody = document.querySelector('.nav__menu');
  menuBurger.addEventListener('click', function (e) {
    menuBurger.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}




$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.nav__menu').toggleClass('act');
  });
});
