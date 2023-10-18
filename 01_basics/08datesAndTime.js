// DATES
let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate.toString()); //long but readable 
// console.log(myDate.toDateString()); // short and good
// console.log(myDate.toISOString()); // not readable
// console.log(myDate.toJSON());//not readable
// console.log(myDate.toLocaleDateString()); //much more formated and good
// console.log(myDate.toLocaleString());// date with time 
// console.log(myDate.toLocaleTimeString()); // only time
// console.log(myDate.toTimeString()); // time with something universal
// console.log(myDate.toUTCString());// day time and date 
// console.log(myDate.getTimezoneOffset()); // it gives 0
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("01/16/2023")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()) 
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());// same we can get days month or time 

// console.log(`${newDate.getDay()} and the time is ${newDate.getUTCHours()}`);

newDate.toLocaleString('default',
 {weekday: "long",
 
})
