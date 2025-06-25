// Types of memories
// 1. Stack memry (Primitive datatypes)
// Stack memory is used for primitive data types like numbers, strings, and booleans.
let myName = "John";
let anotherName = myName;
// Here, `myName` is stored in stack memory, and `anotherName` is a reference to the same value.
// If we change `anotherName`, it does not affect `myName`. The copy of myName is stored in another stack frame as anotherName variable.

anotherName = "Doe"; // This is stored in stack memory

console.log(myName); // Output: John
console.log(anotherName); // Output: John



// 2. Heap memory (Reference datatypes)/(Non-primitive datatypes)

let userOne={
    "name": "John",
    "age": 30

}
let userTwo = userOne;
// Here, `userOne` is stored in heap memory, and `userTwo` is a reference to the same object.
userTwo.name = "Doe"; // This modifies the object in heap memory
console.log(userOne); // Output: { name: 'Doe', age: 30 }
console.log(userTwo); // Output: { name: 'Doe', age: 30 }