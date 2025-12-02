// humne yeh ek blueprint banaya and fir using the keyword this we called everything
function createPencil(name, price, color, company){
this.name = name;
this.price = price;
this.color = color;
this.company = company;
}
let newpencil = new createPencil("Nataraj", 10, "red", "itc");
let newpencil2 = new createPencil("Apsara", 10, "black", "itc");
console.log(newpencil);
// ek nayi baat -> ek function me this ki value window hoti hai par using new keyword, ek blank object create hone ke wajah se function ke this me hume ek blank object chla jaega and fir hum values de skte hai.

