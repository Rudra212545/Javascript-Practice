const promiseOne = new Promise ((resolve,reject)=>{
    // Do an async Tasks
    // DB calls, Cryptography
    setTimeout(function(){
        console.log("async task is completed");
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed");
    
})

new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
    
})

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            username:"Chai",
            email:"rudra25@gmail.com"
        })
    },1000)
})

promiseTwo.then((user)=>{
    console.log(user);
    
})

const promiseFour = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({
                username:"Rudra",
                password:"Rudra2125"
            })
        }else{
            reject("ERROR:sOMETHING WENT WRONG")
        }
    },1000)

})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let error = true
        if(!error){
            resolve({
                username:"JS",
                password:"Rudra2125"
            })
        }else{
            reject("ERROR:JS WENT WRONG")
        }
    },1000)
})

async function consumePromiseFive() {
   try {
     const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
}

consumePromiseFive()

// async function getAllUsers() {
//   try {
//      const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//    const data = await response.json()
//    console.log(data);   
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers()

fetch ("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);

}).catch((err)=>{
    console.log(err);
})
