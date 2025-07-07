// For in loop
const myObj ={
    js :"JavaScript",
    py :"Python",
    cpp:"C++",
    java:"Java"
}
for (const key in myObj) {
   console.log(`${key} : ${myObj[key]}`);
   
}
// For in loop with arrays
const programmingLanguages = ["JavaScript", "Python", "C++", "Java"];
for (const key in programmingLanguages) {
    console.log(programmingLanguages[key]);
}

// // Maps 
// const map = new Map()
// map.set("IN","India");
// map.set("US","United States");
// map.set("UK","United Kingdom");
// for (const key in map) {
//     console.log(key);
    
// }