// object literals 

const tinder = new Object();

const tinder2 = {};
// console.log(tinder);

// console.log(tinder2);
const userName = {
    fullName : {
        firstName : "Aryan",
        lastName : "Rana",
    }
    ,age : 22,
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
}
// console.log(userName.fullName.firstName);
// console.log(userName.fullName.lastName);


const obj1 = { 1 : "a" , 2 : "b"};
const obj2 = { 3 : "c" , 4 : "d"};
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3)
const obj3 = {...obj1,...obj2};
// console.log(obj3);

// array objects 
const arrObjects = [
    {
        id : 1223,
        Name : "aryan",}
        ,{
        id : 1224,
        Name : "rana",
        },{
        id : 1225,
        Name : "hello",
    },

]
arrObjects[1].Name
// console.log(userName);
// console.log(Object.keys(userName));
// console.log(Object.values(userName));

console.log(userName.hasOwnProperty('isLoggedIn'));