let myName = "jatin    "
let mychannel = 'chai    '

console.log(myName.trueLength);

let myHero = ["thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh say hi`);
}

heroPower.hitesh()
myHero.hitesh()
myHero.heyHitesh()
// heroPower.heyHitesh()


// -------------INHERITANCE---------------

const user = {
    name: "Chai",
    email: "Chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
    // __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()