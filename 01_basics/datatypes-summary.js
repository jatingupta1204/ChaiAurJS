// Primitive => 7
/*
1. String
2. Number
3. Boolean 
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail = undefined => another way to define
let userName = "Jatin"
const id = Symbol("123")
const anotherID = Symbol("123")

console.log(id == anotherID);

const bigNumber  = 251651685431943513n

// Reference (Non Primitve) => 3
/*
1. Array
2. Objects
3. Functions
*/

const heros = ["shaktiman", "naagraj", "doga"];
let obj1 = {
    name: "Jatin",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World");
}


// ---------------------------Memory Allocation-------------------------
// Stack (Primitive), Heap (Non- Primitive)
// Stack => it send the copy of the variable and do not change it's original state.
// Heap => it send the reference of the variable which means if we change the value it's original value also changes.

let myName = "Jatin"
let anotherName = myName
anotherName = "JatinGupta"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jatin@google.com"

console.log(userOne.email);
console.log(userTwo.email);