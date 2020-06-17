var cutomizePreview = document.querySelector('#cutomizePreview');
var cutomizeSection = document.querySelector('#cutomizeSection');

function cutomizePreviewIn() {
  cutomizePreview.style.clipPath = "polygon(0 0, 45% 0, 65% 100%, 0% 100%)";
  cutomizePreviewItem.style.transform = "scale(1.1)";
  cutomizePreviewItem.style.left = "10%";
  geluidje();
}

cutomizePreview.addEventListener('mouseenter', cutomizePreviewIn);

function cutomizeSectionIn() {
  cutomizePreview.style.clipPath = "polygon(0 0, 30% 0, 50% 100%, 0% 100%)";
  cutomizePreviewItem.style.transform = "scale(1)";
  cutomizePreviewItem.style.left = "4%";
}

cutomizeSection.addEventListener('mouseenter', cutomizeSectionIn);
cutomizePreview.addEventListener('mouseleave', cutomizeSectionIn);

var thumbsWrap = document.querySelector('#thumbsWrap');
var thumbsBody = document.querySelector('#thumbsBody');
var primWrap = document.querySelector('#primWrap');
var primBody = document.querySelector('#primBody');
var secndWrap = document.querySelector('#secndWrap');
var secndBody = document.querySelector('#secndBody');
var btnWrap = document.querySelector('#btnWrap');
var btndBody = document.querySelector('#btndBody');

var itemLaagPrim = document.querySelector('#itemLaagPrim');
var itemLaagSecnd = document.querySelector('#itemLaagSecnd');
var itemLaagJoy = document.querySelector('#itemLaagJoy');
var itemLaagBtn = document.querySelector('#itemLaagBtn');


thumbsWrap.addEventListener("click", function(){welkeSectie('thumb');}, false);
primWrap.addEventListener("click", function(){welkeSectie('prim');}, false);
secndWrap.addEventListener("click", function(){welkeSectie('secnd');}, false);
btnWrap.addEventListener("click", function(){welkeSectie('btn');}, false);



var isThumbActive = false;
var isPrimActive = false;
var isSecndActive = false;
var isBtnActive = false;

function welkeSectie(sectie) {
  if (sectie == 'thumb') {
    if (isThumbActive == true) {
      closeUpSec(thumbsWrap,thumbsBody);
      isThumbActive = false;
    }else{
      closeUpAll();
      openUpSec(thumbsWrap,thumbsBody);
      isThumbActive = true;
    }
  }
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
  if (sectie == 'btn') {
    if (isBtnActive == true) {
      closeUpSec(btnWrap, btnBody);
      isBtnActive = false;
    }else{
      closeUpAll();
      openUpSec(btnWrap, btnBody);
      isBtnActive = true;
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
  closeUpSec(thumbsWrap,thumbsBody);
  isThumbActive = false;
  closeUpSec(primWrap,primBody);
  isPrimActive = false;
  closeUpSec(secndWrap,secndBody);
  isSecndActive = false;
  closeUpSec(btnWrap, btnBody);
  isBtnActive = false;
}



var primItems = ["FBB80F", "FB4570","D43790", "44BBA4", "003791", "f1f1f2"];
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
  itemLaagPrim.style.fill = "#"+kleurCode;
  var vakje = document.getElementById(kleurCode);
  vakje.classList.add('isKleurVakActive');
}



var secndItems = ["FCB80F", "FC4570","E43790", "44CBA4", "003791", "f1f1f1"];
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
  itemLaagSecnd.style.fill = "#"+kleurCode;
  var vakje = document.getElementById(kleurCode);
  vakje.classList.add('isKleurVakActive');
}


var thumbItems = ["FCB81F", "FC4580","E43780", "43CBA4", "013791", "f3f1f1"];
var kleurSelecThumb = document.querySelector('#kleurSelecThumb');
var thumbKleuren = document.getElementsByClassName("thumbKleuren");

for( var i=0 ; i < thumbItems.length ; i++ ) {
	thumbsBody.innerHTML += '<div class="custKleuren thumbKleuren" style="background: #'+ thumbItems[i] +'" onClick="welkeKleurThumb(\'' + thumbItems[i] + '\')" id="'+ thumbItems[i] +'"></div>';
}

function welkeKleurThumb(kleurCode) {
    for (var i = 0; i < thumbKleuren.length; i++) {
        thumbKleuren[i].classList.remove('isKleurVakActive');
    }
    kleurSelecThumb.style.background = "#"+kleurCode;
    itemLaagJoy.style.fill = "#"+kleurCode;
    var vakje = document.getElementById(kleurCode);
    vakje.classList.add('isKleurVakActive');
}

var btnItems = ["FCB90F", "FC4470","E43791", "44CBB5", "023791", "f2f2f1"];
var kleurSelecBtn = document.querySelector('#kleurSelecBtn');
var btnKleuren = document.getElementsByClassName("btnKleuren");

for( var i=0 ; i < btnItems.length ; i++ ) {
	btnBody.innerHTML += '<div class="custKleuren btnKleuren" style="background: #'+ btnItems[i] +'" onClick="welkeKleurBtn(\'' + btnItems[i] + '\')" id="'+ btnItems[i] +'"></div>';
}

function welkeKleurBtn(kleurCode) {
    for (var i = 0; i < btnKleuren.length; i++) {
        btnKleuren[i].classList.remove('isKleurVakActive');
    }
    kleurSelecBtn.style.background = "#"+kleurCode;
    itemLaagBtn.style.fill = "#"+kleurCode;
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

// button declaraties
var terugBtn = document.querySelector('.terugBtn');
var volgendeBtn = document.querySelector('.volgendeBtn');

function paginaTerug() {
  window.history.back();
}

function volgendePagina() {
  window.location='console.html';
}

terugBtn.addEventListener('click', paginaTerug);
volgendeBtn.addEventListener('click', volgendePagina);
