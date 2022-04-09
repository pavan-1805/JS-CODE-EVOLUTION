const sum = (a,b,c) => {
    return (a+b+c);
}
// console.log(sum(1,2,3)) => console.log(sum(1)(2)(3))


const curryFunc=(normalFunc)=>{
    return (a)=>{                         //return curried version of func
        return (b) => {
            return (c) => {
                return normalFunc(a,b,c)
            }
        }
    }
}

const curriedSum = curryFunc(sum);
console.log(curriedSum(1)(2)(3));


const add1 = curriedSum(1);
const add2 = add1(2);
const add3 = add2(3);
console.log(add3);