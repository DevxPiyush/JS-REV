// hum jo bhi letter type kare voh screen pe aaye
// approach -> we will use window
// hum screen pe type kr rhe hai koi input field nhi hai isleye

window.addEventListener("keydown", function (dets) {
    if (dets.key === " "){
        document.querySelector("h1").innerText = "SPC";
    } else{
        document.querySelector("h1").innerText = dets.key;
    }
});