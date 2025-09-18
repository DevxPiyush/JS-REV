// hum chahte hai ki upload file pe click krte hi humara input field work kare

let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
   //document.querySelector("#file").style.display = "flex"; //  yeh nhi krna hai
    // hume ye karna hai ki click karne pe hum file upload  kr skte like inout me krte the vaisa ekdm same
    document.querySelector("#file").click(); // mai click button pe karunga par click vo input me ho jayega
});

//ab jab main file koi upload karu toh main chta hu ki naam us file ka aaye naa ki still vo upload button dikhe
document.querySelector("#file").addEventListener("change", function (dets){
    btn.innerHTML = dets.target.files[0].name;
});