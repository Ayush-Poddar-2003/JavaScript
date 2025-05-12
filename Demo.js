// console.log(typeof(23));
// console.log(typeof(23.25));
// console.log(typeof(NaN));

// console.log(5 / 0); // Infinity
// console.log(typeof(Infinity));

// console.log(-5 / 0); // -Infinity
// console.log(typeof(-Infinity));

// console.log(Boolean("AnyString"));
// console.log(Boolean(69));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(Infinity));

// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// let bigNum = 123456789012345678901234567890n;
// console.log(bigNum);  // 123456789012345678901234567890n
// console.log(typeof(bigNum));

// let x = null;
// console.log(x); //null
// console.log(typeof(x)); //object

// const car = {
//   brand: "Toyota",
//   year: 2023
// };

// console.log(car.brand); //Toyota
// console.log(car["year"]); //2023
// delete car.brand;
// console.log(car.brand); //undefined

const student = {
  name: "Ayush",
  introduce() {
    return `Hi, I'm ${this.name}`;
  }
};
