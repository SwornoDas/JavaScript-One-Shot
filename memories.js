// Stack (Primitive), Heap (Non-Primitives)

let myYoutubeChannel = "Arcade Project"
let anothername = myYoutubeChannel
anothername = "New Channel Name"
console.log(anothername)
console.log(myYoutubeChannel)

let FirstUser ={
    email : "user@sworno.com",
    upi: "8878787@ybl"
}

let SecondUser = FirstUser

// let SecondUser = {
//     email: "email@email.com",
//     upi: "123@ybl"
// }

SecondUser.email = "sworno@google.com"


console.log(FirstUser)
console.log(SecondUser)