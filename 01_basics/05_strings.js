const name = "Jatin"
const repoCount = 50

// console.log(name + repoCount + "Value"); => Not recommended it's out dated

console.log(`Hello my name is ${name} and repo Count is ${repoCount}`);

const gameName = new String("Jatin-Gupta-Coms")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // => converts whole string in upper case.
console.log(gameName.charAt(2)); // => shows the character at position 2.
console.log(gameName.indexOf("t")) // => shows the index value of the character. 
const newString = gameName.substring(0,3) // => it will slice the string and gives the ouput till n-1.
console.log(newString);
const anotherString = gameName.slice(-4, 3)// => it is like substirng only just it can accept negative value aslo.
console.log(anotherString);
const newStringOne = "   Jatin    ";
console.log(newStringOne);
console.log(newStringOne.trim()) // => it will eliminate extra spaces.
const url = "https://jatin.com/jatin%20gupta"
console.log(url.replace("%20", "-")); // => it will replace the first assigned value with the second given value.
console.log(url.includes("jatin")) // => it will check wheather this value is present or not and return boolean.
console.log(gameName.split("-")); // => it will split the strings according to the terminator value. Here "-"