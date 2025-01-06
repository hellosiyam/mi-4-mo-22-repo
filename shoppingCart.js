const prices = [
    {name : "Shampo", price : 1200, quantity : 1},
    {name : "perfume", price : 650, quantity : 3},
    {name : "shirt", price : 300, quantity : 4},
    {name : "pant", price : 900, quantity : 5},
]

function getPrice(prices) {
    let finalPrice = 0;
    for(const price of prices){
        let totalPrice = price.price * price.quantity;
        finalPrice +=totalPrice;
    }
    return finalPrice;
}
const total = getPrice(prices);
console.log(total);
