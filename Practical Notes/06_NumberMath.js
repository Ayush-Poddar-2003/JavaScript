const num1 = 69

// ensuring number
const num2 = new Number(69)

// MANY FUNCTIONS-

//------------MATH--------------
console.log(Math) //Object [Math] {}
console.log(Math.random()) // b/w 0 and 1
console.log(Math.random()*10) // b/w 0 and 9
console.log(Math.random()*10+1) // b/w 1 and 10
console.log(Math.floor(Math.random()*10+1)) // whole numbers

// Between a range
const max = 50
const min = 21

console.log(Math.floor(min + ( Math.random()*(max-min+1) ) ))