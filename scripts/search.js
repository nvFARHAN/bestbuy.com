// pMSIDfTbv0JiUHOeHleFgKUF == key\

import navbar from '../components/navbar.js'
import footer from '../components/footer.js'


let navba = document.getElementById('navbar')
navba.innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();
let attach =  document.getElementById('products');
let txt =  document.getElementById('txt');
let sort =  document.getElementById('sort');
let searchbar = document.getElementById('search');
let form = document.querySelector('form');
let initial = JSON.parse(localStorage.getItem('search'))
console.log(initial);


function bar (e,item){
    e.preventDefault();
    console.log(item.value);
    localStorage.setItem('viewed',JSON.stringify(item.value))
        let [x,y,z] = item.value.split(' ');
        console.log(x);
        console.log(y);
        if(y == undefined && z == undefined){
            txt.innerText =`Results for "${x}"`;
        }
        else if(z == undefined){
            txt.innerText = `Results for "${x+' '+y}"`
        }
        else{
            txt.innerText = `Results for "${x+' '+y+' '+z}"`
        }
        search(x,y,z,sort.value)
    
    console.log(1)
    
}

function sorting(item){
    console.log(sort.value)
    console.log(item.value)
    let [x,y,z] = item.value.split(' ');
    search(x,y,z,sort.value)
}

form.addEventListener('submit', function(){
    bar(event,searchbar)
})

sort.addEventListener('change', function(){
    sorting(searchbar);
})


let rep;
let imagg = document.createElement('img'); 
imagg.setAttribute('class', 'imagg')
let search = async (x,y,z,sort) =>{
    imagg.src = 'https://media3.giphy.com/media/wvtt4mtViPOSrLYNFh/200w.webp?cid=ecf05e47zr7vbmkescdla1njjrmxplpwqaerup349a5ol3pj&rid=200w.webp&ct=g';
    attach.innerHTML = '';
    attach.append(imagg)//loading image
    console.log(1)
    
    try{

        if(y==undefined & z==undefined){
            
            rep = await fetch(`https://api.bestbuy.com/v1/products((search=${x}))?apiKey=pMSIDfTbv0JiUHOeHleFgKUF&pageSize=10&sort=${sort}&page=1&format=json`)

        }
        else if(z==undefined) {
            rep = await fetch(`https://api.bestbuy.com/v1/products((search=${x}&search=${y}))?apiKey=pMSIDfTbv0JiUHOeHleFgKUF&pageSize=10&sort=${sort}&page=1&format=json`)
        }
        else{
            rep = await fetch(`https://api.bestbuy.com/v1/products((search=${x}&search=${y}&search=${z}))?apiKey=pMSIDfTbv0JiUHOeHleFgKUF&pageSize=10&sort=${sort}&page=1&format=json`)
        }
        let data = await rep.json();

        console.log(data.products)
            append(data.products)
    }catch(e){
        console.log(e);
    }
}

// search()

const append =(data) => {
    console.log(data)
    attach.innerHTML = null;

    if(data.length == 0){
        imagg.src='https://media4.giphy.com/media/8L0Pky6C83SzkzU55a/200w.webp?cid=ecf05e47ag1e9g8kjrxojnufeato3c33ghg4r2bcjb22bj7q&rid=200w.webp&ct=g';
        attach.append(imagg)
    }


    data.forEach (({sku,name,modelNumber,largeFrontImage,alternateViewsImage,mediumImage,albumTitle,customerReviewCount,customerReviewAverage,onSale,salePrice,regularPrice})=>{
        // console.log(sku)
        // console.log(name)
        // console.log(modelNumber)
        // console.log(largeFrontImage)
        // console.log(albumTitle)
        // console.log(onSale)
        // console.log(customerReviewAverage)
        // console.log(customerReviewCount)

        let outer = document.createElement('div')
        outer.setAttribute('class', 'outer')

        let image = document.createElement('img');
        
        const imag=(x,y,z) =>{
            if(x===null){
                return y
            }else if(x==null && y===null){
                return z
            }
            else{
                return x
            }
        }

        image.src=imag(largeFrontImage,alternateViewsImage,mediumImage);



        let box1 = document.createElement('div');
        box1.setAttribute('class','box1')

        let title = document.createElement('h4')
        title.innerText = name;
        let model = document.createElement('p')
        model.innerText = `Model:  ${modelNumber}  SKU: ${sku}`;

        let rating = document.createElement('p');
        let gettd = document.createElement('p');
        let pickup = document.createElement('p');
        let shipping = document.createElement('p');

        const star = (review) =>{
            if(review >= 4.1){
                return `<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span>`
            }else{
                return `<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`
            }
        }

        rating.innerHTML = `${star(customerReviewAverage)} (${customerReviewCount} reviews)`;
        gettd.innerText = `Get it today`;
        gettd.style.color = 'green';
        
        const pick = () => {
            return `  <span ><img  src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-pol-icons-grey-store-sv_der-78003.png"/> </span> <span class="bld">Pickup: </span>Available today at Aiea
            `
        }
        
        pickup.innerHTML = pick();

        const shipp = () =>{
            return `  <span ><i class="fa-solid fa-truck-fast"></i></span> <span class="bld">Shipping: </span>Unavailable in your area
            This item is only available in certain markets.`
        }
     
        shipping.innerHTML = shipp();

        box1.append(title,model,rating,gettd,pickup,shipping);


        let box2 = document.createElement('div')
        let smallp = document.createElement('div')

        smallp.setAttribute('class', 'smallp')
        box2.setAttribute('class','box2')

        let price = document.createElement('p')
        price.innerText =`$${salePrice}` ;
        let reg_price = document.createElement('p')
        let dis = document.createElement('p')
        dis.setAttribute('id', 'dis')
        reg_price.innerText =`Was $${ regularPrice}`;
      
        let free = document.createElement('p')
        free.setAttribute('id','free')
        free.innerText = `6 free months of Apple Music`
        let btn = document.createElement('div')
        
        
        const cartlogo =() =>{
            return `<button id='add_cart' >
            <i class="fa-solid fa-cart-shopping"></i>  Add to Cart
            </button>`
        }
        
        btn.innerHTML = cartlogo()


        if(onSale == true){
            dis.innerText= `Save $${(regularPrice - salePrice).toFixed(2)}`
            smallp.append(dis,reg_price)
            box2.append(price,smallp,free,btn)
            // box2.innerHTML=cartlogo();
        }
        else{
            box2.append(price,free,btn);
        }
        


        outer.append(image,box1,box2)
        outer.addEventListener('click',function(){
            detail(sku);
        })
        function detail(sku){
            console.log(sku);
            localStorage.setItem('SKU',JSON.stringify(sku));
            window.location.href='showdetail.html'
        }
        let hr = document.createElement('hr');
        attach.append(outer,hr)

    })
}



let srchagn = (initial) =>{
    let [x,y,z] = initial.split(' ');
    if(y == undefined && z == undefined){
        txt.innerText =`Results for "${x}"`;
    }
    else if(z == undefined){
        txt.innerText = `Results for "${x+' '+y}"`
    }
    else{
        txt.innerText = `Results for "${x+' '+y+' '+z}"`
    }
    search(x,y,z,sort.value)
}
srchagn(initial)