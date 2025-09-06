const marvelHeroes = [ " Ironman" , " spiderMan", " thor" , " hulk " ];
const dcHeroes = [ "superMan", "batman" , " flash " , "wonderwoman"];
// *const array3 = marvelHeroes.concat(dcHeroes);
// console.log(array3); // Combines two arrays into one
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);


const newArray3 = [...marvelHeroes,...dcHeroes];
// console.log(newArray3); // Spread operator to combine arrays
const newAnotherArray = [1,2,3,4,[5,6,7,[8,9]]];
const flatArray = newAnotherArray.flat(Infinity);

// console.log(flatArray);




// ------------------------------------------------------------------------------

console.log(Array.isArray("Aryan "));
console.log(Array.from("Aryan"));
console.log(Array.from({from : "Aryan"}));   // it will give an empty array[] because from is not iterable the object is not iterable
console.log(Array.from({length : 5})); // Creates an array of length 5 with undefined values


let score1 = 100;
let score2 = 200; 
let score3 = 300;
console.log(Array.of(score1, score2, score3));