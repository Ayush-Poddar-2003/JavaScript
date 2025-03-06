const arr = [0, 1, true, "Ayush"]

// If we copy array it shares same reference point(shallow copy)

arr.push(9)
arr.unshift("Aditi") //adds in starting, not preferred as shifitng occurs

console.log(arr); //[ 'Aditi', 0, 1, true, 'Ayush', 9 ]

//----------------------------

const arr1 = [2, 4, 6]
const arr2 = [1, 3, 5]

// arr1.push(arr2); 
console.log(arr1); //[ 2, 4, 6, [ 1, 3, 5 ] ]

//Better choice
const arr3 = arr1.concat(arr2)
console.log(arr3); //[ 2, 4, 6, 1, 3, 5 ]

//other method
const spreadArr = [...arr1, ...arr2]
console.log(spreadArr);

//---------------------

const arr5 = [1, 2, [3, 4], 5, [6, 7]]

