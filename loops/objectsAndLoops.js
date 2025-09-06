////////////////////objects + forin loops 
const myObject  = {
    name : "aryan rana",
    myClass : "bca 5th sem",
    myNumber  : 987654321,

}
for (const key  in myObject) {
    
      console.log(`my ${key} is ${myObject[key]}`);
        
    }


///////////// for in loop usually gives us the index values means it gives us the keys not like that 
///// forof loop which directly sends us the values 

const myArray = ["aryan ", "rana ", "yuvi", "zora", "sawan"]
for (const key in myArray) {
    console.log(myArray[key])   // it usually gives me the value 
    console.log(key)  /// gives me the keys like 0 1 2 3 4 
    // same if i write this in the forof loop we will get the value not keys thats the difference f
    
}