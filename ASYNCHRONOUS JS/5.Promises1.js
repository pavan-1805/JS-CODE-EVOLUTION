console.log("PROMISES:-promises has ejector function which accepts two values (resolve and reject), if promise fullfilled it reloves if not means its rejected. will resolve call 'then' block reject call 'catch' block");
console.log(' ');
const promise = new Promise((resolve, reject) => {       //...CREATING PROMISE AND STORING INTO A VARIABLE
  setTimeout(() => {
    let arr = [1, 2, 3, 4, 5];
    resolve(arr);
    reject("REJECTED");
  }, 5000);
});

const getData = (rollNum) => {                //...RETURNING PROMISE
  return new Promise((resolve, reject) => {
    setTimeout(
      (roll_Num) => {
        const data = {
          name: "pavan",
          age: 24
        };
        resolve(`my ${roll_Num} and my data is ${data.name} ${data.age}`);
        reject("NO DATA");
      },
      5000,
      rollNum
    );
  });
};

// promise
//   .then((response) => {
//     console.log("RESPONSE:", response);
//     getData(response[1])
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log("ERROR:", error);
//   });

// .................OR.............

promise
  .then((response) => {
    console.log("RESPONSE:", response);
    return getData(response[1]);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });






// let n = 10;
// let string = "";

// for (let i = 2; i <= n; i++) {
//   // printing star
//   for (let j = 0; j < i; j++) {
//     if(i === n) {
//       string += "*";
//     }
//     else {
//       if (j == 0 || j == i - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);

// var i, j, k;
// for(i=1; i<=10; i++)
// {
//  for(j=1; j<=10; j++)
//  {
//   if(j <= i)
//    document.write(j);
//   else
//    document.write("&nbsp;&nbsp;");
//  }
//  for(k=10; k>=1; k--)
//  {
//   if(k > i)
//    document.write("&nbsp;&nbsp;");
//   else
//    document.write(k);
//  }
//  document.write("<br>");
// }



// let n = 5;
// let string = "";
// // Upside pyramid
// // downside diamond
// for (let i = 1; i <= n - 1; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//       if (k === 1 || k === (n - i) * 2 - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//     string += "\n";
//   }
// // upside diamond
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     if (k === 0 || k === 2 * i - 2) {
//       string += "*";
//     }
//     else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }

// console.log(string);

// function xStar(){
//     for (let i = 0; i < 5; i++) {
//         for(let j = 0;j<5;j++){
//             if(i===j||i+j===5){
//                 procrss.stdout.write('*');
//             }else{
//                 procrss.stdout.write(' ');
//             }
//         }  
              
//     }
//     procrss.stdout.write('\n');
// }
// xStar();
// document.write("<br>")

// let n = 5

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === j || i+j==n+1) {
//             document.write("* ");
//         }
//         else {
//             document.write("  ");
//         }
//     }
//     document.write("<br>");
// }


    // let n =5;
    
    // for (let row = 0; row < n; row++) {
    //     for (let column = 0; column < n; column++) {
    //         // console.log(column);
    //         console.log(n - 1 - row);
    //         // let s=row + column;
    //         if (row == 0 || row == n-1 || column  == row + 1 ) {
    //             document.write("* ");
    //         }
    //         else{
    //             document.write("  ");
    //         }
    //     }
    //     document.write("<br>");
    // }

// let a = [1,2,3,4,5]
// let b = [1,2,3,8,9]
// var c = [];
// let result = []
// a.map(ele=>{
//     b.map(val=>{
//         if(ele===val){
//             c.push(ele)
//         }
//     })
// })

// console.log(c);


// let res =[];
// let j =0;
// for(let i =0;i<a.length;i++){
//     j+=a[i]
//     res.push(j)
// }
// console.log(res);




