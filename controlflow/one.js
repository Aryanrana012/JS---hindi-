// if 



const userLoggedIn = true;

if(userLoggedIn){
    // console.log("This will always execute");
}

// <,>,<=,>= , != , ==, === and === is for strict equality basically used in the string comparison

if(1 ==="1"){
    // console.log("This will not execute");
}

if(1 == " 1"){
    // console.log(" this is true ");
}

const roomTemperature = 50; 
if(roomTemperature >=50){
//    console.log(" room is hot " ); 
}
else {
    console.log(" room is not hot " );
}

const score = 100;
if(score>50){
    let ability = "poor";
    // console.log(`your ability is ${ability}`);

}
// console.log(ability); // this will give error as ability is defined in the if block only

// if else if else 

// const marks = 90;

// if(marks>=90){
//     console.log(" you got A+ ");
// }
// else if(marks>=80){
//     console.log(" you got A ");
// }
// else if(marks>=70){
//     console.log(" you got B+ ");
// }
// else if(marks>=60){
//     console.log(" you got B ");
// }
// else {
//     console.log(" you are fail ");
// }

const alphaScore = 50;
// if(alphaScore>=40) console.log(" you passed " ) , console.log(" congrats "); 
// this is the most worst way of writing if else case 



//// if else in real life 

const isLoggedIn = true;
const debitCard = true ;
const userEmailLoggedIn = true;
const googleLoggedIn = false;

if(isLoggedIn && debitCard){
    // console.log(" you can make a purchase ");
}
if(userEmailLoggedIn || googleLoggedIn){
    console.log(" you can log in to your account " ) ;
}  // this case will not work if we use && operator 


