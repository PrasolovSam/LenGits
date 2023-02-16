


/*let clButt = document.querySelectorAll('.map-btn');
let tabItem = document.querySelectorAll('.sity');



clButt.forEach(function (item) {
  item.addEventListener("click", function () {
    let btnCurron = item;
    let idTabs = btnCurron.getAttribute("data-tab");
    let currTabs  = document.querySelector(idTabs);

    if (!btnCurron.classList.contains('active__sity')) {





      clButt.forEach(function (item) {
        item.classList.remove('active__sity');
      });
      tabItem.forEach(function (item) {
        item.classList.remove('active__sity');
      });


      btnCurron.classList.add('active__sity');
      currTabs.classList.add('active__sity');
    }
  });
});*/




let buttCl = document.querySelectorAll('.map-btn');
let blockCh = document.querySelectorAll('.sity');





buttCl.forEach((element, i) => {
  let isActive = false;
  element.addEventListener('click', function () {
    if (!isActive) {
      element.classList.add('active__sity');
      blockCh[i].classList.add('active__sity');
      isActive = true;
    } else {
      element.classList.remove('active__sity');
      blockCh[i].classList.remove('active__sity');
      isActive = false;
    }
  });
});
console.log({buttCl, blockCh});
