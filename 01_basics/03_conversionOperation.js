let score = "30abc"
// const {score }= req.body
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber);

/* when we convert anumber "33"= 33 it will easily convert
but when we convert "33abc" = NaN we'll get this  not a number

true = 1; false =0

*/
 let isLoggedIn = ""
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);
// 1= true ;
//  0 = false 
// "" = false 
// "deepak" = true


let someNumber = 33
let stringNumber =  String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);