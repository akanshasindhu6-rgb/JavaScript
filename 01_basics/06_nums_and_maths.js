const score = 400
const balance = new Number(100)
console.log(balance);
console.log(balance.toString()); //convert the number to string 
console.log(balance.toString().length); //finds the length of the string 
console.log(balance.toFixed(2));//after decimal it will make precision till mentioned value eg. of 100 it will make 100.00 used in ecommerce site 

const otherNumber =23.894874
console.log(otherNumber.toPrecision(3));//it will give a number with 3 significant digits 23.894874 to 23.9 , of 123.8966 to 124 as precision is fixed to 3 digits only and of 1123.8968 to 1.12e+3
//priority decimal ke phle mil rhi hai 

const hundreds = 1000000
console.log(hundreds.toLocaleString());//it willmake number easier to read from 1000000 to 1,000,000 it is according to us standards 
//for indian number system use console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++MATHS++++++++++++++++++
console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.3)); // round the value to nearest 
console.log(Math.ceil(4.4)); //give nearest upper value
console.log(Math.floor(4.2)); // gives nearest lower value 
console.log(Math.min(4, 3 ,6 ,7));
console.log(Math.max(4 ,3 ,6 ,7));
console.log(Math.random()); //gives a random value between 0 and 1 inclusively
console.log((Math.random()*10)+1); //shift the decimal and values will be like 0.53545 , 3.4555 , to avoid case like 0.0475 we will do a +1 so the min value is 1 now not 0

//to get a number without digits after decimal use floor function
console.log(Math.floor((Math.random()*10) +1));
const min =10 
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);