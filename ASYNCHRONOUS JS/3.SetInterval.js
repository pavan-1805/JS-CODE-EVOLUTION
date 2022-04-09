console.log("SET INTERVAL");

// setInterval(() => {

// }, interval,'param1','param2',......);
setInterval(() => {
  console.log("running for every 5000 milli seconds");
}, 5000);

console.log(" ");
const greet = (name, age) => {
  console.log(name, age);
  console.log(`HIIII RA ${name}, ${age}`);
};
const timer = setInterval(greet, 5000, "pavan sai garu", 24);
clearInterval(timer)      // should need to add on onClick function
