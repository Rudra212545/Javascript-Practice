const course = {
    courseName: "JavaScript Basics",
    price: "999",
    courseInstructor:"Hitesh",

}

// course.courseInstructor 
// Destructuring the object
const {courseName,price,courseInstructor} = course;
console.log(courseName, price, courseInstructor);

// Destructuring the object with alias
const {courseName: name, price: cost, courseInstructor: instructor} = course;
console.log(name, cost, instructor);

// API response example
// {
// "name":"Rudra",
    // "age": 20,
    // "address": {
// }

[
    {},
    {},
    {}
]