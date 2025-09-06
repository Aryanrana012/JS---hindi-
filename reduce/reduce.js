 // reduce method 

const nums = [ 1,2,3];
// const sum = nums.reduce( function (acc, val) {return acc + val},0 );  // we will get the output 6

//  the short and easy way to right reduce using arrow function is 
const sum = nums.reduce( (acc, val) => acc+val , 0);
console.log(sum);

// real lide example of reduce in js

const cart = [ 
    {itemName : "derma roller",
        price : 1000
    },
    {itemName : "hair dryer",
        price : 2000
    },
    {
        itemName : "headphones",
        price : 1500
    },
]
const totalBill = cart.reduce( (acc, item) => acc + item.price , 0);
console.log(totalBill);