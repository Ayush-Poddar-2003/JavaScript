/**STACK
 * Used in Primitive DT
 */

let a = "Ayush"
let b = a
b = "Aditi"

console.log(a); //No changes in a if any made in b
console.log(b); 

 /* 
 * HEAP
 * Used in Non Primitive DT
 */

let ayush = {
    height : 5,
    weight : 65
}

let aditi = ayush //they both point to same memory

aditi.height = 6 //changes will be reflected in both

console.log(ayush);
