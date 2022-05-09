document.querySelector("form").addEventListener("submit",myfunc);
    function myfunc () {
        event.preventDefault()
        var num = document.querySelector("#number").value
        var cv = document.querySelector("#cvv").value
        var exp = document.querySelector("#expiry").value
        console.log(num,cv,exp)
        
        if (num=="123" && cv== "789" && exp=="0001-01-01") {
            alert("OTP Sent to your registered mobile")
            window.location ="otp.html"

            // break;
        }
        if (num==""||cv==""||exp=="") {
            alert("Please fill full details")
        }
        else {
            if (num!=="123") {
                alert("card number is Incorrect")
            }
            else if (cv!=="789") {
                alert("cvv number is Incorrect")
            }
            else if (exp!=="0001-01-01") {
                alert("exp number is Incorrect")
            }
        }

    }


// document.getElementById("cart-amount").addEventListener(" ")


 let data = JSON.parse(localStorage.getItem("cartdata")) || []; 



 let total = document.getElementById("cart-amount")
 let c_total = 0;
 let r_total = 0

 for(i = 0; i< data.length; i++){
    c_total += data[i].current
    r_total += data[i].regular
 }
//  console.log(c_total, r_total)
 total.innerText = (c_total + ((r_total * 3.85)/100)).toFixed(2)
//  console.log(data);



