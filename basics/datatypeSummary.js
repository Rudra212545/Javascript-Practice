// Primitive
/* 
1. Number: Represents both integer and floating-point numbers.
2. String: Represents a sequence of characters, used for text.
3. Boolean: Represents a logical entity and can have two values: true or false.
4. Undefined: A variable that has been declared but not assigned a value.
5. Null: Represents the intentional absence of any object value.
6. Symbol: A unique and immutable primitive value, often used as object property keys.
7. BigInt: Represents integers with arbitrary precision, useful for very large numbers.
*/
const score = 100; // Number
const name = "John"; // String
const isActive = true; // Boolean
let notAssigned; // Undefined
const emptyValue = null; // Null
const uniqueId = Symbol('id'); // Symbol
// const largeNumber = BigInt(123456789012345678901234567890); // BigInt


// Non-Primitive
/*
1. Object: A collection of properties, where each property is defined as a key-value pair.  
2. Array: A special type of object used to store ordered collections of values, which can be of any type.
3. Function: A callable object that can be executed, often used to encapsulate reusable code.

*/
let person = {
    "name":"Hello",
    "age": 30,
    "isEmployed": true,
    "address": {
        "city": "New York",
        "zipCode": 10001
    },

} // Object
let numbers = [1, 2, 3, 4, 5]; // Array
 const myFunction = function() { // Function
    console.log("Hello, World!");
}
// Example usage
myFunction() // Calls the function to print "Hello, World!"
console.log(typeof (score)); // Outputs: function
