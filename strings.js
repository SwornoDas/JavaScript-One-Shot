"Hello" + "World"
const name = "Sworno"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

console.log("Hello")
const gameName = new String('sworno-das');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('w'));


const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString2 = "  sworno  "
console.log(newString2.trim());
// 
const url = "https://sworno.com/Sworno%20das"
console.log(url.replace('%20', '_'));

console.log(url.includes('sworno'));

console.log(gameName.split('-'));

