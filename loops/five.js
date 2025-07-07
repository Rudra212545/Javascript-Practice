// for each loop, we will print the numbers 1 to 5
const coding = ["JavaScript", "Python", "C++", "Java"];

// const values = coding.forEach((item)=>{
//     console.log(item);
// })
// log(values); // undefined, because forEach does not return anything

//for each with Normal function
// coding.forEach( function (val){
//     console.log(val);
// })

// for each with  Arrow function
// coding.forEach((item)=>{
//     console.log(item);  
// })

// // Function declaration
// function printMe(item){
//     console.log(item);
// }
// // for each with function declaration
// coding.forEach(printMe);

// coding.forEach( (item , index, arr)=>{
//     console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
// })

const myCoding = [
    {
    name: "JavaScript",
    languageFileName: "js",
    },
    {
    name: "Python",
    languageFileName: "py",
    },
    {
    name: "Java",
    languageFileName: "java",
    }
]

// for each with object
myCoding.forEach((item)=>{
    console.log(item.name);
    console.log(item.languageFileName);
})