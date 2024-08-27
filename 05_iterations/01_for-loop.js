//  For Loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
    
}

for(let i = 1; i <= 10; i++){
    console.log(`Multiplication Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop values: J: ${j} and I: ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArr = ["flash", "batman", "superman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}

// Break and Continue Statements

for (let i = 1; i < 20; i++) {
    if(i == 5){
        console.log(`Dectected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 1; i < 20; i++) {
    if(i == 5){
        console.log(`Dectected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}