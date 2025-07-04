
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
