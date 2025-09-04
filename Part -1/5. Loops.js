// created when we want to repeat any operation
// for while do-while for each

// for loop -> kaha se jaana hai -> kaha tak jaana hai -> kaise jaana hai (eg going from 1 to 50)
// kah se jaana hai -> kab rukna hai -> kaise jaana hai -> while loop (eg. tabtak chalna jabtak hello print na ho jaaye)

// for loop
// for (start; end; change){
// }
for (let i = 1; i < 101 ; i++) {
    console.log("hui hui");
    console.log(i);
}

//while loop
// while (end){
//     //code
//     change
// }
let j = 1;
while(j<32){
    console.log(j);
    j++;
}

//do while loop -> ek baar toh bhi chalega atleast
let i = 1
do {
    console.log(i);
    i ++;
} while (i<39);

// break and continue
for (let k = 0; k < 201 ; k++) {
    console.log(i);
    if (i ===32){
        break;
    }
}

for (let l =0; l<201 ; l++){
    if (l === 32) {
        continue; // agle number pe jaaiye means 32 print nhi hoga
    }
console.log(l);
}

// pratice question
// table of 5
for (i=1; i<=10; i++){
    console.log("5 x "+i+"="+5*i);
}
// even numbers from 1 to 20
 for (i=0;i<21;i++){
     if (i%2===0){
         console.log(i);
     }
 }
// odd number from 1 to 20 using while loop
let a = 0
while (a<21){
    if (a%2 != 0 ){
        console.log(a);
    }
    a++;
}
//print first five odd numbers from 1 to 100
let count = 0
for (i = 0;i<100;i++){
    if (i % 2 == 1){
        count ++;
        console.log(i);
    }
    if (count === 5){
        break;
    }
}