// // its importsnt to clear your timer (setinterval one) when the work is done otherwise it will continue going and then memory will get full

// let count = 0;
// let int = setInterval(() => {
//     if (count<=10) {
//         count++;
//         console.log("hello world")
//     } else{
//         console.log("still chal raha hai")
//     }
// }, 500);


// ab dekh is codeme humne if block tbtk hi chala jbtk uska condition tha parantu timer to still chal rha hainna jis wajah se if condition na met hone ke wajah se hamesha else block chalega and vo infinitely chalta rhega, to elseme timemr clear krna zaroori hai

let count = 0;
let int = setInterval(() => {
    if (count<=10) {
        count++;
        console.log("hello world")
    } else{
        clearInterval(int);
        console.log("still chal raha hai") //clear hogaya timer idhr me
    }
}, 500);

