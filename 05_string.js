const name = "Ranju"
const repoCount = 50

// console.log(name + repoCount + "Value");      this is outdated in recent times 


console.log('Hello my name is ${name} and my repo count is ${ repoCount} ');

const gameName = new String('ranju')

console.log(gameName[0]) ;
console.log(gameName.__proto__) ;

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-3 ,4)
console.log(anotherString) ;

const newStringOne = "  Ranju   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','_'))
console.log(url.includes('ranju'))