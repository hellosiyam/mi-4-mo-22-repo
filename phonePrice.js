const phones = [
    {name : "Apple", price : 150000, color : "Red", camera : "16mp"},
    {name : "Aamsung", price : 98000, color : "Red", camera : "16mp"},
    {name : "Xaomi", price : 65822, color : "Red", camera : "16mp"},
    {name : "Pixel", price : 56200, color : "Red", camera : "16mp"},
    {name : "Hawai", price : 14700, color : "Red", camera : "16mp"},
    {name : "Nokia", price : 10000, color : "Red", camera : "16mp"},
]


function getCheep(phones) {
    let cheep = phones[0];
    for(const phone of phones)
    if (phone.price < cheep.price) {
        cheep = phone
    } 
    return cheep
}
const findPhone = getCheep(phones);
console.log(findPhone);
