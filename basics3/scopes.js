
let a = 300;

// Scope - block scope
if(true){
    let a = 10;
    console.log(a);
    const b = 20;
}

// Global scope
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "rudra";

    function two(){
        const website = "youtube.com";
        console.log(username);
    }
    // console.log(website);

    two();
}
one();

if (true) {
    const username = "rudra";
    if(username === "rudra") {
        const website = "youtube.com";
        console.log(username + " " + website);
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++ intresting +++++++++++++++

console.log(addOne(10)); // 11
function addOne(value){
    return value +1;
}

// Mini hoisting example
// Function declaration is hoisted
// Function expression is not hoisted
const  addTwo = function(value){
    return value + 2;
}
addTwo(10); // 12

