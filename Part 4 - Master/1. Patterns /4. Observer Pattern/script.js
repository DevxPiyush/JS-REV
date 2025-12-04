class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, you have subscribed the channel`);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !==user);
        user.update(`you have unsubscribed the channel`);
    }
    notify(message){
        this.subscribers.forEach(sub=> sub.update(message))
    }
}
class User{
    constructor(name){
        this.name = name
    }
    update(data){
        console.log(`${this.name} , ${data}`);
    }
}

let sheryians = new YoutubeChannel();
let user1 = new User("Piyush");
let user2 = new User("Amit");
sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("A new youtube video has been uploaded... ");