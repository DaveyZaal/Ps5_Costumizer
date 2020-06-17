var terugBtn = document.querySelector('.terugBtn');
var volgendeBtn = document.querySelector('.volgendeBtn');

function paginaTerug() {
  window.history.back();
}

function volgendePagina() {
  window.location='geslaagd.html';
}

terugBtn.addEventListener('click', paginaTerug);
volgendeBtn.addEventListener('click', volgendePagina);
