// const myName = function() {
//     console.log("R");
//     console.log("U");
//     console.log("D");
//     console.log("R");
//     console.log("A");
// }

// myName();

function addTwoNumbers(num1, num2) {
    return (num1 + num2);
}

const result = addTwoNumbers(5,10);

console.log(result);

function loginUserMessage(username = "Guest") {

    if(!username){
        console.log("Please provide a username");
        return;
    }

    return `${username} Just logged in `
}

const userMessage = loginUserMessage();

console.log(userMessage);