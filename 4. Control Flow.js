// if else else-if
// switch case
// early return pattern

if(12){
    console.log("Truthy Value");
} else{
    console.log("Falsy value");
}

switch (1) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
}

// write a function that takes a student marks and return the grade based on the logic

function GETGRADE(score){
    if (score >= 90 && score <= 100){
        console.log("Grade Recieved is A");
    } else if (score >=80 && score <90){
        console.log("Grade Recieved is B");
    } else if (score >=70 && score <80){
        console.log("Grade recieved is C");
    } else if(score >=60 && score <70){
        console.log("Grade Recieved is D");
    } else {
        console.log("Failed hogaya bhadwa")
    }
}
GETGRADE(59);

//Rock Paper Scissor Logic
function rps(User, Computer){
    if(User == "rock" && Computer == "paper") return "Computer Won";
    if(User == "paper" && Computer == "scissor") return "Computer won";
    if(User=="scissor" && Computer =="rock") return "Computer Won";
    if (User == "paper" && Computer == "rock") return "User Won";
    if (User == "scissor" && Computer == "paper") return "User Won";
    if (User == "rock" && Computer == "scissor") return "User Won";
    if (User === Computer) return "Draw";
}

console.log(rps("rock","scissor"));
