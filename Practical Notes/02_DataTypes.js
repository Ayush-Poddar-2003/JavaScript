//  DATATYPES
/**
 * NUMBER
 * STRING
 * BOOLEAN
 * NULL => Standalone value 
 * UNDEFINED
 * SYMBOL => Unique
 */

console.log(typeof NULL) //undefined
console.log(typeof undefined) //undefined

//------------CONVERSIONS---------------

let a = "69"
console.log(a); //69
console.log(typeof(a)) //string

let num = Number(a)
console.log(num); //69
console.log(typeof(num)); //number

a = "69A"
let num2 = Number(a)
console.log(num2); //Nan
console.log(typeof(num2)) //number !! Some errors in js as no number


/**CONVERSION
 * ""=>FALSE
 * "ASKDFAS" => TRUE
 * 0 -> TRUE
 * 1 => FALSE 
 * */