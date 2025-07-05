// // Control flow 
// // 1.if statement

const { use } = require("react");

// const userLoggedIn = true;

// // <, >, <=, >=, ==, !=, ===, !==
// if(2 == "2") {
//     console.log("executed");
// }
// if(2 === "2") {
//     console.log("executed");
// }

// const score = 200;
// if(score > 100) {
//     const power = "fly";
//     console.log("You have the power to " + power);
// }
// // console.log("You have the power to " + power); // ReferenceError: power is not defined

// // Shorthand notation
// const balance = 1000;
// if(balance > 500) console.log("You are rich");

// // Nesting
// if(balance <500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedinFromGoogle = false;
const loggedinFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("You can buy the product");
} 
if(loggedinFromGoogle || loggedinFromEmail) {
    console.log("User logged in");
    
}