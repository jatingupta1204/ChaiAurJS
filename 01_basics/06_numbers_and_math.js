const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // it convert the number into string
console.log(balance.toFixed(2)) // it will fix the value upto 2 decimal points

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); // it will give the precisize value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')); // this will add comas by default it's international



// ------------------------------MATHS-------------------------------------------------

console.log(Math);
console.log(Math.abs(-4)); // it will convert negative value to positive and positive values remain positive.
console.log(Math.round(45.6)); // it will round off the value accordingly.
console.log(Math.ceil(4.2)); // it will always round off to next value.
console.log(Math.floor(4.5)); // it will always remains the same value means no increase or decrease in value.
console.log(Math.min(2,4,6,8,10)); // it will give minimum value.
console.log(Math.max(2,4,6,8,10)); // it will give maximum value.

console.log(Math.random()); // it will give values between 0 and 1. 
console.log((Math.random() * 10) + 1); // it help to get bigger values as it shift one vaule to left.
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);