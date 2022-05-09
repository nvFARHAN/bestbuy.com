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

 console.log(data)


