console.log("CALL BACKS");
console.log(
  "A function that passed as a argument to a function is called callack"
);
console.log(
  "the function which accepts a function as an argument or return a function is called HIGHER ORDER FUNCTION"
);

const gret = (name) => {
  //   console.log(`Hiii ${name}`);
};

const greetPavan = (greetFn) => {
  const name = "pavan";
  greetFn(name);
};

greetPavan(gret);

//IN DETAIL
const greeting = (name) => {
  // console.log(`Hiii ${name}`);
};

const higerOredrFun = (callback) => {
  const name = "pavan";
  callback(name);
};

higerOredrFun(greeting);

console.log("TWO types: Synchronous and Asynchronous");
console.log(
  "SYNCHRONOUS CALL BACKS: A callback is executed immediately is called SYNCHRONOUS CALL BACKS"
);
console.log("EXAMPLES:");
const arr = [1, 2, 3, 4, 5, 10, 7, 8, 9, 6];

const sorting = arr.sort((a, b) => a - b);
// console.log(sorting);

const mapping = sorting.map((val) => val * 10);
// console.log(mapping);

const filtering = sorting.filter((val) => val % 5 === 0);
// console.log(filtering);

console.log(
  "ASYNCHRONOUS CALL BACKS:which is used to continue or resume code of execution after an asynchronous operation has completed"
);
console.log(
  "these CallBacks are used to delay the execution of a func until a particular time"
);

console.log("EXAMPLES:");
console.log("setTimeout and setInterval and EVENT HANDLERS(based on onClick)");

const greet = (name, age) => {
  console.log(name, age);
  console.log(`HIIII RA ${name}, ${age}`);
};
const timer = setTimeout(greet, 5000, "pavan sai garu", 24);
clearInterval(timer);

const timerr = setInterval(greet, 5000, "pavan sai garu", 24);
clearInterval(timerr);

console.log("PROBLEMS or DRAW BACKS");
console.log(
  "if we have multiple callbacks func where each level depends on the result obtained from the previos level, the nesting of functions.....difficult to read and maintain"
);
console.log('To solve this problem they introduced promises');
