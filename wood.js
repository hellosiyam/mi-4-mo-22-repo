// function woodNeed(totalChire, totalTabile, totalBed) {
//     const preChireWood = 3;
//     const perTabileWood = 10;
//     const perBedWood = 50;

//     const woodForChire = totalChire * preChireWood;
//     const woodForTabile = totalTabile * perTabileWood;
//     const woodForBed = totalBed * perBedWood;

//     const totalWood = woodForChire + woodForTabile + woodForBed;
//     return totalWood;
// }
// const yourNeed = woodNeed(0, 0, 1);
// console.log(yourNeed);

// ------------> shirtPrice = 300;
// ------------> panttPrice = 500;
// ------------> ShowePrice = 900;

function yourNeed(totalShirt, totalPant, totalShowe) {
    const perShirtPrice = 300;
    const perPantPrice = 500;
    const perShowePrice = 900;

    const needShirt = totalShirt * perShirtPrice;
    const needPant = totalPant * perPantPrice;
    const needShowe = totalShowe * perShowePrice;

    const totalPrice = needShirt + needPant + needShowe;

    return totalPrice
}
const buy = yourNeed(1, 2, 3);
console.log(buy);

