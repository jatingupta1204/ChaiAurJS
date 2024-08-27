console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); // => it will result in false because it will not get converted into number.
console.log(null >= 0); // => it will result in true because comparision operations convert the value to numbers.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === Strict Check

console.log("2" === 2); // => it will result in false as it also check the datatype and do not convert it accordingly.