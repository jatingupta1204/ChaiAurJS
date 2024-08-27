// Singleton
// Object.create

// Objects Literals

const mySym = Symbol("Keys")

const JsUser = {
    name: "Jatin",
    "full name": "Jatin Gupta",
    [mySym]: "myKey1",
    age: 19,
    location: "chandighar",
    email: "jatin@google.com",
    isLoggedIn : false, 
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "jatin@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "jatin@microsoft.com" // it will not be assigned as JSUser is freezed and now it's values can't be changed.
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());