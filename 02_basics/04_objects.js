// const tinderUser = new Object() // singleton Object
const tinderUser = {} // non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIN = false

console.log(tinderUser);

const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jatin",
            lastname: "Gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "A", 4: "B"}
const obj3 = {5: "A", 6: "B"}

const obj4 = { obj1, obj2}
console.log(obj4);
const obj5 = Object.assign({},obj1, obj2, obj3)
console.log(obj5);
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);

const User = [
    {
        id: 1,
        email: "jatin@gmail.com"
    },
    {
        id: 1,
        email: "jatin@gmail.com"
    },
    {
        id: 1,
        email: "jatin@gmail.com"
    },
    {
        id: 1,
        email: "jatin@gmail.com"
    },
]

User[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIN"));

const course = {
    coursename: "Js in Hindi",
    courseprice: "999",
    courseteacher: "Jatin Gupta"
}

// course.courseteacher

const {courseteacher: teacher} = course
console.log(teacher);