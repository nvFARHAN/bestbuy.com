import { menu } from "../components/menu.js";
// console.log(menu())

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js";

document.getElementById("footer").innerHTML = footer();

let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let key = form.search.value;
  console.log(key);
  localStorage.setItem("search", JSON.stringify(key));
  window.location.href = "searchpro.html";
});
