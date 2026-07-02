const name = "abhra"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());//removes the white spaces from the start and end


const url = "https://abhra.com/abhra%20mukherjee"

console.log(url.replace('%20', '-'))

console.log(url.includes('abhra')) 

console.log(gameName.split('-')) //splits the string into an array based on the separator provided


