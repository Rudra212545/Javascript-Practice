
// const User = new Object();
const User={};

User.id = "123abc";
User.name = "Rudra";
User.age = 20;
User.isLoggedIn = false;

// console.log(User); // {}

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Rudra",
            LastName:"Parmeshwar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName); //

const obj1 ={
    1:"a",
    2:"b",
}
const obj2 ={
    3:"c",
    4:"d",
}
// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2); // Merging objects
const obj3 = {...obj1, ...obj2}; // Merging objects using spread operator
console.log(obj3);

const users = [
    {id:1, name:"Rudra", age:20, isLoggedIn:false},
    {id:2, name:"Rohan", age:22, isLoggedIn:true},
    {id:3, name:"Ravi", age:21, isLoggedIn:false},
    {id:4, name:"Rahul", age:23, isLoggedIn:true}
]

console.log(users[1].id)

console.log(Object.keys(User)); // ['id', 'name', 'age', 'isLoggedIn']
console.log(Object.values(User)); // ['id', 'name', 'age', 'isLoggedIn']
console.log(Object.entries(User)); // ['id', 'name', 'age', 'isLoggedIn']


