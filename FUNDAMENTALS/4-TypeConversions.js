// TWO TYPES
// 1. IMPLICIT CONVERSION:- javascript itself will automatically convert the type
// 2. EXPLICIT CONVERSION:- manually need to convert

console.log("IMPLICIT CONVERSIONS");
console.log(2 + "3"); //OP: string ----> CONCATINATION
console.log(2 - "1"); //OP: Number ----> SUB
console.log(2 * "3"); //OP: Number ----> MUL
console.log(4 / "2"); //OP: Number ----> DIVISION

console.log("2" + 2); //OP: string ----> CONCATINATION
console.log("2" - 1); //OP: Number ----> SUB
console.log("2" * 3); //OP: Number ----> MUL
console.log("4" / 2); //OP: Number ----> DIVISION

console.log("2" - "1"); //OP: Number ----> SUB
console.log(typeof ("2" - "1")); //OP: Number ----> SUB

console.log("pavan" - "sai"); //OP: NaN
console.log("2" - null); //OP: Number ----> SUB
console.log("2" - undefined); //OP: NaN

console.log("EXPLICIT CONVERSIONS");
console.log(Number('100')); //OP: Number ----> 100
console.log(Number('')); //OP: Number ----> 0
console.log(Number(false)); //OP: Number ----> 0

console.log(parseInt('100')); //OP: Number ----> 100
console.log(parseFloat('10.01')); //OP: Number ----> 100


console.log( String(100));  //OP: string ----> '100'
console.log(typeof(String(100)));  //OP: string ----> String
console.log( String(true));  //OP: string ----> '100'
console.log( String(null));  //OP: string ----> '100'
console.log( String(undefined));  //OP: string ----> '100'


console.log((100).toString());  //OP: string ----> '100'
console.log(typeof((100).toString())); //OP: string ----> String



console.log(Boolean(100));   //OP: true
console.log(Boolean(1));   //OP: true
console.log(Boolean(0));   //OP: false
console.log(Boolean(null));   //OP: false
console.log(Boolean(undefined));   //OP: false
console.log(Boolean(''));   //OP: false