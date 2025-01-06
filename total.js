const products = [
    {name : "Shampo", price : 1200},
    {name : "perfume", price : 650},
    {name : "shirt", price : 300},
    {name : "pant", price : 900},
]

function getShoppingTotal(products) {
    let price = 0;
    for(const product of products){
        price = product.price + price
    }
    return price
}
const total = getShoppingTotal(products);
console.log(total);
