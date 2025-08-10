myArray = ["S", "D"];
myArray[1];
console.log(myArray[1]);


// Singleton
// object.create

// Object literals
const mySym = Symbol("key11")
const JsUser = {
  // "name": "Sworno Das"
  name: "Sworno Das",
  "full name": "Riya Das",
  [mySym]: "myKey1",
  age: 30,
  location: "Kolkata",
  email: "sworno@example.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
};

JsUser.email = "chat@gpt.com"
// Object.freeze(JsUser);
JsUser.email = "newemail@example.com"; // This will not change the email

// console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); 

JsUser.greeting = function(){
  console.log("Hello Js User!")

}

JsUser.greetingTwo = function(){
  console.log(`Hello Js User!, ${this.name}`);

}
console.log (JsUser.greeting());
console.log (JsUser.greetingTwo());



