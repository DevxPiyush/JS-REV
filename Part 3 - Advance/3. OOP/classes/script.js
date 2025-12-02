class CreatePensill {
    constructor(name,company, price, color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
        this.role = "user";
    }
    checkRole(){
        console.log(`you are a `+ this.role);
    }
    write(text){
        let H1 = document.createElement ("h1");
        H1.textContent = text;
        H1.style.color = this.color;
        document.body.appendChild(H1);
    }
}
// this is classical inheritance -> inheritance of one class into another 
class newPencil extends CreatePensill {
    constructor (name, company, price, color){
        super(name, company, color, price, color);
        this.role = "admin";
    }
     erase(){
        document.querySelectorAll("h1").forEach((elem)=>{
            elem.remove();
        })
    }
}

let pencill = new CreatePensill("nataraj", "itc", 10, "red");
let pencill2 = new CreatePensill("nataraj", "itc", 10, "grey");
let pencill3 = new newPencil("apsara","itc", 99, "blue");

// prorotypical inheritance -> inheritance from one object to another object
let coffee = {
    color: "dark",
    drink: function () {
        console.log("gut gut gut")
    }
};
// inheritance of coffee prop into javacoffee (coffee ka prototype judd gaya javacoffee)
let javacoffee = Object.create(coffee);
console.log(javacoffee);