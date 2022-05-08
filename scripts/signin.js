import { navbarAccount,footers } from "../components/navbarAccount.js";

let a = document.getElementById("navbar");
a.innerHTML = navbarAccount();

document.getElementById("footers").innerHTML = footers();



var regdUsers = JSON.parse(localStorage.getItem("userdata"));
// window.location.href = "index.html";
// alert("login success");
//console.log(regdUsers);

let loginFun = () => {
  e.preventDefault();

  let enteredEmail = document.querySelector("#email").value;
  let enteredPassword = document.querySelector("#password").value;
  //console.log(email);


  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i]);
    if (
      regdUsers[i].email == enteredEmail && 
      regdUsers[i].password == enteredPassword
   
    ) {

      alert("login success");
      window.location.href = "index.html";
      break;
    } else {
      console.log("login failed");
    }
  }
};
document.querySelector("form").addEventListener("signin", loginFun);