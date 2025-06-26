const btnSubmit = document.querySelectorAll(".btnSubmit");
const inputLogin = document.querySelector(".login");
const inputPassword = document.querySelector(".password");

//CONNEXION//////////////////////////////////////////////////////////////
btnSubmit[0].addEventListener("click", (e)=>{
    e.preventDefault();
    window.localStorage.setItem("Login Inscription", inputLogin.value);
    window.localStorage.setItem("Password Inscription", inputPassword.value);
});

const inputLogin2 = document.querySelector(".login2");
const inputPassword2 = document.querySelector(".password2");
const h2 = document.querySelector("h2");

//INSCRIPTION////////////////////////////////////////////////////////////
btnSubmit[1].addEventListener("click", (e)=>{
    e.preventDefault();
    window.localStorage.setItem("Login Connexion", inputLogin2.value);
    window.localStorage.setItem("Password Connexion", inputPassword2.value);
    
    const getLogin = localStorage.getItem("Login Inscription");
    const getLogin2 = localStorage.getItem("Login Connexion");
    const getPassword = localStorage.getItem("Password Inscription");
    const getPassword2 = localStorage.getItem("Password Connexion");
    
    // const getLogin = localStorage.getItem("login");
    if(getLogin!=getLogin2){
        alert("Mauvais Login");
    }
    if(getPassword!=getPassword2){
        alert("Mauvais Mot de passe");
    }
    if(getLogin==getLogin2&&getPassword==getPassword2){
        h2.style.display="block";
    }
});