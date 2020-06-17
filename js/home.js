var keuzeEen = document.querySelector('#keuzeEen');
var keuzeTwee = document.querySelector('#keuzeTwee');
var keuzeDrie = document.querySelector('#keuzeDrie');

var keuzeEenItem = document.querySelector('#keuzeEenItem');
var keuzeTweeItem = document.querySelector('#keuzeTweeItem');
var keuzeDrieItem = document.querySelector('#keuzeDrieItem');

var buttonStart = document.getElementsByClassName("buttonStart");

function keuzeEenIn() {
  keuzeDrie.style.clipPath = "polygon(0 0, 35% 0, 15% 100%, 0% 100%)";
  keuzeTwee.style.clipPath = "polygon(85% 0, 100% 0, 100% 100%, 65% 100%)";
  keuzeEenItem.style.transform = "scale(1.1)";
  actiefVlak(1);
  geluidje();
}

keuzeEen.addEventListener('mouseenter', keuzeEenIn);

function keuzeTweeIn() {
  keuzeTwee.style.clipPath = "polygon(70% 0, 100% 0, 100% 100%, 50% 100%)";
  keuzeDrie.style.clipPath = "polygon(0 0, 30% 0, 10% 100%, 0% 100%)";
  keuzeTweeItem.style.transform = "scale(1.1)";
  actiefVlak(2);
  geluidje();
}
keuzeTwee.addEventListener('mouseenter', keuzeTweeIn);

function keuzeDrieIn() {
  keuzeDrie.style.clipPath = "polygon(0 0, 50% 0, 30% 100%, 0% 100%)";
  keuzeTwee.style.clipPath = "polygon(90% 0, 100% 0, 100% 100%, 70% 100%)";
  keuzeDrieItem.style.transform = "scale(1.1)";
  actiefVlak(3);
  geluidje();
}
keuzeDrie.addEventListener('mouseenter', keuzeDrieIn);

function keuzeLeave() {
  keuzeTwee.style.clipPath = "polygon(80% 0, 100% 0, 100% 100%, 60% 100%)";
  keuzeDrie.style.clipPath = "polygon(0 0, 40% 0, 20% 100%, 0% 100%)";
  keuzeEenItem.style.transform = "scale(1)";
  actiefVlak(0);
}

keuzeEen.addEventListener('mouseleave', keuzeLeave);
keuzeTwee.addEventListener('mouseleave', keuzeLeave);
keuzeDrie.addEventListener('mouseleave', keuzeLeave);

function geluidje() {
  var hoverAudio = new Audio('assets/ping.wav');
  	    hoverAudio.currentTime = 0;
  	    hoverAudio.play();
        hoverAudio.volume = 0.2;
}

for (var i = 0; i < buttonStart.length; i++) {
    buttonStart[i].addEventListener('mouseenter', geluidje, false);
}

var imgBewegenCon;
var imgBewegenVak;

var muis = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1.3;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}

function actiefVlak(welkVlakIsActief) {

  if (welkVlakIsActief == 0) {

  }else if (welkVlakIsActief == 1) {
    imgBewegenCon = keuzeEen;
    imgBewegenVak = keuzeEenItem;
    setDeBeweging();
  }else if (welkVlakIsActief == 2) {
    imgBewegenCon = keuzeTwee;
    imgBewegenVak = keuzeTweeItem;
    setDeBeweging();
  }else if (welkVlakIsActief == 3) {
    imgBewegenCon = keuzeDrie;
    imgBewegenVak = keuzeDrieItem;
    setDeBeweging();
  }
}


function setDeBeweging() {
  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  function onMouseEnterHandler(event) {
    update(event);
  };
  function onMouseLeaveHandler() {
    imgBewegenVak.style = "";
  };
  function onMouseMoveHandler(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  imgBewegenCon.onmouseenter = onMouseEnterHandler;
  imgBewegenCon.onmouseleave = onMouseLeaveHandler;
  imgBewegenCon.onmousemove = onMouseMoveHandler;

  muis.setOrigin(imgBewegenCon);


  function update(event) {
    muis.updatePosition(event);
    updateTransformStyle(
      (muis.y / imgBewegenVak.offsetHeight/2).toFixed(1),
      (muis.x / imgBewegenVak.offsetWidth/2).toFixed(1)
    );
  };

  function updateTransformStyle(x, y) {
    var style;
    style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    imgBewegenVak.style.transform = style;
  };
}

var controllerBtn = document.querySelector('#controllerBtn');
var consoleBtn = document.querySelector('#consoleBtn');
var gameBtn = document.querySelector('#gameBtn');

function indexPageLink() {
  window.location='controller.html';
}

controllerBtn.addEventListener('click', indexPageLink);
consoleBtn.addEventListener('click', indexPageLink);
gameBtn.addEventListener('click', indexPageLink);