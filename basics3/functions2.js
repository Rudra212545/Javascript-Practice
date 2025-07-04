function calculateCartPrice(...num1){

    return num1

}
// console.log(calculateCartPrice(100,200,500,700));

const user = {
    username: "JohnDoe",
    email:"john@doe.com"
}

function  handleObject(anyobject){
    console.log(`Username: ${anyobject.username}, Email: ${anyobject.email}`);
}

handleObject(user);

const myArr = [200,400,100,800];
function returnSecondValur(getArray){
    return getArray[1];
}

console.log(returnSecondValur(myArr));
