const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);

// Array Methods 

myArr.push(6) // it will push the value at the end of the array.
myArr.push(7)
myArr.pop() // it will delete the last value of the array.

myArr.unshift(9) // it will add value at the beginnning of the array.
myArr.shift() // it will pop the first value of the array.

console.log(myArr.includes(9)) // it will return boolean value and tells whether the give value is present in the array or not.
console.log(myArr.indexOf(2)) // it will tell the index value of the given value if the value is not present in the array it will result in -1.

const newArr = myArr.join() // it will join the values and convert it into string.
console.log(myArr);
console.log(newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // it will give the value from index n to n-1 amd maintain the original array.
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // it will give the value from index n to n-1 and also trim/remove from the original array.
console.log(myn2);
console.log("C ", myArr);