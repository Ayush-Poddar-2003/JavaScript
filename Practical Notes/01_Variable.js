// VARIABLES

/*
* The var keyword was used from 1995 to 2015(ES5).
* The let and const keywords were added in 2015(ES6). */

const accountId = 69
let accountEmail = "ayushpoddar1603@gmail.com"
var accountPassword = "12345"
accountCity = "New Delhi" //nothing in start

// Rather than printing everything one by one
console.table([accountId, accountEmail, accountPassword, accountCity])

// MODIFICATIONS ?
// accountId = 5 //Not allowed changes in constants
accountEmail = "aditiYadav@gmail.com"
accountPassword = "98765"
accountCity = "Delhi"
console.table([accountId, accountEmail, accountPassword, accountCity])


/*----------------------------

Var is not prefferd as it has scope issue*/
{
    var x = 2;
}
// x CAN be used here

{
  let x = 2;
}
// x can NOT be used here

/*----------------------------*/

// With let you cannot do this:
let x = "John Doe";
let x = 0;
//but with var can 

/*----------------------------*/

let a
var b
console.table([a, b]) //both undefined