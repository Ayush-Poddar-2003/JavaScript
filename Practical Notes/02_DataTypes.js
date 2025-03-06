//  DATATYPES

/* PRIMITIVE DATATYPES -
 * NUMBER
 * BIGINT
 * STRING
 * BOOLEAN
 * NULL => Standalone value 
 * UNDEFINED
 * SYMBOL => Unique
 */

/* NON PRIMITIVE :-
 * ARRAY
 * OBJECTS
 * FUNCTIONS
 */

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
console.log(typeof(num2)) //number !! Some inbuilt errors in js as no number

/**CONVERSION
 * ""=>FALSE
 * "ASKDFAS" => TRUE
 * 0 -> TRUE
 * 1 => FALSE 
 * */

//-------------------------
console.log(typeof NULL) //undefined
console.log(typeof undefined) //undefined
//-------------------------

//SYMBOL => Uniqueness
const id = Symbol("123")
const id2 = Symbol("123")

console.log(id === id2); //false despite being same values
