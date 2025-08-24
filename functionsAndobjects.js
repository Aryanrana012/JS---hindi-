function calculateCartPrice(val1,val2,...cart){
    return cart ; 
}
console.log(calculateCartPrice(10,100, 200,1000));


const user = {
    username : " hitesh", 
    price : 1000, 
}
function handleObject(anyObj){
    console.log(`username is ${anyObj.username}  and price is ${anyObj.price}`);
}
handleObject(user);
// or the other way is 
handleObject({username : " aryan ", price : 2000}); 


const myNewArray  = [ 100,300,400, 4000]

function returnArray(arr){
    return arr[1];
}
console.log(returnArray(myNewArray));

// console.log(returnArray([ 200,300,400, 4000]));   this is the other way 

