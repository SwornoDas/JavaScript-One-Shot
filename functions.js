function sayMyName() {
  console.log("S");
  console.log("W");
  console.log("O");
  console.log("R");
  console.log("N");
  console.log("O");
}

// sayMyName();
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);

// }
function addTwoNumbers(num1, num2) {
  // let result = num1 + num2
  // console.log("This will not run");
  // return result;
  return num1 + num2;
}

addTwoNumbers(3, "a");
const result = addTwoNumbers(3, 5);

// console.log("Result: ",result);

// function loginUserMessage(username){
//     return `${username} just logged in.`;
// }
// console.log(loginUserMessage("Sworno"))

function loginUserMessage(username) {
    // (username = sam)
  if (username === undefined) {
    // if ("") undefined = false value
    // if (!username)

    console.log("Please enter a username");
    return;
  }
//   return `${username} just logged in.`;
}
// console.log(loginUserMessage(""));
console.log(loginUserMessage());



