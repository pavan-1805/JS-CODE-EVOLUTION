console.log("ASYNC and AWAIT keywords");
console.log(
  " the async word is used to declare async functions \n Unlike normal functions, async functions always returns a promise"
);

console.log("NORMAL FUNCTON");
const greet = () => {
  return "Hi ra pavan";
};
// console.log(greet());

console.log(" ");
console.log("ASYNC FUNCTON");
const greett = async () => {
  return "Hi raa pavan";
};
// console.log(greett());     //without then block

const greettt = async () => {
  return Promise.resolve("Hi raa pavan");
};
// greettt().then(val=>console.log(val))

console.log(
  "==================================================================="
);
console.log("ASYNC - AWAIT");
console.log(
  "AWAIT: await will use only in async functions, not in normal functions. it will wait until the promise resolves"
);

const asyncFunc = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async with await");
    }, 5000);
  });
  let result = await promise;
  // console.log('result:',result);
};
// console.log(asyncFunc());

console.log(
  "==================================================================="
);
const resolveHello = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("HELLO");
    }, 2000);
  });
};

const resolveWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("WORLD");
    }, 1000);
  });
};

console.log("SEQUENTIAL EXECUTION");
const sequentialStart = async () => {
  const hello = await resolveHello();
  console.log(hello);

  const world = await resolveWorld();
  console.log(world);
};
// sequentialStart();    //2+1=3 seconds

console.log("CONCURRENT EXECUTION");
const concurrentStart = async () => {
  const hello = await resolveHello();
  const world = await resolveWorld();

  console.log(hello);
  console.log(world);
};
// concurrentStart();   //2 seconds

console.log("PARALLEL EXECUTION");
const parallelStart = async () => {
  await Promise.all([
    (async () => console.log(await resolveHello()))(),      //it logs after 2 second
    (async () => console.log(await resolveWorld()))()     //it logs after 1 second
  ]);
  console.log('finally');
};
parallelStart();
