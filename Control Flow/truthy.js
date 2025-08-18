const userEmail = [];

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, "", null, undefined, NaN, BigInt 0n,
// truthy values
// true, 1, -1, " ", "0",'false', {}, [], function(){}, BigInt 1n,

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1);

// Terniary Operator

// condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")