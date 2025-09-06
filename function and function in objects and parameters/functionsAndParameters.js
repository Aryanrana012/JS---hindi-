function myfun(){
    console.log("Hello World");
}                    //function definition 
myfun();   // function call

// function addTwoNumbers(number1, number2){
//            console.log( number1 + number2)
            
// }

function addTwoNumbers(number1, number2){
    // let result =  number1 + number2;
    // return result;
    return number1 + number2;
            
}
const result = addTwoNumbers(12,23);
// console.log(`${typeof result} , ${result}` );


//  ways to take values in the function 

function loginUserMessage(username){
    if(username === undefined
        //  or !username                              it makes the same logic if username is empty string or null also
    ){
        return " please enter a valid username";
    }
    return `${username}  just logged in `;
}
console.log(loginUserMessage());  // results in undefined 
console.log(loginUserMessage("Aryan rana"));



