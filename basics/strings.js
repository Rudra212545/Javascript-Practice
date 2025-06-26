const name = "Rudra";
const lastName = "Parmeshwar";
const repoCount = 10;

// console.log(`Hello my name is ${name} and I have ${repoCount} repositories.`);

// console.log(name[0]);
// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(3));
// console.log(name.indexOf("u"));

const newName = name.substring(0, 3);
console.log(newName );
const newName2 = name.slice(0, 3);
console.log(newName2);

const newName3 = name.replace("Rudra", "Rudra Parmeshwar");
console.log(newName3);
  
const newName4 = "     Rudra     ".trim();
console.log(newName4);

const newName5 = "Rudra Parmeshwar".split(" ");
console.log(newName5);

const newName6 = "Rudra Parmeshwar".includes("Rudra");
console.log(newName6);






