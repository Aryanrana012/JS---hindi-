
// Primitive data types
 // Number , String, Boolean, Null, Undefined, Symbol, BigInt

//    non - primitive data types
// Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet 


const value = 100;
const valuetype = 100.3;
const isLoggedIn = false;

const id = Symbol('123');  // Symbol is a unique and immutable data type
const anotherId = Symbol('123');
console.log(id === anotherId);
console.log(id);
console.log(anotherId);

const array = [ "apple", "banana", "cherry"];  // Array is a non-primitive data type
const myObject = {
    name: "Aryan rana",
    age: 19,
};  // it is an object, which is a non-primitive data type




const myFunction  = function(){
    console.log("Hello, world!");
};
//how to call the function
// myFunction();  // Calling the function

// Date is a non-primitive data type

