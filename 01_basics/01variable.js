const accountId = 144580
let userEmail = "deepak0123@gmail.com"
var accountPassword = "1234@deep"
 accountCity = "jaipur"

//  accountId = 2 can not be change because its const
userEmail = "sometest@gmail.com"
accountPassword = "ooo00098989"
accountCity = "manipur"

/*
prefer not to  use var
because of block scope and functional scope issue
*/
 console.log(userEmail,accountPassword,accountCity);

 
 console.table([userEmail,accountPassword,accountCity])
 