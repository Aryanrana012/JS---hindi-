let myName = "Aryan Rana";
let anotherName = myName;
anotherName = "keshav";
console.log(myName);
console.log(anotherName);


// example of heap memory 
const data = { name: "Aryan rana", age: 19 };
newData = data;
newData = {name : "keshav",age : 19 };
console.log(data);
console.log(newData);

// both data and newData are pointing to different objects in heap memory
