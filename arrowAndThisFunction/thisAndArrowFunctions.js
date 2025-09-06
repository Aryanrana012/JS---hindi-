const user = {
    name : " aryan rana ",
    price : 1000,
    welcomeMessage : function(){
        // console.log(`${this.name} welcome to our website`)
        //  console.log(this);
        }  
       
}
user.welcomeMessage();
user.name = " alpha";
user.welcomeMessage();
console.log(this);
// in the global scope this refers to the window object in the browser and in node js it refers to an empty object  {} 

// function undefined(){
//     let username = " Aryan rana ";
//     console.log(this.username);
// }
// undefined();         // it will give undefined as this here refers to the window object and window.username is not defined 

const alpha = () => {
    let username = " Aryan rana ";
    // console.log(this.username);
}
alpha(); 
 // still undefined as arrow function does not have its own this it takes this from its parent scope which is the global scope here 

  
 
 
 //   difference between normal function and arrow function 
    //  1. normal function has its own this but arrow function does not have its own this it takes this from its parent scope 
    // 2. normal function can be used as constructor function but arrow function cannot be used as constructor function 
    // 3. normal function has arguments object but arrow function does not have arguments object 



    // () => {}  // arrow function syntax 



//     const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1,num2) => (num1 + num2);
// const addTwo = (num1,num2) => num1 + num2; // if we have only one line of code in the function we can omit the curly braces and the return keyword
const addTwo = (num1,num2) => ({username : " aryan rana " });

console.log(addTwo(2,3));

// const myArry = [1,2,3,5,6];
// const newArry = myArry.map((num) => num * 2);
// console.log(newArry);   // arrow in the arrow function 
