let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

// jab hum form ka submit button select krte hai toh hume yeh dikhta hai ki form referesh hojata hai jis wajah se
// details chale jaate ha-> we want ki refresh karne par kuch na ho means ki refresh na ho 

form.addEventListener("submit", function (dets) {
   dets.preventDefault(); // after reloading the data is secured means not lost
    
let card = document.createElement("div");
card.classList.add("card"); // div named as card added

let profile = document.createElement("div");
profile.classList.add("profile"); // div named as profile added

let img = document.createElement("img");
img.setAttribute("src", inputs[3].value); // inside a profile, img tag added

let h3 = document.createElement("h3");
h3.textContent = inputs[0].value; // inside card, h3 added
let h5 = document.createElement("h5");
h5.textContent = inputs[1].value; // inside card, h5 added
let p = document.createElement("p");
p.textContent = inputs[2].value; // inside card, p added

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(h3);
card.appendChild(h5);
card.appendChild(p);

main.appendChild(card); // inside the main div, card div added

inputs.forEach(function (inp){
    if (inp.type !=="submit") inp.value = "";
});
});