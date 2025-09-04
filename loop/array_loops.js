// for of

["", "", "", ""][({}, {}, {}, {})];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set('FR', "France");
map.set("US", "United States");


console.log(map);

for (const [key, value] of map) {
    console.log();
    console.log(`${key}':-' ${value}`);
}

// const myObject = {
//     game1: 'The Legend of Zelda',
//     game2: 'Super Mario Bros',
//     game3: 'Minecraft'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-' ,value);
// }
