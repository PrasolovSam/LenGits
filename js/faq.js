let btnCl = document.querySelectorAll('.faq__btn');
let blChan = document.querySelectorAll('.faq__item');





btnCl.forEach((element, i) => {
  let itActive = false;
  element.addEventListener('click', function() {
    if (!itActive) {
      element.classList.add('faq__active');
      blChan[i].classList.add('faq__active');
      itActive = true;
    } else {
      element.classList.remove('faq__active');
      blChan[i].classList.remove('faq__active');
      itActive = false;
    }
  });
});
