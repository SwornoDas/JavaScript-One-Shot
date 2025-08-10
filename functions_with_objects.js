function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(100, 200, 400));

const user = {
    username: "sworno",
    prices: 199,
    // cart: [100, 200, 300]
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and prices is ${anyobject.prices}`)
}

handleObject(user);
handleObject({
    username: "sworno",
    prices: 233
});
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400, 400, 600]));

