const name ="Akansha"
const repoCount=50
console.log(name +" "+ repoCount + " Value" );
//we will not use this syntax ...we wil use back ticks (string interpolation)

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount} `) //string interpolation

// const name ="Akansha"  string declaration method one
//here we use objects of javascript and give name in its constructor here object is String ans Constructor is (`  `) inside back ticks is name or value of the variaable

const gameName = new String('Akansha-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);//to access all the prototyppes or properties of strings 
//some of the protypes are used below
console.log(gameName.length);//accessing the length of string
console.log(gameName.toUppeerCase);//it didnt changed the original value
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4) // return a substring // we cant use negative index in it if you write (-8 ,4 ) still it will give substring from (0 , 4)
console.log(newString);
const anotherString = gameName.slice(-10,4) //here -10 is equivalent to 0 and the second index is exclusive
console.log(anotherString);

// *****************
//TRIM , REPLACE
const newStringOne = "   Akansha   "
console.log(newStringOne);
console.log(newStringOne.trim());
// it is usually used when we want to ignore the spaces that are entered by the user by mistake , except the password  , also can use separartely as trimStart() ans trimEnd()
const url = "https://akansha.com/akansha%20Sindhu"
console.log(url.replace('%20' ,'-'));
console.log(url.includes('akansha'));


// *********************
// convert string into array on based on some special character 

console.log(gameName.split('-'));
//split.('separatot','limit'):syntax


