const user = {
    username: "Jatin",
    price: 999, 

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); 
        console.log(this); // this will give the value inside an object
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this); // here it gives an empty object as we are using node and it is globe

function chai(){
    const username = "Jatin"
    console.log(this.username);
}

chai()

const chai = function(){
    const username = "Jatin"
    console.log(this.username);
}

chai()

const chai = () => {
    const username = "Jatin"
    console.log(this.username);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explict return 
// }

// console.log(addTwo(4, 3));

// const addTwo = (num1, num2) => num1 + num2 // implicite return 

// const addTwo = (num1, num2) => (num1 + num2) // implicite return
const addTwo = (num1, num2) => ({username: "Jatin"}) // object have to be defined inside () brackets otherwise it will give error.

console.log(addTwo(3, 4));