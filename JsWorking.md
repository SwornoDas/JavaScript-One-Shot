// JavaScript Execution Context

// {} Global EC
        // this
// Global Execution Context
// Function (Fuctional) Execution Context
// Eval Execution Context

// {} -> Memory Creation Phase
    // -> Excution Phase

Eg,
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
} 
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


***********************************


1> Global Execution
        this
2> Memory Phase
    val1 -> undefined
    val2 -> undefined
    addNum -> defination

result1 -> undefined
result2 -> undefined

3> Excution Phase
val1 <- 10
val2 <- 5
addNum ->
        new variable
        environment
            +
        Execution
                Thread
        result1 = 15
        result2 = 
Memory Phase
val1 -> undefined
val2 -> undefined
total -> undefined
    |
Excution Context
num1 -> 10
num2 -> 5
total -> 15

