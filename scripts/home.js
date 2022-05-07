import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

// let api1 = `https://api.bestbuy.com/v1/categories?show=id,url&format=json&apiKey=qhqws47nyvgze2mq3qx4jadt&pageSize=50`;

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

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
    let img = document.createElement("img");
    img.src = e.images.standard;
    let p = document.createElement("p");
    p.innerText = e.names.title;
    box.append(img, p);
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
  carousel0();
};
main(
  `https://api.bestbuy.com/v1/products/trendingViewed?apiKey=qhqws47nyvgze2mq3qx4jadt`,
  document.getElementById("owl1")
);

main(
  `https://api.bestbuy.com/v1/products/mostViewed?apiKey=qhqws47nyvgze2mq3qx4jadt`,
  document.getElementById("owl2")
);
// let api2 = `https://api.bestbuy.com/v1/products/trendingViewed(categoryId=${cId})?apiKey=qhqws47nyvgze2mq3qx4jadt`;
// getData(api2);

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
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });
};

// let carousel1 = () => {
//   $(document).ready(function () {
//     var owl = $(".owl-carousel");
//     owl.owlCarousel({
//       margin: 20,
//       nav: true,
//       loop: true,
//       responsive: {
//         0: {
//           items: 1,
//         },
//         600: {
//           items: 2,
//         },
//         1000: {
//           items: 3,
//         },
//       },
//     });
//   });
// };
