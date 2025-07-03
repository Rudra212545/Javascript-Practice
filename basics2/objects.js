"use strict";  
// Singleton
// Object.create
//  Object literal

const mySym = Symbol("key1");

const JsUser = {
    name:"Rudra",
    age: 20,
    [mySym]: "value1", // Symbol as key
    location:"Mumbai",
    email:"rudra@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]); // Accessing Symbol property

// JsUser.email = "rudra@rudra.com"; 
// console.log(JsUser.email); // Updated email
// Object.freeze(JsUser); // Prevents any changes to the object
// JsUser.email = "rudra@test.com"; // This will not change the email
// console.log(JsUser.email); // Still shows the original email

JsUser.greeting = ()=>{
    console.log("Hello, " + JsUser.name);
}
JsUser.greetingTwo = function(){
    console.log(`Hello , ${this.name}`); 
}

JsUser.greeting(); // Hello, Rudra
JsUser.greetingTwo();



