let cliBtn = document.querySelectorAll('.stya__nav-btn');
let bloTabs = document.querySelectorAll('.block__tabs');



cliBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let btnCurr = item;
    let idTab = btnCurr.getAttribute("data-tab");
    let tabCurr = document.querySelector(idTab);

    if (!btnCurr.classList.contains('active')) {

      cliBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      bloTabs.forEach(function (item) {
        item.classList.remove('active');
      });

      btnCurr.classList.add('active');
      tabCurr.classList.add('active');

    }
  });
});
document.querySelector('.stya__nav-btn').click();
