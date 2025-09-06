const nums = [ 1,2,3,4,5,6,7,8,9,10];
// const newnums = nums.map( (num) => {return num + 10});


//  its same as filter  but then why we are using maps 
//  the reason is chaining in the maps

// const newnums = nums.map().map().map().filter.... like this 

    // this is the reason why maps are introduced 

const newnums = nums.map((num) => num + 10)  
                    .map((num) => num + 1)
                    .map((num) => num*num)
                    .filter((num) => num>=400)

        // we can also use conditions in maps but it will return the output in boolean not the vallues like the filter
console.log(newnums);


