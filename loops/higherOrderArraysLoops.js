 // values in arrays 

 // [ "", " ", " "]
 // and objects stored in arrays in this format 

        //  [{}, {}, {} ]
   // it stores the objects in the arrays  and we can use loops to access them 

                        //  forof loop 
                        // syntax  
                        // for (const element of object) {
                            
                        // }

const myArray = [ 1,2,3,4,5];
for (const myNum of myArray) {
    // console.log(`so my values are ${myNum}`);  // most used loop in javascript due to simplicity 
    
}

const myName = "Aryan rana";
for (const name of myName) {
    // console.log(`elements in my name are ${name}`);
    
}

 /////////////////////// maps in the js //////////////////////////////////////////////////

const myMap = new Map()
myMap.set('Ind' , "india")
myMap.set('USA', " United states of america")
myMap.set("cal", " california")
myMap.set('Ind' , "india")
// console.log(myMap)

for (const key of myMap) {
    // console.log(key);
    
}
 // return a putput like this 
// [ 'Ind', 'india' ]
// [ 'USA', ' United states of america' ]       
// [ 'cal', ' california' ]


for (const [key,value] of myMap) {
    console.log(key , "->",value);
} /// to get a clear output through maps we use this syntax 


/// if we directly use forof in objects we will definitly going to see the errors so there are some way 
//  that we can use forof in the objects we will discuss in the forof objects in the next file under the loops folder 