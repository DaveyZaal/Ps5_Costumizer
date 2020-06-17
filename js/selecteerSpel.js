var terugBtn = document.querySelector('.terugBtn');
var volgendeBtn = document.querySelector('.volgendeBtn');

function paginaTerug() {
  window.history.back();
}

function volgendePagina() {
  window.location='confirmatie.html';
}

terugBtn.addEventListener('click', paginaTerug);
volgendeBtn.addEventListener('click', volgendePagina);

var fotos = ['game1.png','game2.png', 'game3.png', 'game4.png'];
var linksFotoImg = document.querySelector('#gameLinks');
var fotoImg = document.querySelector('#game');
var rechtsFotoImg = document.querySelector('#gameRechts');
var huidigNrSpan = document.querySelector('#huidigeFotoNr');
var thumbnailsUl = document.querySelector('#thumbnails');
var laatsteNrSpan = document.querySelector('#laatsteFotoNr');
var vooruitButton = document.querySelector('#vooruit');
var achteruitButton = document.querySelector('#terug');

var huidigFotoNr = 0 ;
var huidigLinks = 3 ;
var huidigRechts = 1 ;

var gameTitle = document.querySelector('#gameTitle');
var gameStudio = document.querySelector('#gameStudio');
var gameTitle2 = document.querySelector('#gameTitle2');
var gameStudio2 = document.querySelector('#gameStudio2');
var meerInfo = document.querySelector('#meerInfo');
var gameScreen = document.querySelector('#game_screen');
var gameOmschrijving = document.querySelector('#gameOmschrijving');

toonHuidigeFoto();
gameInfoUpdate();

function toonHuidigeFoto() {
    fotoImg.src = 'assets/games/' + fotos[huidigFotoNr];
    linksFotoImg.src = 'assets/games/' + fotos[huidigLinks];
    rechtsFotoImg.src = 'assets/games/' + fotos[huidigRechts];
}

function bladerVooruit() {
    huidigFotoNr = huidigFotoNr + 1 ;
    huidigLinks = huidigLinks + 1;
    huidigRechts = huidigRechts + 1;
	if ( huidigFotoNr > fotos.length -1 ) { // voorbij het einde
        huidigFotoNr = 0 ;
    }
    if ( huidigLinks > fotos.length -1 ) { // voorbij het einde
        huidigLinks = 0 ;
    }
    if ( huidigRechts > fotos.length -1 ) { // voorbij het einde
        huidigRechts = 0 ;
    }
    toonHuidigeFoto();
    gameInfoUpdate();
}

function bladerAchteruit() {
    huidigFotoNr = huidigFotoNr - 1 ;
    huidigLinks = huidigLinks - 1;
    huidigRechts = huidigRechts - 1;
	if ( huidigFotoNr < 0 ) {
		huidigFotoNr = 3 ;
    }
    if ( huidigLinks < 0 ) {
		huidigLinks = 3 ;
    }
    if ( huidigRechts < 0 ) {
		huidigFotoNr = 3 ;
	}
    toonHuidigeFoto();
    gameInfoUpdate();
}

function gameInfoUpdate() {
    if (huidigFotoNr == 0) {
        gameTitle.textContent = 'The Last Of Us Part 2';
        gameStudio.textContent = 'Naughty Dog';
        gameTitle2.textContent = 'The Last Of Us Part 2';
        gameStudio2.textContent = 'Naughty Dog';
        gameScreen.src = 'assets/game_screens/thelastofus.jpg';
        gameOmschrijving.textContent = 'The Last of Us Part II - Playstation 5 (PS5): Vijf jaar na een gevaarlijke reis door de post-pandemische Verenigde Staten wonen Ellie en Joel in Jackson, Wyoming. In een bloeiende gemeenschap van overlevenden leiden ze een leven vol vrede en stabiliteit, ondanks de constante bedreiging van geïnfecteerde mensen en andere, meer wanhopige overlevenden.';
    }
    if (huidigFotoNr == 1) {
        gameTitle.textContent = 'Cyperpunk 2077';
        gameStudio.textContent = 'CD Projekt RED';
        gameTitle2.textContent = 'Cyperpunk 2077';
        gameStudio2.textContent = 'CD Projekt RED';
        gameScreen.src = 'assets/game_screens/cyberpunk.jpg';
        gameOmschrijving.textContent = 'Cyberpunk 2077 is action-adventure game die zich afspeelt in een open wereld genaamd Night City, een megalopolis geobsedeerd door kracht, glamour en lichaamsmodificaties. Jij neemt de rol aan van V, een huurling op zoek naar het zeldzame (en tevens enige) implantaat dat de sleutel is tot onsterfelijkheid. Je kan je eigen personages cyberware aanpassen, de skillset en speelstijl kiezen en een uitgebreide stad verkennen waar je keuzes het verhaal en de wereld rondom je beinvloeden. Kenmerken: Ga als outlaw op pad: Word een cyberpunk; een huurling voorzien van cybernetische uitbreidingen en maak het tot de top van de straten van Night City. Leef in de stad van de toekomst: Betreed de open wereld van Night City, de plaats waar nieuwe standaarden worden gezet op gebied van graphics, complexiteit en diepgang. Steel het implantaat dat het eeuwige leven verleent: Neem de meest risicovolle job van je leven aan en ga het prototype-implantaat achterna dat de sleutel is tot onsterfelijkheid.';
    }
    if (huidigFotoNr == 2) {
        gameTitle.textContent = 'Far Cry 5';
        gameStudio.textContent = 'Ubisoft';
        gameTitle2.textContent = 'Far Cry 5';
        gameStudio2.textContent = 'Ubisoft';
        gameScreen.src = 'assets/game_screens/farcry5.jpg';
        gameOmschrijving.textContent = 'Welkom in Hope County, Montana. Dit idyllische plekje is de thuis van een gemeenschap van vrijheidslievende mensen… en een fanatieke Doomsday-sekte, beter bekend als The Project at Eden’s Gate. Deze sekte wordt geleid door de charismatische profeet Joseph Seed en zijn toegewijde broers en zus, The Heralds. Eden’s Gate is in alle rust binnengedrongen in het dagelijkse leven van deze eens zo rustige plaats. Jouw aankomst in Hope County spoort de sekte aan om met veel geweld de controle over de regio te nemen. Nu is het aan jou om de strijd aan te gaan de zin tot verzet aan te wakkeren om de inwoners te bevrijden uit de greep van Eden’s Gate.';
    }
    if (huidigFotoNr == 3) {
        gameTitle.textContent = 'Uncharted 4';
        gameStudio.textContent = 'Naughty Dog';
        gameTitle2.textContent = 'Uncharted 4';
        gameStudio2.textContent = 'Naughty Dog';
        gameScreen.src = 'assets/game_screens/uncharted4.jpg';
        gameOmschrijving.textContent = 'Drie jaar na de gebeurtenissen van Uncharted 3, Drakes Deception heeft Nathan Drake besloten zijn dagen als schattenjager achter zich te laten. Maar al snel klopt het lot op de deur. Sam, de broer van Nate, is in levensgevaar en heeft dringend hulp nodig. Hij biedt Drake een avontuur waartegen hij geen nee kan zeggen. Sam en Drake gaan op zoek naar de verloren schat van kapitein Henry Avery. Ze zoeken naar Libertalia, het piratenparadijs in de bossen van Madagaskar.';
    }
}

vooruitButton.addEventListener('click' , bladerVooruit );
achteruitButton.addEventListener('click' , bladerAchteruit );

var modal = document.getElementById("myModal");
var btn = document.getElementById("infoModal");
var span = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
