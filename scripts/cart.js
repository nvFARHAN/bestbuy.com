// let data1 = [
//   {
//     img: "https://pisces.bbystatic.com/image2//BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=100;maxWidth=100",
//     name: "Apple Air pods",
//     price: 219,
//   },

//   {
//     img: "https://pisces.bbystatic.com/image2//BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=100;maxWidth=100",
//     name: "Apple Air pods",
//     price: 209,
//   },

//   {
//     img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395763_sd.jpg;maxHeight=150;maxWidth=170",
//     name: "Apple Air pods",
//     price: 209,
//   },

//   {
//     img: "https://pisces.bbystatic.com/image2//BestBuy_US/images/products/6418/6418601_sd.jpg;maxHeight=100;maxWidth=100",
//     name: "Apple Air pods",
//     price: 209,
//   },
// ];


// localStorage.setItem("data", JSON.stringify(data1));

// have to remove this above data when i recevied data from product page made by teammate and get via local storage

const data = JSON.parse(localStorage.getItem("data")) || [];

// When got the data from other page correct the id name of local stoage according to that.

let cart_div = document.getElementById("cart_item");

if (data == null) {
  let nothing = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "Your Cart is Empty";

  nothing.append(h4);
  cart_div.append(nothing);
}

function append() {
  data.map((el, index) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let box1 = document.createElement("div");
    box1.setAttribute("class", "box1");

    let img = document.createElement("img");
    img.src = el.img;

    let name = document.createElement("h4");
    name.innerText = el.name;

    let store = document.createElement("div");
    store.setAttribute("class", "store");

    let pick = document.createElement("h5");
    pick.innerText = "Pickup at Aiea";

    let p = document.createElement("h6");
    p.innerText =
      "Ready for pickup Today Eligible for curbside pickup Only available for store pickup";

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("class", "btn");
    btn.addEventListener("click", function () {
      removedata(el, index);
    });

    let p_div = document.createElement("div");

    let price = document.createElement("p");
    price.innerText = `$${el.price - (el.price * 15) / 100}`;

    let disscount = document.createElement("h6");
    disscount.innerText = `Save $${(el.price * 15) / 100}`;
    disscount.setAttribute("class", "disscount");

    let original_p = document.createElement("h5");
    original_p.innerText = `Was at $${el.price}`;

    p_div.append(price, disscount, original_p);
    store.append(pick, p);
    box1.append(img);
    box.append(box1, name, store, btn, p_div);
    cart_div.append(box);
  });
}

append();

function removedata(el, index) {
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  window.location.reload();
}

let sum = 0;
let sum_saving = 0;
let tax = 0;

for (let i = 0; i < data.length; i++) {
  sum += data[i].price;
  sum_saving += (data[i].price * 15) / 100;
  tax += (data[i].price * 3.85) / 100;
}
// console.log(tax);

let O_price = document.getElementsByClassName("O_price");
O_price.innerText = `$ ${sum}`;
document.getElementById("original_price").append(O_price.innerText);

let save = document.getElementsByClassName("save");
save.innerText = `$ ${sum_saving.toFixed(2)}`;
document.getElementById("savings").append(save.innerText);

let taxes = document.getElementsByClassName("taxes");
taxes.innerText = `$ ${tax.toFixed(2)}`;
document.getElementById("tax").append(taxes.innerText);

let total = document.getElementById("totals");
total.innerText = `$ ${(sum + sum_saving + tax).toFixed(2)}`;

// console.log(total.innerText);
