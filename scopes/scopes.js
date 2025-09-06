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
// console.log(c);
// console.log(b);  // it will give error as b is not defined in the global scope



function one(){
    const username = " Aryan rana";
    function two(){
        const website = " youtube.com";
        // console.log(username);

    }    
    // console.log(website);  // it will give error as website is not defined in this scope
    two();   
}
one();

//  we can access the variable of parent function in child function but not vice versa like 
//   inner function can access the variable of outer function but outr function cannot access the variable of inner function 

//  also in the if else block we cannot access the variable defined in that block outside the block if we use let or const 

if(true){
    let username = "Aryan rana";
    if(username === "Aryan rana"){
        let website = " youtube.com";
        // console.log(username + website); 
    }
    // console.log(website); // it will give error as website is not defined in this scope
}
// console.log(username);  // it will give error as username is not defined in this scope

//  +++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(1))
function addOne(num){
    return num + 1; 
}

addTwo(2);   // it will give error as addTwo is not defined in the variable environment in functional scope
const addTwo = function(num){
    return num + 2;
}