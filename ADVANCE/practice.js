// const a = [{'name':'pavan',age:'24'},{'name':''},{'name':'sai',age:''},{'name':''},{'name':''}]
// let b = [{'name':''},{'name':''},{'name':''},{'name':''},{'name':''},{'name':''},{'name':''},{'name':''}]
// let i = 0;
// a.forEach(element => {
//     console.log(element);    
//     if(element.name && element.age){
//         console.log(element.name);
//         b[i].name = element.name
//         i++
//     }else if(element.name){
//         console.log('else if');
//     }
// });
// console.log('bb:',b);



const arr = [{name:'pavan'},{name:''},{name:'sai'}] //QOP
let res = arr.filter((ele)=>{
    if(ele.name){
        return ele
    }
})
console.log('Before:',res);

if(res.length != 5){                                     //NON WEB SELL
    for (let index = res.length; index < 5; index++) {
        res.push({
            name:''
        })
    }
}
console.log('After:',res);


const brr = [{name:''},{name:''},{name:''},{name:''},{name:''},{name:''}];
let j = 0
res.map((item)=>{
    console.log('item',item);
    brr[j].name = item.name
    j++;
})
console.log('BRR:',brr);