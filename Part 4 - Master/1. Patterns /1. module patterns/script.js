//module pattern
//iife - immediately invoked function expression -> aisa function jo turant call ho raha hai 

// let fnc = (function(){
// return 12;
//})(); 
// yeh directly idhr called ho gaya and without explicit call krne ke badle

let Bank = (function(){
    let bankbalance = 12000;
    function Checkbalance(){
        console.log(bankbalance);
    }
    function withdrawAmount (val){
        if (val<=bankbalance) {
            bankbalance-=val;
            console.log(bankbalance);
        }
    }
    function newBalance(val){
        bankbalance = val;
    }

    return{
        Checkbalance,
        withdrawAmount,
        newBalance,
    }
})();

// agar main return nhi karvata toh main kuch bhi baahr access nhi kr paata tha means ki IIFE hume values private banane me help karti hai.
// return karne pe hum values bahar access kr skte hai
