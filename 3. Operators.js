// arithmetic, comparsion, logical, assignment, unary, ternary

//arithmetic operatiors- +,-,/,*,%,**
console.log(2**3); // gives power
console.log(6%2); // gives reminder

//comparison operators =,==,===,!=,!==,>=,<,>,<=
// = -> value daalna -> assignment operator
let a = 12;
// == and === these are actual comparison operators
// === is strict equal and the == operator does not check the type of the stuffs (not strict comparison)
console.log(12!=13);
console.log(12!="12"); // not strict comparison -  12 not equals to string 12 but this is less strict
console.log(12!=="12"); // strict comparison -  12 not equals to string 12 hence it is true

//assignment operator -> = , assigns value to a variable or etc

//logical operators -> &&(and and) and || (or or) or -> koi ek true to pura true , and -> both should be true
// checking where any number is truthy or falsy
console.log(!!12); //true

//unary operators - applicable on single value -> +,-,typeof,++,--
// converting a string into a number
console.log(typeof(+"12"));
console.log((+"Piyush")); // o/p - NaN, type number
//! -> checks the inverted type (truthy ka falsy)
let c = 12;
 // value to turant badhake print karo
console.log(++c);
c++;
console.log(c);

//ternary operator -> ?:
//condition ? true hui ka code : false hui ka code
12>13 ? console.log("brbr hai ekdm ki 12 is greater than 13") : console.log("ekdm galat and 12 is smaller than 13");

//typeof and instance of
//typeof - shows the type of the object or value
console.log(typeof(12));
console.log(typeof(null)); // shows object

let x = [];
console.log(x instanceof Array); // kya x array hai ? if han to true -> checked by instanceof
// instance of -> check krta hai ki kya variable instanceof type
// instance of -> use krte hai apan reference variables ke sath and typeof -> use krte hai mostly primitive values ke sath