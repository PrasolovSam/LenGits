let gallBut = document.querySelectorAll ('.gallery__btn');
let gallBlock = document.querySelectorAll('.wrapp__display');
let gallMain = document.querySelectorAll('.wrapp__display-main');




gallBut.forEach((element, i) => {
  let isActive = false;
  element.addEventListener('click', function () {
    if (!isActive) {
      element.classList.add('g__active');
      gallBlock[i].classList.add('g__active');
      isActive = true;
    } else {
      element.classList.remove ('g__active');
      gallBlock[i].classList.remove ('g__active');
      isActive = false;
    }
  });
});
