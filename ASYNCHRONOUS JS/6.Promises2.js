console.log('STATIC METHODS of PROMISES: all, allsettled, race');

const promise1 = Promise.resolve(3);
const promise2 = 24;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 5000,'PAVAN SAI');
})
const promise7 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 2000,'PAVAN SAI');
})

// Promise.all([promise1,promise2,promise3,promise7]).then(value=>console.log(value))       //it will wait till all promises return values

Promise.allSettled([promise1,promise2,promise3,]).then(value=>console.log(value)) //it will wait till all promises return values, it will give full detail about all promises whether they settled or not, OR it will show the status of all promises


const promise4 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 5000,'PAVAN');
})
const promise6 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000,'DURGA');
})
const promise5 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000,'SAI');
})

// Promise.race([promise4,promise5,promise6]).then(value=>console.log(value)) //it wont wait for all promises fullfilled....if one promise is fullfilled before remaining promises it will execute that value