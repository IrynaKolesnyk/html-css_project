const accentButton = document.getElementById('accent-button');
const dropdownMenu = document.getElementById('myDropdown');
accentButton.onclick = function () {
  dropdownMenu.classList.toggle('show');
};

const myModal = document.getElementById('myModal');
const myButtun = document.getElementById('cityMaps');
const closeChicago = document.getElementById('closeChicago');
myButtun.onclick = function () {
  myModal.style.display = 'block';
};

closeChicago.onclick = function (event) {
  event.stopPropagation();
  myModal.style.display = 'none';
  dropdownMenu.classList.toggle('show');
};

const myModall = document.getElementById('myModall');
const myButtunn = document.getElementById('cityMapss');
const closeLosAngeles = document.getElementById('closeLosAngeles');
myButtunn.onclick = function () {
  myModall.style.display = 'block';
};

closeLosAngeles.onclick = function (event) {
  event.stopPropagation();
  myModal.style.display = 'none';
  dropdownMenu.classList.toggle('show');
};

const myModalll = document.getElementById('myModalll');
const myButtunnn = document.getElementById('cityMapsss');
const closeNewYork = document.getElementById('closeNewYork');
myButtunnn.onclick = function () {
  myModalll.style.display = 'block';
};

closeNewYork.onclick = function (event) {
  event.stopPropagation();
  myModal.style.display = 'none';
  dropdownMenu.classList.toggle('show');
};

window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = 'none';
    dropdownMenu.classList.toggle('show');
  }
  if (event.target == myModall) {
    myModall.style.display = 'none';
    dropdownMenu.classList.toggle('show');
  }
  if (event.target == myModalll) {
    myModalll.style.display = 'none';
    dropdownMenu.classList.toggle('show');
  }
};
