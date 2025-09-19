// document.querySelector("#abc").addEventListener("mouseover", function () {
//     document.querySelector("#abc").style.backgroundColor = "yellow";
// });
//
//
// document.querySelector("#abc").addEventListener("mouseout", function () {
//     document.querySelector("#abc").style.backgroundColor = "red";
// });
let abcd = document.querySelector("#abc");

window.addEventListener("mousemove", function (dets){
   abcd.style.top = dets.clientY + "px";
   abcd.style.left = dets.clientX + "px";
});