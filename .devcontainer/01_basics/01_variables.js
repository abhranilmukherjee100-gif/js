const accountId = 144553
let accountEmail = "acc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212121"
accountCity = "Delhi"
//prefer not to use var bcz of issue in block and functional scope


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

