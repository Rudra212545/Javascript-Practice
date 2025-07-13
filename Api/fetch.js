fetch ("https://api.github.com/users/rudra212545")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);

}).catch((err)=>{
    console.log(err);
})
