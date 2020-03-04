let logInButton = document.getElementById("log-in-button");
let nameLogin = document.getElementById("loginname");
let pswLogin = document.getElementById("pswLogin");
let formWrapper = document.getElementsByClassName("container-login")[0];
let location2 = document.getElementById("label");


let usersDB = JSON.parse(localStorage.getItem('users'))


logInButton.addEventListener('click', function (event){
  event.preventDefault();
  
    for (i = 0; i < usersDB.length; i++) {
      if (pswLogin.value === usersDB[i].password && nameLogin.value === usersDB[i].email) {
        createCurrentUser(usersDB[i])
        window.location.href = "../index.html"
      }
    }
    let div = document.createElement("div")
          div.setAttribute("class", "error")
          div.innerHTML = "Usuario o passwords incorrectos"
          formWrapper.insertBefore(div, location2)
  }
)
  

function createCurrentUser (user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
} 

