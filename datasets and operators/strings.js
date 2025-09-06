// name = "Aryan Rana";
// repoCount = 10;
// console.log(name + " has " + repoCount + " repositories");
// console.log(`hello my naem is ${name}  and my repo count is ${repoCount}`);


const newName = new String("AryanRana"); // Creating a String object
// console.log(newName[0]);            // Accessing the first character of the string object
// console.log(newName.__proto__);   
// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(2));  // Accessing the character at index 2
const newString = newName.substring(0,6); // not include the last index
console.log(newString);
const anotherString = newName.slice(-8,5); // nnot include the last index
console.log(anotherString);



const secString = "  Aryan  ";
console.log(secString);
console.log(secString.trim()); // Removes whitespace from both ends of the string


const url = "https://www.example.com/path%20resource";
console.log(url.replace('%20', '_'));
console.log(url.includes("example"));
console.log(url.includes('_'));  //we got false because it uses primitive string not object string


