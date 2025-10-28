// this keyword -> yeh ek aisa keyword hai jiska value use ke hisaf se change hoti hai

//global scope me dekhe toh
console.log(this);

//function scope
function sbcd (){
    console.log(this);
}

//method scope
let obj = {
    name: "Piyush",
    age: 21,
    sayName: function () {
        console.log(this);
    },
};
obj.sayName();

//event handler pe -> see notes for better reference

//class 
class Abcd {
    constructor(){
        console.log("hehehe");
        this.a = 12;
    }
}
let val = new Abcd();

// here is the summary for value of this
/* for global scope -> it is window
/* for function scope -> it is window
/* method with es5 function -> it is object
/* method with es6 arrow function -> it is window
/* es5 function inside es6 method -> it is window
/* arrow function inside es5 method -> object
/* event handler -> element
/* class -> blank object
*/

let objectifyy = {
    heyname : "Piyush",
    age: 27,
    sayyNamee: ()=> { // arrow function me window isleye ki arrow function hamesh apne parent ki value leta hai and parent toh object hai jo global scope me hai isleye vo window aajayega
        console.log(this);
    },
}
objectifyy.sayyNamee();

// Manual Binding : bind, call and apply
// function ko call krte vkt aap set kr skte ho ki uski 'this' ki value ky hogi
let objecttt = {
    name: "harsh",
};
function xbad(){
    console.log(this.name);
}
// xbad(); // output -> window
// hum aisa chte hai ki yeh output means this ki value window ke badle object ho jaye, fir roll me aate hai bind, call and apply
xbad.call(objecttt); // jo bih object hum pass karenge this ki value vhi ho jayegi

let newobj  = {
    name: "Piyush",
    age: 22,
    year: "FInal",
};

function qwerty(a,b,c){
    console.log(this, a,b,c);
};
qwerty.call(newobj,12,13,15); // op -> { name: 'Piyush', age: 22, year: 'FInal' } 12 13 15

qwerty.apply(newobj, [12,13,14]); // same bss frk yeh h ki isme 2 argument hi ho skta hai pass , one is the object and second is the array, jisme function ke parameters pass ho

let fnc = qwerty.bind(newobj, 12,13,14); // bind property doesn't give any output but it creates a copy of the function, now here it is stored in fnc and then when we call fnc we get the desired result
fnc();