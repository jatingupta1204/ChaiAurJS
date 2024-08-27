const accountId = 14553
let accountEmail = "jatin@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 ==> not allowed as it is constant 

// prefer not to use var because of issue of block scope and function scope

accountEmail = "jg@gmail.com"
accountPassword = "92929292"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);