// Arrays

const myArr = [0,1, 2, 3, 4, 5];
const myHeors = ['Batman', 'Superman', 'Wonder', 'Flash'];
const myArr2 = new Array(6); // Creates an array of length 6 with undefined values
// console.log(myArr[0]); // 0

// Array methods

// myArr.push(6); // Adds 6 to the end of the array
// myArr.push(7); // Adds 6 to the end of the array
// myArr.pop(); // Removes the last element (7) from the array
// myArr.unshift(-1); // Adds -1 to the beginning of the array
// myArr.shift(); // Removes the first element (-1) from the array

// console.log(myArr.includes(3)); // true
// console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join();

console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
// console.log(newArr); 

// Slice and Splice
const slicedArr = myArr.slice(2, 4); // Returns a new array with elements from index 2 to 4 (exclusive)
console.log(slicedArr); // [2, 3]
console.log(myArr); // [0, 1, 2, 3, 4, 5]

const splicedArr =myArr.splice(1,3); 
console.log("Spliced Array:",splicedArr); 
console.log(`myArr after splice:`, myArr); // [0, 1, 5, 6]




