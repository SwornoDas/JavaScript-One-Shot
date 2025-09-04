// while loops
let index = 0;
while (index <= 10){
    console.log(`The value of index is ${index}`);
    index = index + 2;
}

// while (2==2){
//     console.log('This is an infinite loop');
// }

let myArray = ["apple", "banana", "cherry"];
let arrIndex = 0;
while (arrIndex < myArray.length) {
    console.log(`The value of arrIndex is ${myArray[arrIndex]}`);
    arrIndex = arrIndex + 1;
} 

// do while loops
let score = 11;
do {
    console.log(`score ${score}`);
    score = score + 1;
} while (score <= 10);