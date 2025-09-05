// function type 1
function chacha (){
    // this type is function declaration
    console.log("dance");
    console.log("dance");
}

chacha();

// function type - 2
let func = function (){
    // this type is function expression
    console.log("hui hui");
}
func();

let xyx =()=>{
    console.log("Hello world");
}
xyx();

//argument and parameters
function add (v1,v2){ // v1 and v2 are parameters
    console.log(v1 + v2)
}
add(10,20); // 10 and 20 are arguments

// default rest and spread parameters

// default -> we provide default value as 0
function f(x =0 ,y = 0) {
    console.log(x, y);
}
f();

//rest -> ... this three dots are used
function abcd (... x){
    console.log(x);
}
abcd (1,2,3,4,56,7,8);

function noob (a,b,c, ...p){
    console.log(a,b,c,p);
}
noob("Kareya", "chintu", "hotka", "matata","panipuri","chawal","daal");

// return and early return
// return mtlb jaha se aaya wahi daal dena
function ibk(){
    return 12;
}
let val = ibk();
console.log(val);

function sample (v5){
    return 13 + v5;
}
let quety = sample(56);
console.log(quety);

// first class function
let bjhzb = function(){}

// higher order function
function jvbk(){
    return function p (){
        console.log("booyah");
    }
}
console.log(jvbk());

function jbczkj(vall){
    console.log("Hello world");
}
jbczkj(function(){
    console.log("Heyyyyyyy");
})

// pure and impure functions
let yu = 14;
// pure functions -> not change in any outside property
function bjhzv(){
    console.log("Heyyyyyyyyyyyyy");
}
bjhzv();
//impure function -> change in outside things (eg variable yu)
function nvmb(){
 console.log(++yu);
}
nvmb();

// closures and lexical scoping
// closure -> ek function jo return karega ek aur function and return hone wala function hamesha use karega parent function ke koi variable ko
function f1() {
    let hhh = 15;
    return function () {
        console.log(hhh);
    }
}
f1();
// lexical scoping -> scoping of variable inside a function
function jbk(){
    let v = 12;
    function defg(){
        let jj = "kkkk";
        function cznb(){
            let jbd = "XBXmjBMJHX";
        }
    }
}

(function (){}) (); // this is IIFE (Immediately Invoked Function Expressions)

// hoisting difference in declaration and expression
// declaration -> hoisting works very well
hjjj();

function hjjj(){
    console.log("Hello world");
}

//expression -> hoisting doesn't works
// jkkjk();
//
// let jkkjk = function (){
//     console.log("Hello world"); //Cannot access 'jkkjk' before initialization
// }

// convert this function into arrow function
// function multiply (ll,mm){
//     console.log(a*b);
// }
// multiply(10,20);
let multiply = (ll,mm) => {
    console.log(ll*mm);
}
multiply(10,20);

// use rest parameter to accept any value and return total
function getScore(...score){
    let total = 0;
    scores.forEach(function (val){
        total = total + val;
    });
    return total;
}
getScore(10,20,30,40,50,60,70);