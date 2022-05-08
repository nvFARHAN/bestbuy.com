import navbar from '../components/navbar.js';
import footer from '../components/footer.js';

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

let details = document.getElementById('details');
let similarpd = document.getElementById('similar');
// let simd = document.getElementById('none');


let id = JSON.parse(localStorage.getItem('SKU'));
// console.log(id);

let search = async (id) => {
    try{

        let res = await fetch(`https://api.bestbuy.com/v1/products(sku=${id})?apiKey=pMSIDfTbv0JiUHOeHleFgKUF&format=json`)
        
        let data = await res.json();
        // console.log(data.products)
        append(data.products)
    }catch(e){console.log(e)}


}
search(id)


const star = (review) =>{
    if(review >= 4.1){
        return `<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span>`
    }else{
        return `<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`
    }
}



let append = (x) => {
    
    x.forEach(({sku,name,manufacturer,modelNumber,customerReviewCount,customerReviewAverage,regularPrice,onSale,salePrice,longDescription,image,images,warrantyLabor,warrantyParts}) => {

        let box1 = document.createElement('div');
        box1.setAttribute('class', 'box1')
        let box2 = document.createElement('div');
        box2.setAttribute('class', 'box2')
        

        let manuf = document.createElement('p');
        manuf.innerText = manufacturer;
        let naam = document.createElement('h4')
        naam.innerText = name;
        let model = document.createElement('p')
        model.innerText = `Model:  ${modelNumber}  SKU: ${sku}`;
        let rating = document.createElement('p');
        rating.innerHTML = `${star(customerReviewAverage)} (${customerReviewCount} reviews)`;
        let display_img = document.createElement('div');
        display_img.setAttribute('class', 'display_img');
        let img = document.createElement('img');
        img.src=image;
        display_img.appendChild(img);
        let smldiv = document.createElement('div');
        smldiv.setAttribute('class','smldiv')
        let membership = document.createElement('div');
        membership.setAttribute('class', 'membership')
        let membership_detail = document.createElement('p')
        membership_detail.innerText = `Unlock up to $23.76* in savings over 24 months of Best Buy Protection with our Totaltech Membership`;
        let imgdollar = document.createElement('img');
        imgdollar.src = 'icon/dollar.png';
        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
        membership.append(imgdollar,membership_detail,span);

        let returnp = document.createElement('div')
        returnp.setAttribute('class', 'returnp');
        let imgretp = document.createElement('div')
        let bodyy = document.createElement('div')
        bodyy.setAttribute('class', 'bodyy')
        imgretp.setAttribute('class', 'imgretp');
        let imgreturn = document.createElement('img')
        imgreturn.src = 'icon/return.png'
        imgretp.append(imgreturn)
        let returnheader = document.createElement('p')
        returnheader.innerText = `15-DAY FREE & EASY RETURNS`
        let returnbody = document.createElement('p')
        returnbody.innerText = `If received today, the last day to return this item would be May 22.`
        let returntail = document.createElement('p')
        returntail.innerText='Learn more ˃'
        bodyy.append(returnheader,returnbody,returntail)
        

        returnp.append(imgretp,bodyy)

        for(let i=0; i<12; i++) {
            if(images[i].width > 450){
                let imm = document.createElement('img');
                imm.setAttribute('class','imm')
                imm.src=images[i].href;
                imm.addEventListener('mouseover',function(){

                    hover(img,images[i].href)
                })
                smldiv.append(imm)
            }
        }

        function hover(ele,href) {
            // console.log(href)
            ele.setAttribute('src', href);
          }

          let tcp = document.createElement('div');
          let tcbtn = document.createElement('div');
          tcbtn.setAttribute('class', 'tcbtn')
          tcp.setAttribute('class', 'tcp')
          let imt = document.createElement('img');
          imt.src = 'icon/tcsp.png';
          let bttn = document.createElement('button')
          bttn.innerText =' Learn About Totaltech'
          tcbtn.append(bttn);
          tcp.append(imt,tcbtn);
          let btn = document.createElement('div')
        
        
          const cartlogo =() =>{
              return `<button id='add_cart' >
              <i class="fa-solid fa-cart-shopping"></i>  Add to Cart
              </button>`
          }
          
          btn.innerHTML = cartlogo()




          let gettd = document.createElement('p');
          let pickup = document.createElement('p');
          let shipping = document.createElement('p');

          
          gettd.innerText = `Get it today`;
          gettd.style.color = 'green';
          
          const pick = () => {
              return `  <span ><img  src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-pol-icons-grey-store-sv_der-78003.png"/> </span> <span class="bld">Pickup: </span>Order now for pickup.Available today at Aiea
              `
          }
          
          pickup.innerHTML = pick();
  
          const shipp = () =>{
              return `  <span ><i class="fa-solid fa-truck-fast"></i></span> <span class="bld">Shipping: </span>Unavailable in your area
              This item is only available in certain markets.`
          }
       
          shipping.innerHTML = shipp();
          

          //price section
          let smallp = document.createElement('div')

          smallp.setAttribute('class', 'smallp')
          let price = document.createElement('p')
          price.innerText =`$${salePrice}` ;
          let reg_price = document.createElement('p')
          let dis = document.createElement('p')
          dis.setAttribute('id', 'dis')
          reg_price.innerText =`Was $${ regularPrice}`;
          
          let hr = document.createElement('hr');
          let hr1 = document.createElement('hr');
          let hr2 = document.createElement('hr');
          
          if(onSale == true){
            dis.innerText= `Save $${(regularPrice - salePrice).toFixed(2)}`
            smallp.append(dis)
            box2.append(price,smallp,reg_price,membership,returnp,hr,gettd,pickup,shipping,hr1,tcp,hr2,btn)
            // box2.innerHTML=cartlogo();
        }
        else{
            box2.append(price,membership,returnp,hr,gettd,pickup,shipping,hr1,tcp,hr2,btn);
        }



        let descrip = document.createElement('div');
        let waranty = document.createElement('div');
        waranty.setAttribute('id', 'waranty');
        descrip.setAttribute('id','descrip')
        let dp = document.createElement('h5');
        dp.innerText = 'Description';
        let dp_val = document.createElement('p');
        dp_val.innerText = longDescription;
        descrip.append(dp,dp_val);

        let w1 = document.createElement('h5');
        w1.innerText = 'Warranty';
        let w2 = document.createElement('p')
        let w3 = document.createElement('p')
        w2.innerText = `Warranty-Labor:  ${warrantyLabor}`//warrantyLabor: "1 Year Limited Warranty"
        w3.innerText = ` Warranty-Parts: ${warrantyParts}`
       
        let sarch = document.querySelector('form')
        sarch.addEventListener('submit', function() {
            search(event)
        })
        function search(e) {
            e.preventDefault();
            let val = document.getElementById('search')
            // console.log(val.value)
           localStorage.setItem('search',JSON.stringify(val.value));
            window.location.href='searchpro.html'

        }


        waranty.append(w1,w2,w3)


        
        box1.append(manuf,naam,model,rating,display_img,smldiv,descrip,waranty);
        details.append(box1,box2)
        // console.log(images)
    })
}
