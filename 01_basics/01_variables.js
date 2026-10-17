const accountId=759996
let accountEmail="akanshasindhu@google.com"
var accountPassword ="759996"
accountCity = "Jaipur"
let accountState;
// accountId =2 :not allowed as once the value is assigned before  in const data type
accountEmail="jahakbakbka.com"
accountPassword= "93868"
accountCity="Bengaluru"
// let accountState; //undefined
console.log(accountId);
// prefer not to use var because of issue in block scope and functional sccope
console.table([accountId , accountEmail, accountPassword , accountCity]);  