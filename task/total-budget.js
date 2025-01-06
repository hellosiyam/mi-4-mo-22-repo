function buy(totalLaptop, totalTablet, totalmobile ) {

    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalLaptopPrice = laptopPrice * totalLaptop;
    const totalTabilePrice = tabletPrice * totalTablet;
    const totalMobilePrice = mobilePrice * totalmobile;

    const totalAmount = totalLaptopPrice + totalTabilePrice + totalMobilePrice;
    return totalAmount;
}

const price = buy(1, 2, 3);
console.log(price);
