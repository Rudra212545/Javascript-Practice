// Map
const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map((num)=>{
//     return num * 2;
// })
// Chaining methods
const newNums = myNums
                .map((num) => num*10 )
                .map((num)=> num + 1)
                .filter((num)=>num>=40 )

console.log(newNums); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

