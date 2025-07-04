const user = {
    username:"Rudra",
    price: 100,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this);
        
        
    }
}

user.welcomeMessage(); // Rudra welcome to the website
user.username = "Riya";
user.welcomeMessage(); // Riya welcome to the website
console.log(this);

// Arrow function
// function chai (){
//     console.log(this);
// }
// chai(); // Window object

const chai = ()=>{
    console.log(this);
}
chai(); // Window object

// const addTwo = (a, b) => {
//     // console.log(this);
//     return a + b;
// }

const addTwo = (a, b) => (a + b); // Arrow function with implicit return
console.log(addTwo(2, 3)); // 5