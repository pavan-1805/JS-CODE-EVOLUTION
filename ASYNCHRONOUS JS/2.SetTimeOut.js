console.log("SET TIME OUT");
// setTimeout(() => {

// }, timeout,'param1','param2',.....);

setTimeout(() => {
  console.log("waited for 5000 milli seconds");
}, 5000);

console.log(" ");
const greet = (name, age) => {
  console.log(name, age);
  console.log(`HIIII RA ${name}, ${age}`);
};
const timer = setTimeout(greet, 5000, "pavan sai garu", 24);
// clearTimeout(timer);
