function menu () {

    return ` <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
      Menu
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
      <li><a class="dropdown-item bold"  href="Deal of the Day.html">Deals</a></li>
      <li><a class="dropdown-item bold"  href="support&service.html">Support & Service</a></li>
      <li><a class="dropdown-item bold"  href="brands.html">Brands</a></li>
      <li><a class="dropdown-item bold"  href="featured.html">Featured</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" >Shop by Department</a></li>
      <li><a class="dropdown-item" href="appliances.html">Appliances</a></li>
      <li><a class="dropdown-item" href="#">TV & Home Theater</a></li>
      <li><a class="dropdown-item" href="#">Computers & Tablets</a></li>
      <li><a class="dropdown-item" href="#">Cameras, Camcorders & Drones</a></li>
      <li><a class="dropdown-item" >Cell Phones</a></li>
      <li><a class="dropdown-item" href="#">Audio</a></li>
      <li><a class="dropdown-item" href="#">Video Games</a></li>
      <li><a class="dropdown-item" href="#">Movies & Music</a></li>
      <li><a class="dropdown-item" href="#">Car Electronics & GPS</a></li>
      <li><a class="dropdown-item" href="#">Wearable Technology</a></li>
      <li><a class="dropdown-item" href="#">Health & Wellness</a></li>
      <li><a class="dropdown-item" href="#">Sports, Fitness & Recreation</a></li>
      <li><a class="dropdown-item" href="#">Sustainable Living</a></li>
      <li><a class="dropdown-item" >Home, Furniture & Office</a></li>
      <li><a class="dropdown-item" href="#">Smart Home, Security & Wi-Fi</a></li>
      <li><a class="dropdown-item" href="#">Toys, Games & Collectibles</a></li>
      <li><a class="dropdown-item" href="#">Best Buy Outlet</a></li>
      <li><a class="dropdown-item" href="#"> X Close</a></li>
    </ul>
  </div> `
}


function icn () {
    return `<i class="fa-solid fa-cart-shopping"></i>`
}


export {menu,icn}


