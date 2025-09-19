// studying event listeners
// kuch bhi action pe kuch reaction ho
// brouwser me page par koi bhi harkat karo event raise ho jayega, kuch screen pe ho aur aapko reaction dena ho toh
// event handle dena chahiye
// event -> action and event listener => action ka reaaction dena

// event -> click
let newevent = document.querySelector("#spann");
newevent.addEventListener("click", function () {
   newevent.style.color = "red";
});

// event -> input
let inputevent = document.querySelector("input");
inputevent.addEventListener("input", function (data) {
    alert("You have typed " + data.target.value); // this shows the value that i typed in the textbox
});

// event -> change -> tab chalta hai jab aapka koi input select ya text area me koi change hojaye
let device = document.querySelector("#device");
let changeevent = document.querySelector("select");
changeevent.addEventListener("change", function (dets){
    device.innerText = dets.target.value;
});

// event -> submit -> jab hum koi form submit kare to yeh karvana padta hai
// see practice zone 03 index.js file

// event -> mouseover and mousemove -> in practice zone 04

// event object -> target,type, preventDefault
/* document.addEventListener("click", function(dets){
console.log(dets)
});

the thing inside function dets -> is the event object
target -> that is the thing on which event has happened
type -> shows the event type, for eg, click
preventdefault -> yeh sbse jyada form me kaam aata hai jab hum koi detaiils submit kare and refresh karne pe sabkuch
 data na chale jaaye isleye (used on practice zone 03)
  */