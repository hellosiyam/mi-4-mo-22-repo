// const num1 = 5;
// const num2 = 21;
// const num3 = 40;
// if (num1 > num2 && num1 > num3) {
//     console.log("Number -1 is the king", num1);
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log("Number - 2 is the king", num2);
// }
// else{
//     console.log("Number - 3 is the king", num3);
// }

function maxNumber(kim, tim, jim) {
    if (kim > tim && kim > jim) {
        
        return "Kim is the king"+" "+kim;
    }
    else if (tim > kim && tim > jim) {
        return "Tim is the king"+" "+tim;
    }
    else{
        return "Jim is the king"+" "+jim
    }
}
const result = maxNumber(16, 25, 48)
console.log(result);
