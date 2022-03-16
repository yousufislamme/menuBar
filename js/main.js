// MenuBar
let menuBar = document.querySelector('.toggle')
menuBar.onclick = function () {
  menuBar.classList.toggle('active');
};
// let showMenuBar = document.querySelector('.menu_items_box')
// showMenuBar.onclick = function () {
//   showMenuBar.classList.menu_items_box('active');
// };

// Show Menu
(function () {

  var button = document.querySelector('.toggle');
  var box = document.querySelector('.menu_items_box');
  
  button.addEventListener('click', function () {

    box.classList.toggle('active');

  });
  
})();
