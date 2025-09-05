const coding  = [ "js", "python", " c++", "java", "c"]
// coding.forEachJ( function name () {} )



// coding.forEach( function  (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )


// another way is to declare the function first and then use the foreach to use the function 

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);   //we only give the reference here not execute the function by printme() thats the not right way here 


// coding.forEach( (item , index , arr) => {
//     console.log(item , index , arr)
// })


const myArrayObject = [ {
            languageFileName : " javascript",
            languageFileType : "js"
}, {
     languageFileName :" java",
            languageFileType : "java"

} ,{
     languageFileName : " python",
            languageFileType : "py"
},]
myArrayObject.forEach( (item , index , arr)  => {
    console.log(item.languageFileName , " =  ", item.languageFileType);
    console.log(index , arr);
})

// in my opinion for each loop is the best loop in the javascipt for objects whicvh are storerd in the arrays 