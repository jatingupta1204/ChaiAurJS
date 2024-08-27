function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("N");
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(4, 5)
console.log("Result: ", result);

function loginUserMessage(username = "Daddy"){
    if(!username){
        console.log("Please Enter the UserName");
        return
    }
    return `${username} just logged In.`
}

console.log(loginUserMessage("Jatin"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 440, 2000));

const user = {
    username: "Jatin",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is: ${anyobject.username} and price is${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));