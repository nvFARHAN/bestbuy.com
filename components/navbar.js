let navbar = () => {
  return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid px-5">
        <div class="d-flex align-items-center gap-5">
          <a class="navbar-brand" href="home.html">
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/BestBuy_Logo_2020-190616.png;maxHeight=80;maxWidth=136"
              alt="logo_img"
            />
          </a>
          <div class="dropdown">
            <a
              class="nav-link text-light d-flex align-items-center"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="navbar-toggler-icon"></span>
              <span class="fw-bold fs-4">Menu</span>
            </a>

            <ul class="dropdown-menu menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="Deal of the Day.html">Deals</a></li>
              <li><a class="dropdown-item" href="support&service.html">Support & Services</a></li>
              <li><a class="dropdown-item" href="brands.html">Brands</a></li>
              <li><a class="dropdown-item" href="featured.html">Featured</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <p class="dropdown-header">Shop by Department</p>
              </li>
              <li><a class="dropdown-item" href="appliances.html">Appliances</a></li>
              <li><a class="dropdown-item" href="#">TV & Home Theater</a></li>
              <li><a class="dropdown-item" href="#">Computer & Tablets</a></li>
              <li>
                <a class="dropdown-item" href="#"
                  >Cameras, Camcorders & Drones</a
                >
              </li>
              <li><a class="dropdown-item" href="#">Cell Phones</a></li>
              <li><a class="dropdown-item" href="#">Audio</a></li>
              <li><a class="dropdown-item" href="#">Video Games</a></li>
              <li><a class="dropdown-item" href="#">Movies & Music</a></li>
              <li>
                <a class="dropdown-item" href="#">Car Electronics & GPS</a>
              </li>
              <li><a class="dropdown-item" href="#">Wearable Technology</a></li>
              <li><a class="dropdown-item" href="#">Health & Wellness</a></li>
              <li>
                <a class="dropdown-item" href="#"
                  >Sports, Fitness & Recreation</a
                >
              </li>
              <li><a class="dropdown-item" href="#">Sustainable Living</a></li>
              <li>
                <a class="dropdown-item" href="#">Home, Furniture & Office</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Smart Home, Security & Wi-Fi</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#">Toys, Games & Collectibles</a>
              </li>
              <li><a class="dropdown-item" href="#">Best Buy Outlet</a></li>
            </ul>
          </div>
          <form id=form class="d-flex">
            <input
              id="search"
              class="border-0 rounded-start px-3"
              type="search"
              placeholder="Search Best Buy"
              aria-label="Search"
              style="width: 40vw"
            />
            <button
              class="btn bg-light rounded-end"
              type="submit"
              style="border-radius: 0"
            >
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div class="d-flex justify-content-between">
          <!-- <a class="nav-link text-light h4" href="#">Aiea</a> -->
          <a class="nav-link text-light h4" href="cart.html"><i class="fas fa-shopping-cart"></i>  Cart</a>
        </div>
      </div>
    </nav>
    <div class="bg-primary d-flex justify-content-between border-top px-5">
      <div class="d-flex">
        <a class="nav-link text-light" href="">Top Deals</a
        ><a class="nav-link text-light" href="Deal of the Day.html"> Deal of the Day</a
        ><a class="nav-link text-light" href=""> Totaltech Membership</a
        ><a class="nav-link text-light d-none d-xl-block" href="">
          Credit Cards</a
        ><a class="nav-link text-light d-none d-xl-block" href="">Gift Cards</a
        ><a class="nav-link text-light d-none d-xl-block" href="">Gift Ideas</a
        ><a class="nav-link text-light d-none d-xl-block" href="">
          Health & Wellness</a
        >
        <!-- <div class="dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div> -->
      </div>
      <div class="d-flex">
        <div class="dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </a>

          <ul
            class="dropdown-menu"
            aria-labelledby="dropdownMenuLink"
            style="width: 400px"
          >
            <li class="w-100">
              <div class="d-flex flex-column align-items-center p-3">
                <span class="pb-3">
                  Becoming a My Best Buy® member comes with easy order tracking,
                  rewards, offers and more.
                </span>
                <a href="signin.html"
                  ><button class="btn btn-primary mb-2">Sign In</button></a
                >
                <a href="newAccount.html"
                  ><button class="btn btn-light border-primary">
                    Create Account
                  </button></a
                >
              </div>
            </li>
            <hr style="height: 10px" />
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Action</a>
                <span>Your info at a glance</span>
              </div>
            </li>
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Orders & Purchases</a>
                <span>Track, change, cancel</span>
              </div>
            </li>
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Your Products</a>
                <span>Support, manuals, guides</span>
              </div>
            </li>
            <hr style="height: 10px" />
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Payment Methods</a>
                <span>Saved credit cards</span>
              </div>
            </li>
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Protection Plans & Subscriptions</a>
                <!-- <span>Track, change, cancel</span> -->
              </div>
            </li>
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Digital Library</a>
                <span>Your downloads</span>
              </div>
            </li>
            <hr style="height: 10px" />
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Best Buy Totaltech™</a>
                <!-- <span>Your info at a glance</span> -->
              </div>
            </li>
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Free Home Consultation</a>
                <!-- <span>Track, change, cancel</span> -->
              </div>
            </li>
            <li>
              <div
                class="dropdown-item d-flex justify-content-between border-bottom"
              >
                <a class="" href="#">Member OffersYour Products</a>
                <!-- <span>Support, manuals, guides</span> -->
              </div>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Recently Viewed
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <div class="" style="width: 600px">
              <div class="d-flex p-3 align-items-center">
                <h2 class="border-end pe-3">Recently Viewed</h2>
                <a class="ps-3" href="#">
                  Manage all your recently viewed items ›
                </a>
              </div>
              <div id="recently" class="d-none"></div>
              <hr />
              <div class="d-flex p-3">
                <h2>You don't have any recently viewed items</h2>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2015/global/qa2/sh_zs_bs_v2.png;maxHeight=992;maxWidth=260"
                  alt=""
                />
              </div>
            </div>
          </ul>
        </div>
        <div class="dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Order Status
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <div class="" style="width: 600px">
              <div class="d-flex p-3 align-items-center">
                <h2 class="border-end pe-3">Order Status</h2>
              </div>

              <hr />
              <div id="status" class="d-none"></div>
              <div class="d-flex p-3">
                <h2>Hi there! Looking for a current order?</h2>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2015/global/qa2/sh_zs_bs_v2.png;maxHeight=992;maxWidth=260"
                  alt=""
                />
              </div>
            </div>
          </ul>
        </div>
        <div class="dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Saved Items
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <div class="" style="width: 600px">
              <div class="d-flex p-3 align-items-center">
                <h2 class="border-end pe-3">Saved Items</h2>
                <a class="ps-3" href="#"> See all your saved items › </a>
              </div>
              <hr />
              <div id="saved" class="d-none"></div>
              <div class="d-flex p-3">
                <h2>Looks like you don't have anything saved...</h2>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2015/global/qa2/sh_zs_bs_v2.png;maxHeight=992;maxWidth=260"
                  alt=""
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
        `;
};

export default navbar;
