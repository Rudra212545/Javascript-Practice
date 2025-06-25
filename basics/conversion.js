// Conversion to number
let score = "33";
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "33"=> 33
// "33abc"=>Nan
// true =>1 & false =>0

// Conversion to Boolean 
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
isLoggedIn = Number(!booleanIsLoggedIn)
console.log(isLoggedIn);

// Conversion to String

let someNumber = 25
let stringNumber = Number(someNumber)
 console.log(stringNumber);
 console.log(typeof(stringNumber));
 
 



