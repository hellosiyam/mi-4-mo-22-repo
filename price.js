// const mobiles = [
//     {phone : "Apple", price : 27000 , color : "Red", camera : "12mp"},
//     {phone : "SamSung", price : 120000 , color : "Red", camera : "12mp"},
//     {phone : "Mi", price : 45000 , color : "Red", camera : "12mp"},
//     {phone : "Realmi", price : 60000 , color : "Red", camera : "12mp"},
//     {phone : "Asus", price : 20000 , color : "Red", camera : "12mp"}
// ]
// function mob(params) {
//     let prices = params[0]  
//     for(const pera of params){
//         if (pera.price < prices.price) {
//             prices = pera
//         }
//     }
//     return prices
// }

// const result = mob(mobiles)
// console.log(result);

const mobiles = [
    {phone : "Apple", price : 140000, color : "red", camera : "16mp"},
    {phone : "samsung", price : 92000, color : "red", camera : "16mp"},
    {phone : "pixel", price : 78000, color : "red", camera : "16mp"},
    {phone : "Rog", price : 168000, color : "red", camera : "16mp"},
    {phone : "Huwai", price : 88000, color : "red", camera : "16mp"}
]

function mobile(ctg) {
    let mob = ctg[0]
   for(const all of ctg){
    if (all.price < mob.price) {
       mob = all
    }
   }
   return mob;
}
const result = mobile(mobiles);
console.log(result);

