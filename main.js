let submit =document.getElementById("submit");
let choose = document.getElementById("choose");
let login = document.getElementById("login");
let cash = document.getElementById("cash");
let visa = document.getElementById("visa");
let formCash = document.getElementById("form-cash");
let formVisa = document.getElementById("form-visa");


submit.addEventListener("click", function(event) {
    console.log(submit);
    event.preventDefault();
    login.style.display="none";
    choose.style.display="block";
})
cash.addEventListener("click", function(event) {
    console.log(submit);
    event.preventDefault();
    login.style.display="none";
    choose.style.display="none";
    formCash.style.display="block";
})
visa.addEventListener("click", function(event) {
    console.log(submit);
    event.preventDefault();
    login.style.display="none";
    choose.style.display="none";
    formVisa.style.display="block";
})