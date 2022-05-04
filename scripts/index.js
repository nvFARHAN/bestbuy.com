let y = document.querySelectorAll("div[lang]");
let x = document.querySelectorAll("button[lang]");
console.log(x);
for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("click", () => {
    for (let j = 0; j < y.length; j++) {
      if (j == i) {
        y[j].setAttribute("class", "");
      } else {
        y[j].setAttribute("class", "hidden");
      }
    }
  });
}
