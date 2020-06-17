var cutomizePreview = document.querySelector('#cutomizePreview');
var cutomizeSection = document.querySelector('#cutomizeSection');

function cutomizePreviewIn() {
  cutomizePreview.style.clipPath = "polygon(0 0, 45% 0, 65% 100%, 0% 100%)";
  cutomizePreviewItem.style.transform = "scale(1.1)";
  cutomizePreviewItem.style.left = "10%";
}

cutomizePreview.addEventListener('mouseenter', cutomizePreviewIn);

function cutomizeSectionIn() {
  cutomizePreview.style.clipPath = "polygon(0 0, 30% 0, 50% 100%, 0% 100%)";
  cutomizePreviewItem.style.transform = "scale(1)";
  cutomizePreviewItem.style.left = "4%";
}

cutomizeSection.addEventListener('mouseenter', cutomizeSectionIn);
cutomizePreview.addEventListener('mouseleave', cutomizeSectionIn);


var primWrap = document.querySelector('#primWrap');
var primBody = document.querySelector('#primBody');
var secndWrap = document.querySelector('#secndWrap');
var secndBody = document.querySelector('#secndBody');

primWrap.addEventListener("click", function(){welkeSectie('prim');}, false);
secndWrap.addEventListener("click", function(){welkeSectie('secnd');}, false);

var isPrimActive = false;
var isSecndActive = false;

function welkeSectie(sectie) {
  if (sectie == 'prim') {
    if (isPrimActive == true) {
      closeUpSec(primWrap,primBody);
      isPrimActive = false;
    }else {
      closeUpAll();
      openUpSec(primWrap,primBody);
      isPrimActive = true;
    }
  }
  if (sectie == 'secnd') {
    if (isSecndActive == true) {
      closeUpSec(secndWrap,secndBody);
      isSecndActive = false;
    }else {
      closeUpAll();
      openUpSec(secndWrap,secndBody);
      isSecndActive = true;
    }
  }
}

function closeUpSec(head, body) {
  head.classList.remove('HeadActive');
  body.style.height = "0";
}

function openUpSec(head, body) {
  head.classList.add('HeadActive');
  body.style.height = "80px";
}

function closeUpAll() {
  closeUpSec(primWrap,primBody);
  isPrimActive = false;
  closeUpSec(secndWrap,secndBody);
  isSecndActive = false;
}



var primItems = ["FBB80F", "FB4570","D43790", "E7E5DF",  "44BBA4", "003791"];
var kleurSelecPrim = document.querySelector('#kleurSelecPrim');
var primKleuren = document.getElementsByClassName("primKleuren");

for( var i=0 ; i < primItems.length ; i++ ) {
	primBody.innerHTML += '<div class="custKleuren primKleuren" style="background: #'+ primItems[i] +'" onClick="welkeKleurPrim(\'' + primItems[i] + '\')" id="'+ primItems[i] +'"></div>';
}

function welkeKleurPrim(kleurCode) {
  for (var i = 0; i < primKleuren.length; i++) {
      primKleuren[i].classList.remove('isKleurVakActive');
  }
  kleurSelecPrim.style.background = "#"+kleurCode;
  var vakje = document.getElementById(kleurCode);
  vakje.classList.add('isKleurVakActive');
}



var secndItems = ["FCB80F", "FC4570","D53790", "E8E5DF",  "44CBA4", "013791"];
var kleurSelecSecnd = document.querySelector('#kleurSelecSecnd');
var secndKleuren = document.getElementsByClassName("secndKleuren");

for( var i=0 ; i < secndItems.length ; i++ ) {
	secndBody.innerHTML += '<div class="custKleuren secndKleuren" style="background: #'+ secndItems[i] +'" onClick="welkeKleurSecnd(\'' + secndItems[i] + '\')" id="'+ secndItems[i] +'"></div>';
}

function welkeKleurSecnd(kleurCode) {
  for (var i = 0; i < secndKleuren.length; i++) {
      secndKleuren[i].classList.remove('isKleurVakActive');
  }
  kleurSelecSecnd.style.background = "#"+kleurCode;
  var vakje = document.getElementById(kleurCode);
  vakje.classList.add('isKleurVakActive');
}

var imgBewegenCon = cutomizePreview;
var imgBewegenVak = cutomizePreviewItem;

var muis = {
  _x: 0,
  _y: 0,
  x: -500,
  y: -500,
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

function setDeBeweging() {
  var counter = 0;
  var updateRate = 1;
  var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  function onMouseEnterHandler(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
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

setDeBeweging();
