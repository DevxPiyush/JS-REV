// this is using asynchronous programming, for more details look onto notebook
// console.log("Hello world1");
// console.log("Hello world2");
// let a = setInterval(() => {
//     console.log("Hello world3");
// }, 2000);
// // clearInterval(a);
// console.log("Hello world4");

// callback function and callback hell, callback pattern
// function ke andar function is callback function (andar means as a parameter not as a value inside the code or argument)
function profilekekraao(username, callbackfunction){
    console.log("fetching profile totally")
    setTimeout(() => {
        console.log(`the username is ${username}`);
        callbackfunction({_id : 12345 ,username, age: 26,email: "huihui.com"});
    }, 2000);
}
function saarepostlekraao(id, callbackfunction){
    console.log("the posts are as follows : ")
 setTimeout(()=>{
    callbackfunction({_id: id, posts : ["hey", "hello", "how are you"]});
 }, 2000);
}

function savedpostsnikallo(id, callbackfunction) {
    console.log("the saved posts are as follows : ");
    
    setTimeout(()=>{
        callbackfunction({_id: id, savedposts: ["hey", "good morning"]});
    },2000);
}
profilekekraao("piyush agroya", function (data) {
    console.log(data);
    saarepostlekraao(data._id, function (posts) {
        console.log(posts);
        savedpostsnikallo(data._id, function(saved){
            console.log(saved);
        })
    })
});
