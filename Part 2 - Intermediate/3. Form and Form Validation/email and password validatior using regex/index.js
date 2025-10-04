let email  = document.querySelector("#email");
let password = document.querySelector("#password");
let from = document.querySelector("form");

from.addEventListener("submit", function(dets){
dets.preventDefault();

// this is regex code 
// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password validation regex
// At least 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*&]{8,}$/;
let emailans = emailRegex.test(email.value);
let passwordans = passwordRegex.test(email.value);
if (!emailans) {
    document.querySelector("#message").textContent = "Email is incorrect";
    document.querySelector("#message").style.display = "initial";
};
if (!passwordans) {
    document.querySelector("#message").textContent = "Password is incorrect";
    document.querySelector("#message").style.display = "initial";
};
});