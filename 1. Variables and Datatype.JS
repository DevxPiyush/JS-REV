// VARIABLES AND DECLARATIONS
// var let and const
//var gets attached to window
var a; // initialisation
a= 10; // declaration 
// var is function scoped and the variable can be reinitialised again and again
let w = 25;
const c = 50; // constant declaration, whole code-> no change
// we will always use let not var because var was incooperated at es5 and not used in es6


/**scope(global,block, scope)*/
// block scope - inside a curly braces{}
// functional scope - inside a function

var d = 75; //global scope
{
    let g = 75; // block scopt
}

function hello(){
    var k = "badhiya"; //function scoped
}



//Reassignment and redlaration

var a= 10;
a = 25; // this is reassignment or updation
var a = 37; // thisis redeclaration

//redclaration is not possible with let (for a variable not using the let keyword again and again)


//temporal dead zone
