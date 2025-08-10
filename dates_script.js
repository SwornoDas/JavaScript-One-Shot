// Dates

let myDate = new Date();
console.log(myDate);
console.log("brack");
console.log(myDate.toString());
console.log("brack");
console.log(myDate.toLocaleString());
console.log(typeof myDate);

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

console.log("brack");
let myCreatedNewDate = new Date (2000, 5, 18);
let myCreatedNewDate1 = new Date (2000, 5, 18, 5, 3)
let myCreatedNewDate2 = new Date ("2023-01-14")
let myCreatedNewDate3 = new Date ("01-12-2023")

console.log(myCreatedNewDate.toDateString());
console.log(myCreatedNewDate1.toLocaleString());
console.log(myCreatedNewDate2.toLocaleString());
console.log(myCreatedNewDate3.toLocaleString());


console.log("brack");
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedNewDate.getTime());

console.log(Math.floor(Date.now()/1000)); // Convert to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay()+ 1);

// `${newDate.getDay()+1} and the time ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}
console.log("Brack")
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'UTC'
})



