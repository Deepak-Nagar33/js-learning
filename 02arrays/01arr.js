//arrays
/*
IN javaScript array-copy operations -: IT ALWAYS MAKE SHALLOW COPIES
 ("shallow copies:") 
 (A shallow copy of an object is a copy whose 
properties share the same references (point ) means 
ITS IN HEAP MEMORYS,
 
deep copies: DEFINATION
(A deep copy of an object is a copy
 whose properties do not share the same references
 "NEED CONFORMATION"=(ITS IN STACK MEMORY ) (point)).
*/
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// console.log(myArr2[1]);

// ARRAY METHODS
// myArr.push(6) //               .push will add value into array 
// // console.log(myArr);
// myArr.push(7, 8)
// myArr.pop() //                 it will remove the last value of array without checking anything

// // myArr.unshift()
// myArr.shift()
/*
UNSHIFT ADD VALUE AT FIRST OF YOUR ARRAY
AND SHIFT WILL REMOVE THE FIRST VALUE FROM ARRAY 
BUT ITS NOT OPTIMIZED 
*/
// console.log(myArr.includes(9));        // METHODS IN JS LIKE ASKING IS THERE 9 IN THIS ARRAY
// console.log(myArr.indexOf(9))          // WE'LL GET -1 BECAUSE IT DOSE NOT KNOW ITS THERE OR NOT

// const newArr = myArr.join()       //Adds all the elements of an array into a string, separated by the specified separator string
// console.log(myArr);
// console.log(newArr);


//SLICE , SPLICE

console.log("A ", myArr);
const myTest = myArr.slice(1, 3)

console.log( myTest);

console.log( "B ", myArr);

const myTest1 = myArr.splice(1,3)
console.log( "c ", myArr);

console.log(myTest1);


/*
DIFFERENCE BETWEEN SLICE AND SPLICE 
SLICE IS NOT MANIPULATE THE ORIGINAL VALUE 
SPLICE WILL MANIPULATE THE ARRAY IT WILL WILL 
  TAKE OUT WHOLE RANGE ASSING IN OPERATION(1,3)

  OUTPUT :
  console.log("A ", myArr);
  A  [ 0, 1, 2, 3, 4, 5 ]
  console.log( myTest);
   [ 1, 2 ]
  
   console.log( "B ", myArr);
 B  [ 0, 1, 2, 3, 4, 5 ]

  console.log( "c ", myArr);
   c  [ 0, 4, 5 ]
   console.log(myTest1);
   [ 1, 2, 3 ]
*/



