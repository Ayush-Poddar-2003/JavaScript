let myDate = new Date()

console.log(myDate); //2025-02-22T21:44:38.013Z
console.log(myDate.toString()); //Sun Feb 23 2025 03:15:24 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sun Feb 23 2025
console.log(myDate.toISOString()); //2025-02-22T21:47:36.641Z
console.log(myDate.toJSON()); //2025-02-22T21:47:36.641Z
console.log(myDate.toLocaleString()); //23/2/2025, 3:17:36 am

//----------CUSTOMIZED DATE-------------

const favDate = new Date(2026, 0, 14)
console.log(favDate.toDateString()); //Wed Jan 14 2026
//Hence in Js months starts from 0