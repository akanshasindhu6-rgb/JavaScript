let score = "33abc" // in this line we know that the score contain a number
// const {score}=req.body // but this line will not show that the data type of the score is number or string 
let temperature =null
let power = undefined
let success = true
let sum="49"

console.log(typeof score);
console.log(typeof (score));
console.log(typeof temperature);
console.log(typeof power);
console.log(typeof success);

let valueInNumber = Number(score)// initially whatever is the datatype is of score now it is converted to a number

let successInNumbe = Number(success)

let sumInNumber = Number(sum)
console.log(typeof valueInNumber); //33abc cant be converted to a number
console.log(valueInNumber);//will give not a number because 33abc is not a number ..NaN
console.log( successInNumbe);
console.log(sumInNumber);

//"33" => cpnverted to 33
//"33abc"=> NaN
//true=> converted to 1 ; false =>vonverted to 0
let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//FOR BOOLEAN:
//value =1 => return true ; 0=> converted to false
//""=> return false
//"Akansha"=>return true

let someNumber =33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//  *************** operations ***************//
let value =3
let negvalue = -value
console.log(negvalue);
let str1= "Hello"
let str2 = "Akansha"
let str3 = str1 +str2;
console.log("1" +2);
console.log(1 +"2");
console.log("1" +2 +2 );
console.log(1 +2 +"2");
//dont use messy code in real life , use parenthesis for readability 
console.log(+true); //plus se conversion ho jata hai but dont make it difficult to read , readaability should be high 
console.log(+"");
let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2 // readability should maiintain
let gameCounter = 100
gameCounter++;
console.log(gameCounter);
 