# <center> OBJECTS
An object is a collection of key-value pairs.  
The keys are called properties, and values can be any data type (string, number, array, function, even another object).

```JS
const obj = {
  key1: value1,
  key2: value2
};
```
For eg
```js
const car = {
  brand: "Toyota",
  year: 2023
};

//Accessing
console.log(car.brand); //Toyota
console.log(car["year"]); //2023

//Deletion
delete car.brand;
console.log(car.brand); //undefined
```