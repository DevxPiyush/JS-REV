// factory function pattern
function createProduct(name, price){
    let stock = 10;
    return {
        name,
        price,
        checkstock(){
            console.log(`Total Stock left is ${stock}`)
        },
        buy(qty){
            if(qty<=stock){
                stock -= qty;
                console.log("You have booked " + qty);
                console.log(`quantity left is ${stock}`);
            }
            else{
                console.log("We only have " + stock + " pieces left")
            }
        },
        refill(qty){
           stock +=qty;
           console.log(`refilled the stock - ${stock} pieces now.`)
        }
    }
}

let iphone = createProduct("iphone", "70000");
let kitkat = createProduct("kitkat", "10");
// now use the variables

iphone.buy(5);
kitkat.checkstock();