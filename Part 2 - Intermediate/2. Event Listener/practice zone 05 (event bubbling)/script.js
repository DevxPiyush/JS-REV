document.querySelector("#nav").addEventListener("click", function (){
    alert("clicked");
});

document.querySelector("ul").addEventListener("click", function (dets) {
    dets.target.classList.toggle("lt");
});

