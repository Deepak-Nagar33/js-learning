// // IS JS DYNAMIC  TYPED OR STATIC TYPED ?

// //primitive Data Type

// /* 7 Types : String,
//              Number,
//              boolean
//              null
//              undefined
//              Symbol
//              BigInt 



// reference Data Type(non primitive)

//     array
//     objects 
//     Function
// */

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail ;
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++


/* Stack(primitive)=: we always get copy 
of declared variable

and heap(non-primitive) memorys -: we always get 
refernce of original value 

*/

let myName = "Deepak"
let anotherName = myName
console.log(myName);
anotherName = "lappusasachin"
console.log(anotherName);


  let userOne = {
    email: "qwer@123.com",
    upi: "user@ybl"

  }
  let userTwo = userOne
  userTwo.email = "ANY@google.com"
  userTwo.upi = "any@ybl"
  
//   console.log(userTwo.email);
//   console.log(userTwo.upi);
  console.log(userOne.upi);
  console.log(userOne.email);