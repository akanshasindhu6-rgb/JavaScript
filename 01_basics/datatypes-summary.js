//primitive or call by value
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score =100 //= false or =="akansha "  javaScript is a dynamically typed language , it defines datatype according to the value assigned
const scoreValue = 100.3
const isLoggedIn =false
const outsideTemp = null
let userEmail;//undefined value manualy bhii assign kar sakte hai like let userEmail = undefined

const id =Symbol('123')
const anotherId = Symbol('123')
// these both may look same but in reeaal these two are unique and no error independent of each other

console.log(id ===anotherId);
//will be false

const bigNumber = 4438794882n // n lgate hi BigInt ban gaya 


// reference ( Non primitive)
// Array , Objects , Function

const heroes =["shaktiman" , "nagaraj" , "doga"]; //array in square bracket
let myObj ={ 
    name:"Akansha",
    age:20,
}
//objects are in curly braces can be stored directly or in variables like here stored in variable myObj

// function(){} : function ki definition can be stored in a variable

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
//type of function is object function 
console.log(typeof heroes);
console.log(typeof anotherId);

// ********************************
//stack memory =>  used in primitive data types , here we get copy of value ,,,,, heap memory => used in non primitive data types , in this we get reference of original value 

let myYoutubename= "Akansha Sindhu"
let anothername = myYoutubename
anothername="chaiaurcode";
console.log(anothername);
console.log(myYoutubename);
//here only anothername changed as here only copy of myYoutubename was used  //here the primitive data typpes uses stack memory so all the changes will be made to original value

let userOne ={
    email: "user@google.com",
    upi:"user@ybl"
}
//here the function uses heap memory so all the changes will be made to original value
let userTwo =userOne
userTwo.email="Akansha@google.com"

console.log(userOne.email );
console.log(userTwo.email);
//jab userTwo ki email change ki toh userOne ki email bhi change ho gayi : call by reference : heap memory 