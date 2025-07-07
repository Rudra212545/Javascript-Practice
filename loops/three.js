// for of loop 
const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    // console.log(element);
}

const greet = "Greetings"
for (const char of greet) {
    // console.log(char);
}

// Maps 
const map = new Map()
map.set("IN","India");
map.set("US","United States");
map.set("UK","United Kingdom");
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, value);
    
}

const myObj = {
    "game1":"NFS",
    "game2":"FIFA",
    "game3":"PUBG"
}
// Note : for-of loop does not work with objects directly.
// for (const [game,name] of myObj) {
//     console.log(game, name);
// }

