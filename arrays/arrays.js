const arr = [ 1,2,3,4,5];
// const arr2 = [ "aryan ", "arun" , " ayush"];
// const arr3 = new Array(1,2,3,4);
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr[0]);
// console.log(arr3);
arr.push(5,2);
arr.pop();
// console.log(arr.shift());
// arr.unshift();

// console.log(arr.includes(3));
// console.log(arr.indexOf(5));   // tells the index of the array value
// console.log(arr.indexOf(20)); // gives the -1 value as a result 


// -----------------------    array into string----------------------
const newArray = arr.join();
// console.log(typeof(arr));
// console.log(typeof(newArray));




// -------------------------slice and splice ----------------------
console.log("A",arr);
const newSliceArray = arr.slice(1,3);
console.log("B",newSliceArray);
console.log("C",arr.splice(1,3)); // removes the elements from index 1 to 3 
