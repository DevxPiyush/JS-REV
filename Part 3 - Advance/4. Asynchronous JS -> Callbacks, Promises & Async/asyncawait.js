let pr = new Promise(function (res,rej) {
    setInterval(() => {
        let rn = Math.floor(Math.random() * 10);
        if (rn>5) res("Resolved at :" + rn);
        else rej("Rejected at " + rn);
    }, 1000);
    
});
async function abcd() {
    try {
        let val = await pr;
        console.log(val);
    } catch (err) {
        console.log(err);
    }
}
abcd();