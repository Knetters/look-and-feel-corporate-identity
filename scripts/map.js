// Variables
var parkeren = "#524dd0"
var recreatie = "#00998f"
var ladenEnLossen = "#00ffec"
var deelmobiliteit = "#84389e"

// Creëer de kaart
var map = L.map('map').setView([52.0831609,5.1234278], 20);

var osm = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
}).addTo(map);

// Zet de markers op de kaart
var smartLocation1 = L.circle([52.083010, 5.123620], { color: parkeren, fillOpacity: 0.5, radius: 10 }).addTo(map).on('click', function() {
  loadInfoTab(1)
});
var smartLocation2 = L.circle([52.083210, 5.123530], { color: ladenEnLossen, fillOpacity: 0.5, radius: 10 }).addTo(map).on('click', function() {
  loadInfoTab(2)
});
var smartLocation3 = L.circle([51.914760, 4.398240], { color: ladenEnLossen, fillOpacity: 0.5, radius: 10 }).addTo(map).on('click', function() {
  loadInfoTab(3)
});
var smartLocation4 = L.circle([51.915563, 4.397329], { color: recreatie, fillOpacity: 0.5, radius: 10 }).addTo(map).on('click', function() {
  loadInfoTab(4)
});
var smartLocation5 = L.circle([52.360364, 4.862475], { color: deelmobiliteit, fillOpacity: 0.5, radius: 10 }).addTo(map).on('click', function() {
  loadInfoTab(5)
});
var smartLocation6 = L.circle([52.365539, 4.864442], { color: ladenEnLossen, fillOpacity: 0.5, radius: 10 }).addTo(map).on('click', function() {
  loadInfoTab(6)
});
var smartLocation7 = L.circle([51.920899, 4.465702], { color: deelmobiliteit, fillOpacity: 0.5, radius: 10 }).addTo(map).on('click', function() {
  loadInfoTab(7)
});
var smartLocation8 = L.circle([51.916558, 4.478072], { color: deelmobiliteit, fillOpacity: 0.5, radius: 10 }).addTo(map).on('click', function() {
  loadInfoTab(8)
});

// Locatie functie
function onLocationFound(e) {
  var radius = e.accuracy / 2;
  var location = e.latlng
  L.marker(location).addTo(map)
}

function onLocationError(e) {
  alert(e.message);
}

function getLocationLeaflet() {
  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locate({ setView: true, maxZoom: 16 });
  closeSlide();
}

// Smart locatie knoppen
function locateSmartzone1() {
  map.panTo(new L.LatLng(52.083010, 5.123620));
  closeSlide();
}

function locateSmartzone2() {
  map.panTo(new L.LatLng(52.083210, 5.123530));
  closeSlide();
}

function locateSmartzone3() {
  map.panTo(new L.LatLng(51.914760, 4.398240));
  closeSlide();
}

function locateSmartzone4() {
  map.panTo(new L.LatLng(51.915563, 4.397329));
  closeSlide();
}

function locateSmartzone5() {
  map.panTo(new L.LatLng(52.360364, 4.862475));
  closeSlide();
}

function locateSmartzone6() {
  map.panTo(new L.LatLng(52.365539, 4.864442));
  closeSlide();
}

function locateSmartzone7() {
  map.panTo(new L.LatLng(51.920899, 4.465702));
  closeSlide();
}

function locateSmartzone8() {
  map.panTo(new L.LatLng(51.916558, 4.478072));
  closeSlide();
}

const desktop_tabEl = document.querySelector(".desktop-info-tab");
const desktop_boxEl = document.querySelector(".desktop-info-box");

function goBack() {
  var insertedContent = document.querySelector(".insertedContent");
    if(insertedContent) {
      insertedContent.parentNode.removeChild(insertedContent);
    }
}

//Haalt de informatie voor de info tab uit het json bestand en laat het zien in de index

function loadInfoTab(Id) {
  var insertedContent = document.querySelector(".insertedContent");
  if(insertedContent) {
    insertedContent.parentNode.removeChild(insertedContent);
  }
  
  fetch("https://knetters.github.io/coding-the-curbs/scripts/smartzones.json")
  .then(res => res.json())
    .then(data => {
      data.forEach(smartzone => {
        console.log(smartzone);
        if (smartzone.smartzoneId == Id) {
          
          desktop_tabEl.insertAdjacentHTML("afterend", `
          <div class="desktop-info-box insertedContent">
            <h2>${smartzone.name} <span class="status-marker ${smartzone.status}"><i class="fa fa-circle"></i></span></h2>
            <p class="description">${smartzone.description}</p>
          <div class="button-row">
            <a id="selectItem" class="route-link" href="https://www.google.com/maps/dir//${smartzone.location}" target="_blank"><button class="route-btn">Route</button></a>
          </div>
            <div class="content-row">
              <div class="info-item item1">
                <p class="info-icon"><img class="icon-sizing" src="./assets/iconeninfo-02.png" alt="Groote van de plek"></p>
                <p class="info-content">${smartzone.size}</p>
              </div>
            <div class="info-item item2">
              <p class="info-icon"><img class="icon-sizing" src="./assets/iconeninfo-01.png" alt="Percentage gebruikt"></p>
              <p class="info-content">${smartzone.utilization}</p>
            </div>
            <div class="info-item item3">
              <p class="info-icon"><img class="icon-sizing" src="./assets/iconeninfo-03.png" alt="Tijden actief"></p>
              <p class="info-content">${smartzone.time}</p>
            </div>
          </div>
            <p class="info-title-top better-margin">Locatie</p>
            <p class="desk-box">${smartzone.location}<br>${smartzone.town}. Nederland</p>
            <p class="info-title-top">Functie</p>
            <p class="desk-box">${smartzone.function}</p>
            <div class="button-cointainer-height">
              <div class="bottom-button-row">
                <button name="Terug knop" class="back-btn" onClick="goBack()">Terug</button>
                <button name="Reserveren" class="reserve-button" onClick="toggleReserveMenu()">Reserveren</button>
              </div>
            </div>
          </div>
        `);
      };
    });
  });
}

const desktop_listEl = document.querySelector(".smartzones-container");
const desktop_listElFav = document.querySelector(".smartzones-container-fav");
const mobile_listEl = document.getElementById("flex-scroll");
const result_listEl = document.querySelector(".smartzones-container-result");

function returnSearch() {
  let smartzones = [];

  fetch("https://knetters.github.io/coding-the-curbs/scripts/smartzones.json")
    .then(res => res.json())
    .then(data => {
      smartzones = data;

      let searchInput = document.getElementById("userInput").value;

      if (searchInput != "") {
        let matchingSmartzones = smartzones.filter(smartzone => smartzone.name === searchInput);

        matchingSmartzones.forEach(smartzone => {
          result_listEl.innerHTML = '<p class="small-text">ZOEKRESULTAAT</p>';
          
          result_listEl.insertAdjacentHTML("beforeend", `
            <button onclick="locateSmartzone${smartzone.smartzoneId}();loadInfoTab(${smartzone.smartzoneId});" class="smartzone-box" id="smart-${smartzone.smartzoneId}">
              <div class="smartzone-info ">
                <h4>${smartzone.name} <span class="status-marker ${smartzone.status}"><i class="fa fa-circle"></i></span></h4>
                <p class="smart-city2"><i class="fa fa-map-marker" aria-hidden="true"></i> ${smartzone.location}, ${smartzone.town}</p>
              </div>
            </button>
          `);
          desktop_listEl.classList.toggle("active")
          result_listEl.classList.toggle("active")
        });
      }
      else {
        console.log("EVENT: User input = none")
      }
  });
}

// Info uit json
fetch("https://knetters.github.io/coding-the-curbs/scripts/smartzones.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(smartzone => {
      desktop_listEl.insertAdjacentHTML("beforeend", `
            <button onclick="locateSmartzone${smartzone.smartzoneId}();loadInfoTab(${smartzone.smartzoneId});" class="smartzone-box" id="smart-${smartzone.smartzoneId}">
              <div class="smartzone-info ">
                <h4>${smartzone.name} <span class="status-marker ${smartzone.status}"><i class="fa fa-circle"></i></span></h4>
                <p class="smart-city2"><i class="fa fa-map-marker" aria-hidden="true"></i> ${smartzone.location}, ${smartzone.town}</p>
              </div>
            </button>
            `);

      //Inladen van de data op de mobiele versie
      mobile_listEl.insertAdjacentHTML("beforeend", `
            <div class="box" id="smart-${smartzone.smartzoneId}">
              <h4>${smartzone.name}</h4>
              <p class="smart-city2"><i class="fa fa-map-marker" aria-hidden="true"></i> ${smartzone.location}, ${smartzone.town}</p>
              <button name="Meer info knop" onclick="slideActive()" class="info-button js-more-info"> Informatie</button>
            </div>
            `);
      //pop-up
      //`smartLocation${smartzone.smartzoneId}.bindPopup('<p><span class="smart-funtcion">${smartzone.function}</span></p><h2 class="smart-title-popup">${smartzone.name}</h2><p class="smart-city"><i class="fa fa-map-marker" aria-hidden="true"></i> ${smartzone.location}, ${smartzone.town}</p><div class="gray-back"><div class="content-row"><div class="info-item"><p class="info-title-popup">Gebruikt</p><p class="info-content">${smartzone.utilization}</p></div><div class="info-item"><p class="info-title-popup">Grootte</p><p class="info-content">${smartzone.size}</p></div></div></div><div class="info-text-row"></div>');`
    });
  });

  function focusThis() {
    console.log("Button working")
    document.getElementById("selectItem").focus();  
  }
  