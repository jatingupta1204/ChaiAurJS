const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, curval) => {
    console.log(`Acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0)

const myTotal1 = myNums.reduce( (acc, curval) => acc+curval, 0)
console.log(myTotal);
console.log(myTotal1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile Dev course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);