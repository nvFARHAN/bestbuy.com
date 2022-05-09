
import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar()

import footer from "../components/footer.js"


import { menu,icn} from "../components/menu.js"
document.getElementById("footer").innerHTML = footer()

let data = [
    { 
        name : "Westinghouse - 43 FHD Smart Roku TV", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6489/6489182_sd.jpg;maxHeight=640;maxWidth=550", 
        price : 209.99 
    } ,

    {   name : "Insignia™ - 8qt Digital Multi Cooker - Stainless Steel", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6258/6258941_rd.jpg;maxHeight=640;maxWidth=550", 
        price : 39.99 
    } ,
    
    {   name : "Insignia™ - 10 Qt. Digital Air Fryer Oven - Stainless Steel", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6471/6471356_sd.jpg;maxHeight=640;maxWidth=550", 
        price : 59.99 
    } ,

    {   name : "Bella Pro Series - 14-Cup Touchscreen Coffee Maker - Black Stainless Steel", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412323_rd.jpg;maxHeight=640;maxWidth=550", 
        price : 29.99
    } ,

    {   name : "WD - easystore 8TB External USB 3.0 Hard Drive - Black", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425302_sd.jpg;maxHeight=640;maxWidth=550", 
        price : 149.99 
    } ,

    {   name : "Shark Navigator Lift-Away ADV Upright Vacuum - Blue Jean", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449783_sd.jpg;maxHeight=640;maxWidth=550", 
        price : 129.99
    } ,

    {   name : "Tineco - Floor One S5 Extreme Wet/Dry Hard Floor Cordless Vacuum with iLoop Smart Sensor Technology - Black", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6498/6498058_sd.jpg;maxHeight=640;maxWidth=550", 
        price : 399.99 
    } ,
// ...............
    {   name : "Insignia™ - 4.3 Cu. Ft. Mini Fridge with Top Freezer - Stainless steel", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6173/6173901_sd.jpg;maxHeight=640;maxWidth=550", 
        price : 209.99 
    } ,

    {   name : "Philips Sonicare - DiamondClean Classic Rechargeable Toothbrush - Pink", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6269/6269208_rd.jpg;maxHeight=640;maxWidth=550", 
        price : 129.99 
    } ,

    {   name : "Insignia™ - 0.7 Cu. Ft. Compact Microwave - White", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6315/6315751_sd.jpg;maxHeight=640;maxWidth=550", 
        price : 54.99 
    } ,

    {   name : "Insignia™ - 375 Sq. Ft. HEPA Air Purifier - White", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6444/6444068cv11d.jpg;maxHeight=640;maxWidth=550", 
        price : 139.99 
    } ,

    {   name : "Blue Microphones - Yeti 10th Anniversary Edition USB Multi-Pattern Electret Condenser Instrument and Vocal Microphone", 
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6380/6380464_sd.jpg;maxHeight=640;maxWidth=550", 
        price : 99.99 
    } ,
]

data.map(function({name,image,price}) {

    let div = document.createElement("div")
    div.setAttribute("id", "deals-box")

    let h5 = document.createElement("h5")
    h5.innerText = name
    h5.setAttribute("id", "name")   


    let imgdiv = document.createElement("div")
    imgdiv.setAttribute("id", "img-div")    


    let img= document.createElement("img")
    img.src = image
    img.setAttribute("id", "deals-pic")

    imgdiv.append(img)

    let div1 = document.createElement("div")
    div1.setAttribute("id","pri")
    
    let h3 = document.createElement ("h3")
    h3.innerText = "$"
    h3.setAttribute("id","pri")

    let p = document.createElement("p")
    p.innerText = price
    p.setAttribute("id","price")

    div1.append(h3,p)

    

    let btn = document.createElement("button")
    btn.innerHTML = `${icn()}Add to cart`
    
    btn.setAttribute("id","Add-to-cart")
    btn.addEventListener("click", function(){
        myFunc(name,image,price)
    })

    div.append(imgdiv,h5,div1,btn)

    document.getElementById("deal-of-the-day").append(div)
    // console.log(name)

})



var arr = JSON.parse(localStorage.getItem("deal")) || []
function myFunc (name,image,price) {
var obj = {
}
obj["name"]=name
obj["image"]=image
obj["price"]=price
    arr.push(obj)
    console.log(arr)
    localStorage.setItem("cart",JSON.stringify(arr))
}


