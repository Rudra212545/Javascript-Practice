// While loop 
// while (condition) {
//     // code block to be executed
// }

// while loop example
let i =0;
while(i<=10){
    console.log(i);
    i++;
}
// Array while loop example
let myArray = ["flash", "batman", "superman", "spiderman"];
let index = 0;
while(index<myArray.length){
    const element = myArray[index];
    console.log(element);
    index++;
}

// Do-while loop example
// do{

// }while(condition);
let score = 11;
do{
    console.log("Your score is: " + score);
    score++;
}while(score <= 10);