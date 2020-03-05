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
  let articlePersonajes = document.querySelector(".planetas");
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
console.log("hola");
function planeta(id) {
    fetch(`https://rickandmortyapi.com/api/location/${id}/`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        personajes(data);})
  }


/* planeta tirra = 20
ciudadela = 3
apocal = 8
anatomy = 5
cable = 6
*/ 

function clickPlaneta() {
    let planetas = document.querySelectorAll('.planeta');
    planetas.forEach(element => {
        let id = element.getAttribute("id")
        element.onclick =  () => { 
            //event.prevenDefault()
            planeta(id) 
        }
    })
}

clickPlaneta()

function personajes(data) {  
    let articlePersonajes = document.querySelector(".planetas");
    articlePersonajes.innerHTML = `<div><a href="../mapa.html"> <h1> VOLVER ATRAS </h1></a></div>`;
  data.residents.forEach(element => {
      fetch(element)
      .then(response => response.json())
      .then(personaje => 
        creaPersonaje(personaje));
    });
}


//CAPITULOS

//Crea la estructura para cada personaje
// function creaPersonaje(personaje) {
//   let articlePersonajes = document.querySelector(".planetas");
//   let divPersonaje = document.createElement("div");
//   divPersonaje.innerHTML = `
//   <div data="card header">
//   <div class="card-image">
//     <img src="${personaje.image}" alt="${personaje.name}">
//   </div>
//     <div class="card-nombre">
//       <h2 class="nombre">${personaje.name}</h2>
//     </div>
//   </div>
//     <div class="card-status">
//       <h4>STATUS</h4>
//       <p>${personaje.name}</p>
//     </div>
//     <div class="card-species">
//       <h4>SPECIE</h4>
//       <p>${personaje.species}</p>
//     </div>
//     <div class="card-gender">
//       <h4>GENDER</h4>
//       <p>${personaje.gender}</p>
//     </div>
//     <div class="card-location">
//       <h4>LOCATION</h4>
//       <p>${personaje.location.name}</p>
//     </div>
//   </div>`;
//   articlePersonajes.appendChild(divPersonaje);
//   }

// llamadas a la api
function capitulo(id) {
    fetch(`https://rickandmortyapi.com/api/episode/${id}/`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        captipersonajes(data);})
  }



function clickCapitulo() {
    let chapter = document.querySelectorAll('.capitulo');
    chapter.forEach(element => {
        let id = element.getAttribute("id")
        element.onclick =  () => { 
            //event.prevenDefault()
            capitulo(id) 
        }
    })
}

clickCapitulo()

function personajes(data) {  
    let articlePersonajes = document.querySelector(".planetas");
    articlePersonajes.innerHTML = '';
  data.residents.forEach(element => {
      fetch(element)
      .then(response => response.json())
      .then(personaje => 
        creaPersonaje(personaje));
    });
}


function captipersonajes(data) {  
  let articlePersonajes = document.querySelector(".planetas");
  articlePersonajes.innerHTML = '';
data.characters.forEach(element => {
    fetch(element)
    .then(response => response.json())
    .then(personaje => 
      creaPersonaje(personaje));
  });
}
