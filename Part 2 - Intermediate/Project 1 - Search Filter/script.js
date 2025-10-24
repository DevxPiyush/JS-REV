let users = [
  {
    name: "Amit Sharma",
    pic: "https://images.unsplash.com/photo-1760733345250-6b2625fca116?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=400",
    bio: "Frontend developer passionate about building modern web apps and UX design."
  },
  {
    name: "Neha Verma",
    pic: "https://plus.unsplash.com/premium_photo-1760568436454-37a91f30d202?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
    bio: "UI/UX designer who loves creating intuitive user experiences and visual designs."
  },
  {
    name: "Rohan Gupta",
    pic: "https://images.unsplash.com/photo-1760497925596-a6462350c583?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=400",
    bio: "Backend engineer skilled in Node.js and cloud-based systems."
  },
  {
    name: "Priya Singh",
    pic: "https://images.unsplash.com/photo-1761054172958-bed78dc0e0be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400",
    bio: "Product manager passionate about technology and problem-solving."
  },
  {
    name: "Karan Mehta",
    pic: "https://images.unsplash.com/photo-1760800185531-2b1da99d7538?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=400",
    bio: "Full-stack developer with a love for JavaScript and AI-powered solutions."
  }
];

// saare user show karna 
// filter karna har baar input krne pe
// show karna filtered users

function showUsers(arr){
  
arr.forEach(function (user){
// Create the main card container
const card = document.createElement("div");
card.classList.add("card");

// Create the image element
const img = document.createElement("img");
img.src = user.pic;
img.classList.add("bg-img");

// Create the blurred layer div
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = user.pic;
blurredLayer.classList.add("blurred-layer");

// Create the content div
const content = document.createElement("div");
content.classList.add("content");

// Create the heading
const h3 = document.createElement("h3");
h3.textContent = user.name;

// Create the paragraph
const p = document.createElement("p");
p.textContent = user.bio;

// Append heading and paragraph to content div
content.appendChild(h3);
content.appendChild(p);

// Append all elements to the main card
card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Finally, append the card to the body (or any container)
document.querySelector(".cards").appendChild(card);

});
}
showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
  let newUsers = users.filter((user)=>{
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });
  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
});
