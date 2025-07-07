// For loop 
// for(let a=0 ;a<=10 ;a++){
//     console.log(a);
// } 
// For loop with condition
for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`${element} is equal to 5`);
    }
    // console.log(element);
}
// Loop nesting 
for(let i=1; i<=10;i++){
    // console.log(`Outer loop: ${i}`);
    for(let j=1; j<=10;j++){
        // console.log(i + "*" + j + " = " + (i * j));
        
    }
}

let myArray = ["flash", "batman", "superman", "spiderman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// For loop with break and continue
// Break statement
// for (let index = 1; index <= 20; index++) {
//     if(index ==5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of index is ${index}`);
// }
// Continue statement
for (let index = 1; index <= 20; index++) {
    if(index ==5){
        console.log("Detected 5");
        continue; 
    }
    console.log(`value of index is ${index}`);
}
