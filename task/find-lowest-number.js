function minNumber(numbers) {
    let min = numbers[0];
    for(const number of numbers)
    if (number < min) {
        min = number
    }
    return min
}
const heights2 = minNumber([167, 190, 120, 165, 137]);
console.log(heights2);
