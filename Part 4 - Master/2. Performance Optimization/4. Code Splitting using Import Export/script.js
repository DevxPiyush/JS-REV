let btn = document.querySelector("button")
btn.addEventListener("click", async function(){
    let heavyfunction = await import("./heavy.js");
    heavyfunction.heavy();
})