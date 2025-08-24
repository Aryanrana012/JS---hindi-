// let var const 

// let a  = 10
// var b = 20;
// const c = 30;

var c = 300;  
if(true){
    let a = 100;
    const b = 300;
    let  c = 200;        // if we use var here it will override the global value 
}   // local scope 

// console.log(a);
// console.log(b);
console.log(c);
// console.log(b);  // it will give error as b is not defined in the global scope