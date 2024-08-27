let myDate = new Date()

console.log(myDate); // it's difficult to read and understand "2024-02-27T18:17:35.174Z"
console.log(myDate.toString()); // Tue Feb 27 2024 23:49:05 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Tue Feb 27 2024
console.log(myDate.toISOString()); // 2024-02-27T18:19:05.251Z
console.log(myDate.toJSON()); // 2024-02-27T18:19:05.251Z
console.log(myDate.toLocaleDateString()); // 2/27/2024
console.log(myDate.toLocaleString()); // 2/27/2024, 11:49:05 PM
console.log(typeof myDate); // It is an Object.

// let myCreatedDate = new Date(2023, 0, 23) // Months in JS starts from 0.
let myCreatedDate = new Date(2023, 0, 23, 5, 4)
// let myCreatedDate = new Date("2023-01-14") // when we are passing a string months starts from 1 only.
// let myCreatedDate = new Date("01-14-2023") // another way to defne a date
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // to convert it into seconds.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 as it starts from 0 so to remove confusion we add 1.
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})