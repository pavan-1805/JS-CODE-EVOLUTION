// For
// while
// Do...While
// For...of

// for (let index = 0; index < 10; index++) {
//     console.log('ITERATION:'+index);
// }

// let index = 1;
// while (index<10) {
//     console.log('ITERATION:'+index);
//     index++;
// }

// let index = 11;
// do {
//   console.log("ITERATION:" + index);
//   index++;
// } while (index < 10);

const arr = [1,2,3,4,5,6]
// for (const iterator of arr) {
//     console.log("ITERATION NUMBER:" + iterator);
// }

// arr.forEach(element => {
//     console.log(element);
// });

for (const i in arr) {
    console.log('i',i);
    // if (Object.hasOwnProperty.call(arr, i)) {
        const element = arr[i];
        console.log(element);
        
    // }
}
