// usecase : private counters, encapsulation

// private counter
function countforme() {
    let c = 0;
    return function () {
        c++;
        console.log(c);
    }
}
let fnc = countforme();
fnc();
fnc();
fnc();
fnc();

let fnc2 = countforme();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();

//encapsulation -> kaam ki cheezo ko dikhana rest hide karna

function clickLimiter() {
    let click = 0;
   return function(){
       if (click<5) {
        click ++;
        console.log("clicked : " + click + " times");
    }
    else{
        console.log("Limit Exceeded, try after sometimes");
    }
   }
}
let clickss = clickLimiter();
clickss();
clickss();
clickss();
clickss();
clickss();
clickss();