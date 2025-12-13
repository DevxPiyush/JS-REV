// let list = document.querySelector("ul");
// for (let i = 0; i < 100; i++) {
//     const li = document.createElement("li");
//     li.textContent = i;
//     list.appendChild(li);
// }


// yeh upar wala tareeka glt hai kyuki is se unnecessary cheezr load ho jayegi jis wajah se website me agar bhot saari cheeze rahi toh website laggy ho jayegi kyuki continues dom tree me changes hote hai, to we use something diff approach ,  isme utna hi ek bar me load karo jitna screen me maximum dikh sake (viewport) me and then use dikhao.

let list = document.querySelector("ul");
const space = document.createDocumentFragment(); // yeh hume memory me ek jagah reserve krk de dega
for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li);
}
list.appendChild(space);