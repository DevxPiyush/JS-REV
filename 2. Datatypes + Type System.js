//data types - data ka type

// primites and reference

// primitive -> aise sari values jinko copy karne par tumhe ek real copy mil jaye
//string, number, boolean, null, undefined, symbol, bingint

// reference -> inko copy karne par real copy nhi milegi but aapko reference milega parent ka
//arrays[], object{}, functions()

let a = 12; // this may be primitive or reference but here the number is thier hence it is number

let b = [1,2,3,4];
let c = b;
c.pop(); // change in b made

//String - '' - single quotes, "" - double quotes ,``- backticks
//12 - number, 12.3 - number
//true or false - boooleans data type

// null - jan mujh kr koi value nhi dena
//undefined hai aapne ek variable banaya and use koi value nhi di to jo value by default mili hai vo hai undefined

// symbol -> unique immutable value create karta hai
//future me hum koi liberaries use krenge ab is case me kai baar kuch fields hoti hai jinse similar hum bhi bana dte hai aur galti se humair banayi hui fields ki library ki original fields ko change kr deta hai
// how do we do it ?
let u1 = Symbol("uuid");
let u2 = Symbol("uuid");

console.log(u1 == u2);
console.log("Hello world");

console.log(Number.MAX_VALUE);

//Dynamic Typing -> js me static typing nahi hai and yaha par hai dynamic typing jiska mtlb hai ki aap data ko change kr skte ho kyuki yahabpar dynamic data types hai
//type of quirks (eg. typeof null === 'object');
console.log(typeof null); // gives as object
console.log(typeof NaN); // gives number as o/p - why?, gives failed number opration eg 5*piyush = NaN

//type coercion (== vs ===)
// concept jisme aapka ek type automatically convert ho jayega
 console.log("5" + 1); // concatenate hogaya yeh and idhr me jo number 1 tha voh string me convert hogaya
console.log("5" - 1); // idhr me minus kaam hi ek krta hai voh hai ghatana means ki "5" will be converted into number

// truthy vs falsy
// o, false, "" , null, undefined, NAN, document.all - this is falsy values rest all is true
//e.g.
console.log(!!0); // prints false - due to its falsy nature
console.log(!!75); // prints true due to its truthy nature

//pratice
console.log(true + false);
