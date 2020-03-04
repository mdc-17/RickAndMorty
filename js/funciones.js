// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}

//Crea la estructura para cada personaje
function creaPersonaje(personaje) {
  let articlePersonajes = document.querySelector(".article-personajes");
  let divPersonaje = document.createElement("div");
  divPersonaje.innerHTML = `
  <div data="card header">
  <div class="card-image">
    <img src="${personaje.image}" alt="${personaje.name}">
  </div>
    <div class="card-nombre">
      <h2 class="nombre">${personaje.name}</h2>
    </div>
  </div>
    <div class="card-status">
      <h4>STATUS</h4>
      <p>${personaje.name}</p>
    </div>
    <div class="card-species">
      <h4>SPECIE</h4>
      <p>${personaje.species}</p>
    </div>
    <div class="card-gender">
      <h4>GENDER</h4>
      <p>${personaje.gender}</p>
    </div>
    <div class="card-location">
      <h4>LOCATION</h4>
      <p>${personaje.location.name}</p>
    </div>
  </div>`;
  articlePersonajes.appendChild(divPersonaje);
  }

// llamadas a la api

function planeta_tierra() {
  fetch('https://rickandmortyapi.com/api/location/20/')
    .then(response => response.json())
    .then(data => {
      personajes(data);})
}

function planeta_ciudadela() {
  fetch('https://rickandmortyapi.com/api/location/3/')
    .then(response => response.json())
    .then(data => {
      personajes(data);})
}

function planeta_apocal() {
  fetch('https://rickandmortyapi.com/api/location/8/')
    .then(response => response.json())
    .then(data => {
      personajes(data);})
}

function planeta_anatomy() {
  fetch('https://rickandmortyapi.com/api/location/5/')
    .then(response => response.json())
    .then(data => {
      personajes(data);})
}


function planeta_cable() {
  fetch('https://rickandmortyapi.com/api/location/6/')
    .then(response => response.json())
    .then(data => {
      personajes(data);})
}
    
function personajes(data) {  
  
  data.residents.forEach(element => {
      fetch(element)
      .then(response => response.json())
      .then(personaje => 
        creaPersonaje(personaje));
    });
}


