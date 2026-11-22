//Dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//in js month starts from 0 ie. 0 = jan

// let myCreatedDate = new Date(2023 ,0, 23)

// let myCreatedDate = new Date(2023, 0, 23, 5 ,3 ) it will give our created time as well

// let myCreatedDate=new Date("2023-01-14")

// jab yy/mm/dd vale format me likhte hai toh month 1 se hi start hota hai in india we prefer dd/mm/yy
 
let myCreatedDate = new Date("22-11-2026")
console.log(myCreatedDate.toLocaleString());
let myTimeStamp =Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()); //month start from 0 except in dd/mm/yy format 

console.log(newDate.getDay()); // day start from monday