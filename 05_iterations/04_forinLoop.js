const obj1 = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

for (const key in obj1) {
    console.log(`${key} shortcut for ${obj1[key]}`);
}

const programming = ['js', 'ruby', 'cpp', 'py', 'java']

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India") 

for (const key in map) {
    console.log(key);
} // map is not ittrateable