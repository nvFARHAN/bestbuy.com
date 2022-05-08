import { navbarAccount, footers } from "../components/navbarAccount.js";

let a = document.getElementById("navbar");
a.innerHTML = navbarAccount();

document.getElementById("footers").innerHTML = footers();



var userData = JSON.parse(localStorage.getItem("userdata")) || [];

let signup = () =>{
    
    event.preventDefault();

    var userobj = {
        firstName : document.querySelector("#fName").value,
        lastName : document.querySelector("#lName").value,
        mobile : document.querySelector("#mobile").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value,
        cPassword : document.querySelector("#conPassword").value,  
    };
    console.log(userobj);
    userData.push(userobj);
    alert("Sign Up success")
    window.location.href = "signin.html"
    localStorage.setItem("userdata", JSON.stringify(userData));
     
}
document.querySelector("form").addEventListener("submit",signup);