// DOM NOTES (MAJORLY USE THE CONSOLE OF YOUR BROWSER FOR BETTER IDEATION AND CLARIFICATION)
// DOM - Document Object Modelling -> every html tag is a node, dom me hum us node ko pakad ke manipulate karenge
// and then aayega maza
// lets understand the things -> hume HTML me se element select karke Text Badalna, HTML Badalna, CSS Badalna,
// Attribute manipulation and Event along with event handling

// html file is written
// Step 1] Selecting an element from the html file -> use queryselector, getEelementsbyId, getelementbyclassname
let heading = document.querySelector("h1");
let headingbyid = document.getElementById("thisisid");
let headingbyclass = document.getElementsByClassName("thisisclass");

// 1] Text and Content Manipulation -> innertext, inner HTML, TextContent
document.querySelector("h1").innerText = "Aur bhai kaisi lagi ?";
document.querySelector("h1").textContent = "Mst lagi mujhe toh";
document.querySelector("h1").innerHTML = "<i> HEY </i>" // MANIPULATING THE WHOLE INNER HTML

// 2] Attribute Manipulation
document.querySelector("a").setAttribute("href", "https://www.google.com");
document.querySelector("a").getAttribute("href");

// 3] dynamic dom manipulation
// includes create element, appendchild, prependchild and remove

let newelement = document.createElement("h1");
newelement.innerText = "Hey kaise ho bhai mere" ;
document.querySelector("body").append(newelement);
// this happens in the following way -> first create an element, then append or prepend depending on your choices

// appendchild and prependchild
let newelementindiv = document.createElement("h2");
newelementindiv.innerText = "This is heading of size 2";
//adding inside the div
// document.querySelector("div").appendChild(newelementindiv); // adds as last of div
document.querySelector("div").prepend(newelementindiv);

// 4] updating the style
document.querySelector("h1").style.color = "cyan";