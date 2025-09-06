// singletons and 
// object laterals


const sym = Symbol("key");
const myObject = {
    Name :"Aryan rana",
    "Full name " : "Aryan Rana",
    Age : 20,
    [sym] : "mykey1",
    Email : "aryan@gmail.com",
    location : " khundian",
    isLoggedIn : false,
    lasatloggedIn : ["monday", "tuesday", "wednesday"]
}

// console.log(myObject.Name);  // bad way to access property 
// console.log(myObject["Name"]); // Good way to access property
// console.log(myObject["Full name "]); // Accessing property with space in the name
// console.log(myObject[sym]);

myObject.Email = "aryanrana@gmail.com";
// console.log(myObject);
// Object.freeze(myObject); // freeze the object
myObject.greeting = function(){
    console.log("helloo JS user");
}

myObject.greetingTwo = function(){
    console.log(`hello JS User ${this.Name}`);
}
console.log(myObject.greeting());
console.log(myObject.greetingTwo());
