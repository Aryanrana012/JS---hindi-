// let score = "234abc"
// console.log(typeof score)
// console.log(typeof(score))
// let valueInScore = Number(score);
// console.log(typeof valueInScore);
// console.log(valueInScore); // 0, because null is converted to 0 when converted to number

// "333" => 333
// "333abc" => NaN (Not a Number) because it cannot be converted to a number
// null => 0
// undefined => NaN (Not a Number) because it cannot be converted to a number
// boolan => 1 or 0 (true is 1, false is 0)
// string => NaN if it contains non-numeric characters, otherwise it converts to a number








// boolean conversion

// let isLoggedIn = "aryan";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)




 // 1 => true
// 0 => false
// null => false
// undefined => false
// "abc" => true
// "" => falseS




// Converting a number to a string

// let number = 123;
// let stringNumber = String(number);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *******************operations***********************

// let number = 123;
// let negativeNumber = -number;
// console.log(negativeNumber);



// console.log(typeof(1 + "2"));
// console.log(typeof ("2" + 1));
// console.log(typeof(1+2 + "3"));
// console.log(typeof("1" + 2 + 3));



console.log(+true);                               // Converts true to 1
console.log(+false);                              // Converts false to 0
console.log(+"");                           // Converts empty string to 0
console.log(+false);                            // Converts false to 0
console.log(+null);                              // Converts null to 0
console.log(+undefined);



let num = 100;
num++;
console.log(num); // 101, because num is incremented by 1
console.log(++num); // 102, because num is incremented by 1 before being logged
console.log(num++); // 102, because num is logged first and then incremented by 1
console.log(num); // 103, because num was incremented in the previous line
