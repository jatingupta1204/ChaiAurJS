// var c = 300
let a = 300
if(true){
    const a = 10
    let b = 20
    var c = 30 // or c = 30
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username = "Jatin"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // it give error as it is called outside the scope

    two()
}

one()

if(true){
    const username = "Jatin"
    if(username === "Jatin"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

addOne(5) // it will be execute as it is normally an intialization of function
function addOne(num){
    return num + 1
}


// addTwo(5) // it will give error as it is called before intialization as it is store inside a variable.
const addTwo = function(num){
    return num + 2
}

addTwo(5);