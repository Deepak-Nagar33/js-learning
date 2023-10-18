const score = 400
const balance = new Number(100)
// console.log( score, balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNumber = 23.765337879797897
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ MATHS +++++++++++++++++++++\

// console.log(Math);
// console.log(Math.abs(-29));
// console.log(Math.round(6.4));
// console.log(Math.ceil(2.3));
// console.log(Math.floor(3.9));
// console.log(Math.pow(3, 3));

console.log(Math.random());// math.random always give values under 0to 1
console.log((Math.random()*10)+1);// when we multiplies it with 10 
                                //it will shift one number but if 
                                //0. something value we get it will make it 0
                                //thats why we are adding 1 so it will never get 0
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+ min)
// math.floor using for single digit to near a floor math.random will
//give us random number and  (max - min + 1) this will give us range 
// + min and this will state that atleast i need this minimum


