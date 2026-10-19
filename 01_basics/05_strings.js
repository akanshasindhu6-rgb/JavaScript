const name ="Akansha"
const repoCount = 50
console.log(name +" "+ repoCount +" value");// bad syntax use backticks string interpolation
console.log(`Hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`);
//string ke ander constructor me naam dekr bhi string declare krte hai 
const gameName = new String('Akansha')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
