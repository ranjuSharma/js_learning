const accountId = 144895
let accountEmail = "ranjusharma714@gmail.com"
var accountPassword = "12345"
accountCity = "kanpur"
let accountState;

//accountId = 2 //not allowed


accountEmail = "rs@rs.com"
accountPassword = "74648747"
accountCity = "lucknow"


console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId , accountEmail,accountPassword,accountCity,accountState])
