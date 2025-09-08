let arr = [1,2,3,4,5];
let mark1 = [1,2,3,4,5];
console.log(mark1);

let marks = [1,2,3,4,5];
console.log(marks[0]);
//modify array
marks[2] = 9;
console.log(marks[2]);

//Arrays Methods
arr.push(700);
console.log(arr);
arr.pop(5);
console.log(arr)
arr.shift();
console.log(arr);
arr.unshift(55);
console.log(arr);
arr.splice(2,2);
console.log(arr);
let newar = console.log(arr.slice(0,3));
console.log(arr);
arr.reverse();
console.log(arr);
let sorted = arr.sort(function (a,b) {
    return a-b; //ascending
    return b-a; //decending
});

arr.forEach(function (val) {
    console.log(val);
    console.log(val + 5);
});

//map sirf sab use karna hai jab aapko ek naya array banana hai pichle array ke data ke basis par
// map dikhte hi sath mann me ek blank array bana liya karo
let newarr = arr.map(function (val) {
    return 12;
});
console.log(newarr);

// filter -> works like map but ye array me se values nikal kr deta hai (filter krta hai)
let pattern = [1,2,3,4,5,6,7,8,9];
pattern.filter(function (val) {
    // return true; // saare valeus naye array me jayenge
    if (val > 4) return true;
});

// reduce -> pure array ko ek value me niptana
let newPattern= pattern.reduce(function (accumulator, val){
    return accumulator + val; // pura array add hoke ek single value add karega
},0);

//find -> array ka vo pehla banda jo defined condition satisfy karega vo answer rhega
let findpat = pattern.find(function (val) {
   return val === 2;
});

// every -> return true if every conditon is satisfied in the array
let evepat = pattern.every(function (val) {
   return val > 0; // every element of array is more than 0 hence true else false
});

// some -> return true if any element of the array satisfies the condition
let somepat = pattern.some(function (val) {
   return val > 5 ;
});

// deconstruction and spread operator
let [a,b,c,,d] = pattern; // this is deconstruction

let newpattern = [...pattern]; /// this is spread operation
