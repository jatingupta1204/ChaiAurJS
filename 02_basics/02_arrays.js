const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros) // it will push the dc_heros as an array only.
console.log(marvel_heros);
console.log(marvel_heros[3][1]); // to access flash we have to do this which is little bit complex.

const allHeros = marvel_heros.concat(dc_heros) // it will concatenate the two arrays into one array. Here we can only concat 2 array at a time
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // this is also same as concate but it is known as spread operator and mostly used. Here we can concate multiple array at a time.
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // Here it will convert the above array into a single array it take a depth value that how much array have to be open giving infinite will let it open each and every array inside an array.
console.log(real_another_array);

console.log(Array.isArray("Jatin")); // it will tell whether it is array or not and give answer in boolean.
console.log(Array.from("Jatin")); // it will convert it into an array.
console.log(Array.from({name: "Jatin"})); // it will return an empty array as it need to know whether it have to work on keys or values.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // it will add multiple values to a single array.