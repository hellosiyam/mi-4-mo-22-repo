const mobiles = [
    {phone : "Apple", price : 27000 , color : "Red", camera : "12mp"},
    {phone : "SamSung", price : 120000 , color : "Red", camera : "12mp"},
    {phone : "Mi", price : 45000 , color : "Red", camera : "12mp"},
    {phone : "Realmi", price : 60000 , color : "Red", camera : "12mp"},
    {phone : "Asus", price : 20000 , color : "Red", camera : "12mp"}
]
function mob(params) {
    let prices = params[0]  
    for(const pera of params){
        if (pera.price < prices.price) {
            prices = pera
        }
    }
    return prices
}

const result = mob(mobiles)
console.log(result);
