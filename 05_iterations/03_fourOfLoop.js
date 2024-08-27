//  for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    console.log(`Each Char is ${greet}`);
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India") // it will not be printed as it is duplicated

console.log(map);

for (const [key, Value] of map) {
    console.log(key, ":-", Value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ";-", value);
// } // it will not work 