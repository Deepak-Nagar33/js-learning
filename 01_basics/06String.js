const name = "Deepak"
const repCount = 50
//  console.log(name+ repCount + "value"); this is not right way to write string

// we can do like this by using  backticks "`"

// console.log(`Hello my name is ${name} and my repo count is ${repCount} and the value is "value"`);

const gameName = new String('Deepak-nagar')
// console.log(gameName.toUpperCase());
console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));
// const newString = gameName.substring(0, 4)
// console.log(newString);
// it will return Deep and  will not include the fourth number 
const anotherStrong = gameName.slice(-11, 4)
console.log(anotherStrong);
// TRIM, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
const newStringOne = "   Deepak    "
console.log(newStringOne);
console.log(newStringOne.trim());

// REPLACE

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String%20replace"
console.log(url.replace('%20','-'));
console.log(url.includes('mozilla'));
console.log(gameName.split(''));
/*
    need to go through the string methods

*/ 