import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

// let api1 = `https://api.bestbuy.com/v1/categories?show=id,url&format=json&apiKey=qhqws47nyvgze2mq3qx4jadt&pageSize=50`;

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let carousel0 = () => {
  $(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 20,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  });
};

let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let key = form.search.value;
  console.log(key);
  localStorage.setItem("search", JSON.stringify(key));
  window.location.href = "searchpro.html";
});

let menu = document.querySelectorAll(".menu > li > a");
console.log(menu);
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", () => {
    // console.log(event.target.innerText);
    localStorage.setItem("key", event.target.innerText);
    window.location.href = "#";
  });
}

let getData = async (api) => {
  let res = await fetch(api);
  let data = await res.json();
  //   console.log(data);
  return data;
};

let append = (data, container) => {
  container.innerHTML = null;
  data.forEach((e) => {
    let box = document.createElement("div");
    box.setAttribute("class", "item");
    let imgbox = document.createElement("div");
    imgbox.setAttribute("class", "imgDiv");
    let img = document.createElement("img");
    img.src = e.images.standard;
    imgbox.append(img);
    let p = document.createElement("p");
    p.innerText = e.names.title;
    let reg = document.createElement("span");
    reg.innerText = "$" + e.prices.regular;
    let cur = document.createElement("span");
    cur.innerText = "$" + e.prices.current;
    let priceBox = document.createElement("div");
    priceBox.setAttribute("class", "price");
    priceBox.append(cur, reg);
    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.setAttribute("class", "btn btn-primary");
    btn.addEventListener("click", () => {
      cart.push({
        name: e.names.title,
        image: e.images.standard,
        regular: e.prices.regular,
        current: e.prices.current,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    });
    box.append(imgbox, p, priceBox, btn);
    container.append(box);
  });
};

let append1 = (data, container) => {
  container.innerHTML = null;
  data.forEach((e) => {
    let box = document.createElement("div");
    box.setAttribute("class", "item");
    let imgbox = document.createElement("div");
    imgbox.setAttribute("class", "imgDiv");
    let img = document.createElement("img");
    img.src = e.image;
    imgbox.append(img);
    let p = document.createElement("p");
    p.innerText = e.name;
    let reg = document.createElement("span");
    reg.innerText = "$" + e.regularPrice;
    let cur = document.createElement("span");
    cur.innerText = "$" + e.salePrice;
    let priceBox = document.createElement("div");
    priceBox.setAttribute("class", "price");
    priceBox.append(cur, reg);
    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.setAttribute("class", "btn btn-primary");
    btn.addEventListener("click", () => {
      cart.push({
        name: e.name,
        image: e.image,
        regular: e.regularPrice,
        current: e.salePrice,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    });
    box.append(imgbox, p, priceBox, btn);
    container.append(box);
  });
};

let main = async (api, container) => {
  // let cdata = await getData(api1);
  // let cId = cdata.categories[Math.floor(Math.random() * 50)].id;
  //   console.log("cId:", cId);
  // let api2 = ;
  let data = await getData(api);
  console.log("data:", data);
  append(data.results, container);
  // carousel0();
};

let deal = async (api, container) => {
  // let cdata = await getData(api1);
  // let cId = cdata.categories[Math.floor(Math.random() * 50)].id;
  //   console.log("cId:", cId);
  // let api2 = ;
  let data = await getData(api);
  console.log("data:", data);
  append1(data.products, container);
};

// let api2 = `https://api.bestbuy.com/v1/products/trendingViewed(categoryId=${cId})?apiKey=qhqws47nyvgze2mq3qx4jadt`;
// getData(api2);

let func = async () => {
  await main(
    `https://api.bestbuy.com/v1/products/trendingViewed?apiKey=qhqws47nyvgze2mq3qx4jadt`,
    document.getElementById("owl1")
  );
  // carousel0();
  await main(
    `https://api.bestbuy.com/v1/products/mostViewed?apiKey=qhqws47nyvgze2mq3qx4jadt`,
    document.getElementById("owl2")
  );
  // carousel1();
  await deal(
    `https://api.bestbuy.com/v1/products(offers.type=deal_of_the_day)?apiKey=qhqws47nyvgze2mq3qx4jadt&format=json&pageSize=15&show=sku,name,image,salePrice,regularPrice&sort=bestSellingRank`,
    document.getElementById("owl3")
  );
  carousel0();
};
func();
