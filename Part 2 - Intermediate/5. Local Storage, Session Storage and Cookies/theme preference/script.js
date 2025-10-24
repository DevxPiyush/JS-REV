function setdarkoflight(){
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
document.body.classList.add("dark");
document.body.classList.remove("light");
}
else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}
}

setdarkoflight();
if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
} else{
    setdarkoflight();
}

window
.matchMedia('(prefers-color-scheme: dark)')
.addEventListener ("change", function(){
 setdarkoflight();
});

let btn = document.querySelector("#toggle-theme");

btn.addEventListener("click", function(){
    if(document.body.classList.contains("dark")){
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
} else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
}
});
