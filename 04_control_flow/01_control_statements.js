//  IF Statements
const isUserLoggedIn = true
const temperature = 41

if(temperature < 50){
    console.log("less than 50");
}
console.log("Temperature is greater than 50");

// IF-Else Statement 
if(temperature < 50){
    console.log("Temperature is less than 50");
}else{
    console.log("Temperature is more than 50");
}

const score = 200

if(score > 100){
    const power = "Fly"
    console.log(`User Power: ${power}`);
}

// Short-Hand

const balance = 1000
if(balance > 500) console.log("Test");

// Else-If Statements

if(balance < 500){
    console.log("Less than 500");
}else if(balance < 750){
    console.log("Less than 750");
}else if(balance < 900){
    console.log("Less than 900");
}else{
    console.log("Less than 1200");
}

const isUserLoggedIN = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIN && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}