let buttCl = document.querySelectorAll('.variation__btn');
let blockCh = document.querySelectorAll('.variation__prog-items');



//buttCl.addEventListener('click', function () {
//blockCh.style.display = 'flex'
//});
buttCl.forEach((element, i) => {
  let isActive = false;
  element.addEventListener('click', function () {
    if (!isActive) {
      element.classList.add('active');
      blockCh[i].classList.add('active');
      isActive = true;
    } else {
      element.classList.remove('active');
      blockCh[i].classList.remove('active');
      isActive = false;
    }
  });
});
console.log({buttCl, blockCh});
