// Truthy and Falsy values in JavaScript
// Truthy values are values that evaluate to true in a boolean context.
// Falsy values are values that evaluate to false in a boolean context.

// Examples of truthy values
const userEmail = [ ];

if (userEmail) {
    console.log("User email is provided");
}else{
    console.log("User email is not provided");
}

if (userEmail.length === 0) {
    console.log("Array is empty");
}
const empytObject = {};
if(Object.keys(empytObject).length === 0) {
    console.log("Object is empty");
}
    
// Truthy values in JavaScript
// 1. true
// 2. Any non-zero number (e.g., 1, -1, 3.14)
// 3. Non-empty strings (e.g., "hello", '0', `false`,  " ")
// 4. Objects (e.g., {}, { key: 'value' })
// 5. Arrays (e.g., [], [1, 2, 3])
// 6. Functions (e.g., function() {}, () => {})
// 7. BigInt values other than zero (e.g., 1n, -1n)

// FALSY values in JavaScript
// 1. false
// 2. 0
// 3. -0 (negative zero)
// 4. "", '', `` (empty string)
// 5. null
// 6. undefined
// 7. NaN (Not a Number)
// 8. 0n (BigInt zero)

// Nullish Coalescing Operator(??) : null undefined
// The nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values.
// It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

let val1;

val1 = 5 ?? 10; // 5 is not null or undefined, so it returns 5
console.log(val1); // Output: 5

// Ternary Operator
// Condition ? expressionIfTrue : expressionIfFalse
const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");