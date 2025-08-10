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

console.log("Part 22222222222222222");

//************************* Objects Part 2 ********************/
// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123qwe"
tinderUser.name = "John Doe"
// tinderUser.age = 28
// tinderUser.location = "New York"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = { 
  email: "sworno@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sworno",
      lastname: "Das"
    }
  }
};


console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = Object.assign(obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
  {
    id: 123,
    email: "swornol@gmail.com",

  },
  {
    id: 456,
    email: "john.doe@gmail.com",
  }
];

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const obj11 = {1: "a", 2: "b", 3: "c"};
obj11[4] = "d";