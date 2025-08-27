 // truth in control flow in conditon 
 const userEmail = " aryanran@gmail.com";

//  const userEmail = ""; // will leads to else condition 
 if (userEmail) {
    // console.log("user email ");
}else {
    console.log(" no user email input ");
}
    // falsy values

// false , 0 , -0, BigInt 0n, "", null , undefined, NaN

 // truthy values 
//    true ,  'false' , " ", [] , "0", {}, function(){} 

//         array conditions in the arrays 
const userArray = [1,2,3] ;
if(userArray.length === 0){
    // console.log(" array is empty "); 
}
    else {
        console.log(`array length is ${userArray.length}`);
    }

const myObject = { 
    Name  : " Aryan rana",
    class : "bca 5th sem ",
}
if(Object.keys(myObject).length === 0){
    console.log("my object is empty")
} else {
    console.log(`object contains some elements`)
}
  //nullish coscalcing operator  (??) : null  and undefined 
let val1 ;
// val1 = 5 ?? 10;             // here it will assign the 5 value because it seems first 
// val1  = null ?? 10;       // but here he will take the 10 value because the first value is null so he will the 10 value for industrial level logic 
// val1 = undefined ?? 10;   // still we get 10;
val1 = undefined ?? null ?? 15 ?? 10  // he will choose the 15 value 
console.log(val1); 




/////////////////////// ternary operator ////////////////

// condition ? true : false 


const aryanMarks = 100;
(aryanMarks>= 50) ? console.log("aryan is a topper ") : console.log("aryan is a dump boy ")
