 /// for loops in the javascript 
for (let index = 0; index < 10; index++) {
    
    // console.log(index);
    
}

for (let i = 1; i <=10; i++) {
    // console.log(` TABLE OF ${i}`)
    for (let j = 1; j <= 10; j++) {
        
        // console.log(`inner loop ${j} and outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`)
    }
    
}
const myArray = [ "batman", "spiderman", "superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

 //  break and continue 

for (let index = 1; index <=20; index++) {
     if (index == 5) {
        // console.log(` detected number ${5}`)
        break;  // break breakes the loop case on the given condition 
    }
    // console.log(index);
   
    
}

for (let index = 1; index <=20; index++) {
     if (index == 5) {
        // console.log(` detected number ${5}`)
        continue;   // continue skips the case 
    }
    // console.log(index); 
   
    
}