const arr = [1,2,3,4,5];
function MyMap(arr, callback){
    for (let i = 0; i < arr.length; i++) {
        let newarr = [];
        // const element = array[i];
        newarr.push(callback(arr[i],i,arr));
    }
    return newarr;
}

let ans = MyMap(arr, function(val){
return val+2;
})

console.log(ans);