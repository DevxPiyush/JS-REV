let obj = {}; // blank object
let object = {
    name: "Hello",
    age: 26,
    khaana: "Daal chawal",
};
// how to access the object
console.log(object.name);
console.log(object['name']);

//nested objects
let object2 = {
    name: "Piyush",
    age: 29,
    address: {
      city: 'kalmeshwar',
      latitude: 24.04,
      district: "Nagpur",
    },
};
//access objects from this nested objects
console.log(object2.address.city);
//accessing properties from this nested objects
//using object destructuring
let{city,latitude,district} = object2.address; // printing will give us value and even we can  access individual values using
console.log(city, latitude, district); // or can be done individually

// methods of looping in objects
// 1] for in -> this is used to access the key values only
for(let key in object2){
  console.log(key); // o/p as name, age, address (nested here)
};
// to access the value of keys in the object -> use this
for (let key in object2){
    console.log(key, object2[key]); // not object2.key as it will search for the value named as key in the object2 and if not found will return us the error only hence using this thing
}
// 2] using Object.keys
console.log(Object.keys(object2)); // logs the object2 keys in the form of array
// 3] using the object.entries
console.log(Object.entries(object2)); // gives an array of array jisme sab proerties stored ho

//copying the value of a object into another
// spread operator
let newobject = {...object}; // copied but doesn't work for nested objects as the reference is copied
console.log(newobject);
// using deep clone method
// this acts as follows , convert the object into string then string ko parse karke naye object me store kardo
let anotherobj = JSON.parse(JSON.stringify(object2));

//optional chaining -> agar object me kisi property ki spelling change hojaye and we are still accessing to error aata hai, instead optional chaining se hume value undefined aayega instead of error
let something = {
    name : "Piyush",
    age: 89,
    addressed : "yo yo honey singh"
};
//using optional chaining now
console.log(something?.address); // logs as undefined

//computed properties
let role = "admin";
let roles = {
    name: "Piyush",
    age : 21,
    address: {
        city: "Chandrapur"
    },
    [role]: "Piyush",
};
console.log(roles); // adds up another proeerty as -> admin : Piyush

//pratice - create an object for a student with name, age and isEnrolled

let student = {
    name: "Piyush",
    age: 20,
    status: "isEnrolled",
};

