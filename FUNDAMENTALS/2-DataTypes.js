console.log("DATA TYPES");
//Dynmically typed language which means if we store one kind of data into variable and we can over write with another type
// like
let  x = 10;
x='pavan'
console.log('X:',x);

// PRIMITIVE
// Number
// Boolean
// String
// Undefined
// Null
// BigInt
// Symbol

// NON-PRIMITIVE
// Objects
// Arrays

//=====STRINGS========
const name = "pavan";
const midName = "sai";
const lName = `kali`;

//=====NUMBERS========
const a = 0;
const b = 3.14;

//=====BOOLEAN========
const isLogin = true;
const isUserLogin = false;

//=====UNDEFINED========
let value;
console.log("value", value);
const res = undefined;
console.log("res", res);

//=====NULL========
const data = null;
console.log("data", data);

//=====OBJECTS========(collection of values)

const myObj = {
  fName: "PAVAN SAI",
  lName: "KALISHETTI",
  age: 24
};
console.log('OBJECTS:',myObj.fName);

//=====ARRAYS========
const myArr = [1,2,3,'pavan','sai']
console.log('ARRAYS:',myArr[3]);