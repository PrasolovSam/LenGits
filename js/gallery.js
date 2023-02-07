let gallBut = document.querySelectorAll ('.gallery__btn-one');
let gallTwo = document.querySelectorAll ('.gallery__btn-two');
let gallBlockOne = document.querySelectorAll('.wrapp__display-one');
let gallMain = document.querySelectorAll('.wrapp__display-main');




gallBut.forEach((element, i) => {
  let isActive = false;
  element.addEventListener('click', function () {
    if (!isActive) {
      element.classList.add('g__active');
      gallMain[i].classList.add('g__active');
      isActive = true;
    }  else {
      element.classList.remove ('g__active');
      gallMain[i].classList.remove ('g__active');
      isActive = false;
    }

  });
});



gallTwo.forEach((element, i) => {
  let isActive = false;
  element.addEventListener('click', function () {
    if (!isActive) {
      element.class.add('g__active');
      gallBlockOne[i].classList.add('g__active');
      isActive = true;
    } else {
      element.classList.remove ('g__active');
      gallBlockOne[i].classList.remove ('g__active');
      isActive = false
    }
  });
});
