const accentButton = document.getElementById('accent-button')

accentButton.onclick = function() {
  document.getElementById("myDropdown").classList.toggle("show")
}

const myModal = document.getElementById('myModal')
const myButtun = document.getElementById('cityMaps')
const closeIcon = document.getElementById('idClose')

myButtun.onclick = function() {
  myModal.style.display = 'block'
}

closeIcon.onclick = function() {
  alert('vfdsff')
  myModal.style.display = 'none'
}

const myModall = document.getElementById('myModall')
const myButtunn = document.getElementById('cityMapss')

myButtunn.onclick = function() {
  myModall.style.display = 'block'
}

const myModalll = document.getElementById('myModalll')
const myButtunnn = document.getElementById('cityMapsss')

myButtunnn.onclick = function() {
  myModalll.style.display = 'block'
}

window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  } 
    if (event.target == myModall) {
    myModall.style.display = "none";
  } 
    if (event.target == myModalll) {
    myModalll.style.display = "none";
  }
}
