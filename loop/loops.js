// for loops

for (let i = 0; i <= 10; i++){
    const element = i;
    if (element == 5){
        console.log('5 is my favorite number');
    }
    console.log(element);
}


// console.log(index); // index is not defined here


for (let i = 10; i >= 0; i--){
    const element = i;
    if (element == 5){
        console.log('5 is my favorite number');
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++){
    console.log(`Outerloop Value = ${i}`);
   for (let j = 0; j <= 10; j++){
    // console.log(`Outer Loop Value = ${i}, Inner Loop Value = ${j} and inner loop ${i}`);
    console.log(i + ' * ' + j + ' = ' + (i*j));
   }
}

let myArray = ["apple", "banana", "cherry"];
for (let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    if (element == 5){
        console.log('5 is my favorite number');
    }
    console.log(element);
}


for (let i = 1; i <= 20; i++){
    if (i == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`The value of i is ${i}`);
}

for (let i = 1; i <= 20; i++){
    if (i == 5) {
        console.log(`Detected 5`);
        conti
    }
    console.log(`The value of i is ${i}`);
}

