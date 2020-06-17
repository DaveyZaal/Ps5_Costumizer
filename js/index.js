window.addEventListener('load', isLaden);
var loadingScreen = document.querySelector("#loadingScreen");

function isLaden() {
  loadingScreen.classList.add('loadingVerdwijnen');
}

var navBtn = document.getElementsByClassName("navBtn");

var menuIcon = document.querySelector("#menuIcon");
var menuContainer  = document.querySelector("#menuContainer");
var menuBg = document.querySelector("#menuBg");
var menuBgRight = document.querySelector("#menuBgRight");

var isMenuOpen = false;

function geluidje() {
  var hoverAudio = new Audio('assets/ping.wav');
  	    hoverAudio.currentTime = 0;
  	    hoverAudio.play();
        hoverAudio.volume = 0.2;
}

for (var i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('mouseenter', geluidje, false);
}

function menuOpenOfDicht() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen == true) {
    menuIcon.classList.add('menuOpen');
    menuContainer.classList.add('menuOpenen');
    menuBgRight.style.display = "flex";
  }else {
    menuIcon.classList.remove('menuOpen');
    menuContainer.classList.remove('menuOpenen');
    menuBgRight.style.display = "none";
  }
}

menuIcon.addEventListener('click', menuOpenOfDicht);
menuBgRight.addEventListener('click', menuOpenOfDicht);