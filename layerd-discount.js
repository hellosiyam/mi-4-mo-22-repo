function layredDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 80;
    const third100Price = 60;
    
    if (quantity <= 100) {
        total = quantity *100;
        return total;
    }
    else if (quantity <= 200) {
        const priceFor100 = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingPrice = remainingQuantity * second100Price;
        const total = priceFor100 + remainingPrice;
        return total
    }
    else{
        const priceFor100 = 100 * first100Price;
        const priceFor200 = 200 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingPrice = remainingQuantity * third100Price;
        const total = priceFor100 + priceFor200 + remainingPrice;
        return total;
    }
}
const totalQuantity = layredDiscount(210)
console.log(totalQuantity);
