// date and time in javascript    

// dates in the javascript 

// const myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());  // usesd in APIs to send date in JSON format
// console.log(myDate.getTime()); // Returns the number of milliseconds since January 1,
// console.log(myDate.toISOString()); // Returns the date in ISO format

// ISO and JSON are same ? 
// yes, both formats represent the date in a standardized way, but ISO is more specific to date and time, while JSON is a broader data interchange format that can include various data types.

// let myCreatedDate = new Date(2025,2 ,11,5,30,0);
// console.log(myCreatedDate.toDateString());



// let newCreateddDate = new Date("11-02-2025 11:11:11");
// console.log(newCreateddDate.toLocaleString());



//   timestamp in javascript is used to represent a specific point in time, typically measured in milliseconds since January 1, 1970, 00:00:00 UTC. It is often used for storing and comparing dates and times in applications.

// let myTimeStamp = Date.now();
// console.log(Math.floor((myTimeStamp) /1000)); // Convert milliseconds to seconds


let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);


console.log(newDate.toLocaleDateString('default',{
    weelday : 'Long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
    timeZoneName : 'short'
}));
// how to print upper operation in cosnole
