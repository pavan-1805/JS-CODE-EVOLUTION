//SCOPES: BLOCK,FUNCTION,GLOBAL

//BLOCK SCOPE
// if (true) {
//   const fname = "pavan";
//   console.log("IF BLOCK:", fname);
// }
// console.log("OUTSIDE IF BLOCK:" + fname);

//FUNCTION SCOPE
// const funcName = () => {
//   const fName = "pavan sai";
//   console.log("FUNCTION BLOCK:" + fName);
// };
// funcName()
// console.log("OUTSIDE FUNCTION BLOCK:" + fName);



//GLOBAL SCOPE
const a = 10;
if(true){
    // let a = 110;
    console.log('INSIDE IF:',a);
}
