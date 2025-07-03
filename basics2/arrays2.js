const marvelHeroes = ["thor", "iron", "spiderman"];
const dcHeroes = ["batman", "superman", "flash"]; 

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); // ["thor", "iron", "spiderman", ["batman", "superman", "flash"]]
// console.log(marvelHeroes[3][2]); 

// console.log(marvelHeroes.concat(dcHeroes)); // ["thor", "iron", "spiderman", "batman", "superman
// // console.log(marvelHeroes); 

const allHeros = [...marvelHeroes, ...dcHeroes];
console.log(allHeros); // ["thor", "iron", "spiderman", "batman", "superman

const anotherArray = [1,2,3,4,[5,6,7],8,9,[10,11,12]];
console.log(anotherArray.flat());


const score1 =100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
