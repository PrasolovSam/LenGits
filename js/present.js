let listCl = document.querySelectorAll('.pr-item');
let subListCl = document.querySelectorAll ('.sublist-pr');




listCl.forEach((element, i) => {
  let isActive = false;
  element.addEventListener('click', function
  () {
    if (!isActive) {
      element.classList.add('pr__active');
      subListCl[i].classList.add('pr__active');
      isActive = true;
    } else {
      element.classList.remove('pr__active');
      subListCl[i].classList.remove('pr__active');
      isActive = false;
    }
  });
});
console.log({listCl, subListCl});
