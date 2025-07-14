const user = {
    username : "Rudra",
    loginCount : 8,
    signedIn :true,

    getUserDetais: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        
        
    }


}

// console.log(user.username);
// console.log(user.getUserDetais());

// Constructor function - new 
// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new  User("rudra",12,true)
const userTwo = new User("Riya",25,true)
console.log(userOne);
console.log(userTwo);


