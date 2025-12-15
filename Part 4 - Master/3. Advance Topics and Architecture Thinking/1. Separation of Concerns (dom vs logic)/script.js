let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//     const num1 = Math.floor(Math.random() * 10);
//     const num2 = Math.floor(Math.random() * 10);
//     const sum = num1 + num2;

//     let li = document.createElement("li");
//     li.textContent = sum;

//     ul.appendChild(li); // ✅ pass the element, not a string
// });

// yeh jo code upar likha hai voh kharab tareeka hai kyuki usme vo add karna ek logic hai jo ki alag rkhna chahiye taaki hum jab edit kre to bss logic me kre if needed ya fir dom me 

function add(num1, num2){
    return num1 + num2; // yeh mathematical logic hai 
}
btn.addEventListener("click", ()=>{
    const n1 = Math.floor(Math.random()*10)
    const n2 = Math.floor(Math.random()*10)
    let li = document.createElement("li");
    li.textContent = add(n1,n2);
    ul.appendChild(li); 
})
// yeh upar wala code dom ka logic hai
