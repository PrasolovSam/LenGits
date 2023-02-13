let listCl = document.querySelectorAll('.gallery__btn');
let tabsItem = document.querySelectorAll('.wrapp__display');



listCl.forEach(function (item) {
  item.addEventListener("click", function () {
    let currBtn = item;
    let tabId = currBtn.getAttribute("data-tab");
    let corrTab = document.querySelector(tabId);

    if (!currBtn.classList.contains('active')) {




      listCl.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItem.forEach(function (item) {
        item.classList.remove('active');
      });


      currBtn.classList.add('active');
      corrTab.classList.add('active');
    }
  });
});
document.querySelector('.gallery__btn').click();
