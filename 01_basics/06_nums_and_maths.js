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
