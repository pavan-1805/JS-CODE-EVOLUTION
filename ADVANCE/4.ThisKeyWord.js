console.log("THIS KEY WORD");
console.log(
  "“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object"
);
console.log(
  "in Java Script there are four ways of invoking a function and determine the value this key word"
);
console.log(
  " 1.implicit binding \n 2.explicit binding \n 3.new binding \n 4.default binding"
);

// console.log(" ");
// console.log("IMPLICIT BINDING");
const person = {
  fname: "pavan",
  lname: "kalishetti",
  age: 24,
  func: function fullName() {
    return `${this.fname} ${this.lname}`;
  },
  fullName: function () {
    return `${this.fname} ${this.lname}`;
  }
};
// console.log(person.func());
// console.log(person.fullName());

// console.log(" ");
// console.log("EXPLICIT BINDING");

function fullName() {
    return `my name is ${this.fname} ${this.lname}`;
  }
// console.log(fullName.call(person));
// console.log(details.func());
// console.log(details.fullName());


// console.log(" ");
// console.log("NEW BINDING");
function personn(name){
    this.name = name
}
const p1 = new personn('PAVAN');
// console.log(p1.name);



// console.log(" ");
// console.log("DEFAULT BINDING");
globalThis.fname='KALYAN'                      //DEFAULT BINDING
globalThis.lname='KALYAN'                      //DEFAULT BINDING
console.log(fullName());