// # Primitive datatypes

// & types : String, Number, Boolean, null, Undefined, Symbol, BigInt, 

const score = 100
const score2 = true
// const score3:Number = 100 only for typescript

const scoreValue = 1000.34
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('134');
const anotherId = Symbol('134');

console.log(id === anotherId); // false

const bigNumber = 45454545454555454545455545554n;


// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
//( Non Primitive)

// Array, Object, Function

const heros = ["Shaktiman", "Doga", "Chotabjim"];
let myObj = {
    name: "Sworno",
    age: 22,
    Education: "BCA"
}
console.log(myObj)

const myFunction = function() {
    console.log("Hello Galaxy")
}

console.log(typeof myFunction);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof outSideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3


