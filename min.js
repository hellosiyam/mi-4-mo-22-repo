const prices = [10000, 54000, 100000, 6000, 85200, 12365]

function getMin(numbers) {
    let min = prices[0]
    for(const number of numbers){
        if (number < min) {
            min = number
        }
    }
    return min
}
const cheep = getMin(prices);
console.log(cheep);
