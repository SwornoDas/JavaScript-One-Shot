// Arrays

const myArr = [1, 2, 3, 5, 4, 6, 7]
console.log(myArr[0]);

const myHeros = ["Spider-Man", "Iron Man", "Thor", "Hulk"];
console.log(myHeros[3]);

const myVillains = ["Green Goblin", "Loki", "Thanos", "Ultron"];
console.log(myVillains[2]);

const myArr2 = new Array(1, 2, 3, 4, 5, 6);
console.log(myArr2[0]);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers[3]);


// Array methods 
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


// Slice, Splice, 
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);


// **************  Part 2 ************
console.log("Part 2");
const myArr3 = [1, 2, 3, 4, 5, 6];
console.log(myArr3);


const marvel_heros = ["Spider-Man", "Iron Man", "Thor", "Hulk"];
const dc_heros = ["Superman", "Batman", "Wonder Woman", "Flash"];


// marvel_heros.push(dc_heros);
// console.log(marvel_heros[4][3]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(another_array);

const real_new_heros = another_array.flat(Infinity);
console.log(real_new_heros);

console.log(Array.isArray("Sworno"));
console.log(Array.from({name: "Sworno"})); // Interstion array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1));
// console.log(Array.of(score2));
// console.log(Array.of(score3));


console.log(Array.of(score1, score2, score3 ));

