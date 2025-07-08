// Reduce function

const myNums = [1, 2, 3, 4, 5];
const initialValue = 0;

// const sum = myNums.reduce((accumulator,currentValue)=>{
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//     return accumulator + currentValue;
// },initialValue);

const sum = myNums.reduce((acc,curr)=> acc+curr, initialValue);
console.log(sum);

const shoppingCart = [
    {
        itemName:"JS course",
        price: 2999
    },
    {
        itemName:"Py course",
        price: 999
    },
    {
        itemName:"Mobile dev course",
        price: 5999
    },
    {
        itemName:"Data Science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=>{
     return acc+item.price
},0)

console.log(totalPrice);
