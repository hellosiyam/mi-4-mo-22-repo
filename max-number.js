// const number = [14, 25, 45, 63, 87, 102];
// let lrg = 0;
// for(const lrgNumber of number){
//     if (lrgNumber > lrg  ) {
//         lrg = lrgNumber
//     }
// }
// console.log(lrg);

const numbers = [14, 25, 63, 78, 45, 12,58];

function getMex(heighest) {
    let num = numbers[0]
    for(const number of heighest)
    if (number < num) {
        num = number
    }
    return num
    
}
const result = getMex(numbers);
console.log(result);


