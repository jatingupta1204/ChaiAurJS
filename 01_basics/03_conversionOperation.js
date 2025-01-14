let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abce" => NaN
// true => 1; false => 0
// Null => 0
// undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Jatin" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// ---------------------OPERATIONS--------------------------------

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2); // Add
console.log(2-2); // Subtract
console.log(2*2); // Multiplication
console.log(2**2); // Power
console.log(2/2); // Divide
console.log(2%2); // Remainder

let str1 = "Hello"
let str2 = " Jatin"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; // => first give output than increment
console.log(gameCounter);

++gameCounter; // => first increment then give output