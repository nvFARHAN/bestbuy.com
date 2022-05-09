document.querySelector("button").addEventListener("click",myotp);
    
function myotp () {
    var input = document.querySelector("#otpnumber").value
    event.preventDefault()
    if (input=="321")
     {
        alert("Payment Successfull")
        window.location.href= "home.html"
     }
     else {
        alert("OTP is Incorrect")
     }
}