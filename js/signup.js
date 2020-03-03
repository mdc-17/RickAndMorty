// SIGN UP

let userName = document.getElementById("username");
let email = document.getElementById("email")
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");


let form = document.getElementById("form");
let formWrapper = document.getElementById("container-login");

let logInButton = document.getElementById("log-in-button");
let signUpButton = document.getElementById("signupbutton");

let usersDB = JSON.parse(localStorage.getItem('users'))

signUpButton.addEventListener("click", function(event){
  event.preventDefault();
  deleteErrors();
  
  if (checkValidUser()){
      console.log("user registered")
      createUser(name.value, email.value, password.value)
  };
})

function checkValidUser() {
  let signUpValidator = new SignUpValidator (userName.value, email.value, password.value, repeatPassword.value);
  
  let usersDB = JSON.parse(localStorage.getItem("users"));
  let validUser = true;
  
  if(!signUpValidator.checkUserName()){
      signUpValidator.errorCreator("Por favor, introduce un nombre válido", userName)
      validUser=false
  }
  if(!signUpValidator.checkEmail()){
      signUpValidator.errorCreator("Por favor, introduce una dirección de mail válida", email)
      validUser=false
  }
  if(!signUpValidator.checkPassword()){
      signUpValidator.errorCreator("Por favor, introduce una contraseña válida", password)
      validUser=false
  }
  if(!signUpValidator.checkRepeatPassword()){
      signUpValidator.errorCreator("Las contraseñas no coinciden", repeatPassword)
      validUser=false
  }
  if (!signUpValidator.checkEmailInDB(usersDB)){
      signUpValidator.errorCreator("Este mail ya existe", email)
      validUser=false
  }

  return validUser
}

function deleteErrors (){
  let errors = [...document.getElementsByClassName("error")]
  errors ? errors.forEach(error => error.remove()) : null;
}

function createUser (name, email, password) {
  const newUser = new User (name, email, password)

  if (usersDB){
      usersDB.push(newUser);
  } else {
      usersDB = [newUser]
  }
  localStorage.setItem('users', JSON.stringify(usersDB));
} 