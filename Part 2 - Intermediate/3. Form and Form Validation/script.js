let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    if(nm.value.length <= 2) {
        document.querySelector("small").style.display = "initial";
    }
    else{
        document.querySelector("small").style.display = "none";
    }
});

//inline form validation -> this shows that some field is requried -> writing <input required placeholder = "name" type = "name"> -> the required shows the thing that this is reequired