console.log("string and num comp");
console.log("2" >1);
console.log("02">1);
//these will give true as the js itself converts the strings iinto numbers
console.log("null and 0 comp");
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//only 3rd giviing true as the js converted the null into 0 in third only 
console.log("undefined and 0 comp");
console.log(undefined ==0);
console.log(undefined>0);
console.log(undefined<0);

console.log("strict check")
//=== is used for strict check means , it checks both datatype and value to be compared with other
console.log("2"===2);