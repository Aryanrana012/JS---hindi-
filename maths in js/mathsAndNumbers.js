const score = 100;
const balance = new Number(400);
// console.log(score);
// console.log(balance);
// // console.log(balance.toString().length);
// console.log(balance.toFixed(2));   // Converts the number to a string with 2 decimal places
// console.log(balance.toPrecision(3)); // Converts the number to a string with 3 significant digits
// console.log(balance.valueOf()); // Returns the primitive value of the Number object


const otherNumber = 123.6545;
// console.log(otherNumber.toPrecision(3));  // take the round off value of the number with 3 significant digits



const moneyNumber = 100000;
// console.log(moneyNumber.toLocaleString('en-IN')); // Converts the number to a string with locale-specific formatting


// ++++++++++++++++++++++++++++++++++       Maths         ++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-5));
// console.log(Math.round(4.7));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.4));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() *(max - min+ 1) + min)); // Generates a random number between min and max (inclusive)