const userEmail = "jatin@google.com"

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have User Email");
}

// False Value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Value
// "0", 'false', " ", [], {}, function(){}

const userName = []

if(userName.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 15
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 100") : console.log("More than 100");