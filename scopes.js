//scopes of the program

// var c = 30000

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   c = 30;
  //   var c = 30;
  console.log("INNER: ", a);
  function addnum() {}
}

// for (let i = 0; i < 5; i++) {
//   let a = 100;
//   const b = 200;
//   //   c = 300;
//   //   var c = 300;
//   console.log("LOOP: ", a);
// }

console.log(a);
// console.log(b);
// console.log(c);
// console.log(a, b, c);

// ***********Nested scopes *********//

function one() {
  const username = "Sworno";

  function two() {
    const website = "YouTube";
    console.log(username);
  }
  //console.log(website) // This will throw an error because 'website' is not defined in this scope
  two();
}
// one();

if (true) {
  const username = "sworno's";
  if (username === "sworno's") {
    const website = " youtube channel";
    // console.log(username + website);
  }
  // console.log(website)
}
// console.log(username); // This will throw an error because 'username' is not defined in this scope

// +++++++++++++++++ Inssterestion ++++++++++++
console.log(addone(5))
function addone(num) {
  return num + 1;
}


// console.log(addTwo(5)); 
// This will throw an error because 'addTwo' is not defined yet
const addTwo = function (num) {
  return num + 2;
};



