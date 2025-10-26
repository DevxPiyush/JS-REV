//scope -> scope means ki variable ya fir functions kaha tak use kr skte hai apan
// see the below code for eg.

function abcd() {
    var a = 30;
}
console.log(a); // gives output that a is not defined

function abcsef() {
    let a = 10;
    let b = 20;
    const c = 30;
    var d = 70;
}

// execution context -> yeh function ek box me jayega and vo box me saare function ke variables, codes etc sab store honge (memory phase) and then execute honge (execution phase) inside the box and yeh box hota hai execution context.
// yeh content thoda abstract hai (hypothetical)

// three type of scoping -> functional scoping, block scoping and global scoping
// js -> only lexical scoping support krta hai.
// execution context and closure are theorotical concepts that are written in the notes !!