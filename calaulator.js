// function add(num1, num2) {
//    const sum = num1 + num2;
//    return sum; 
// }

// function substract(num1, num2) {
//     const substract = num1 - num2;
//     return substract;
// }

// function multyply(num1, num2) {
//     const multyply = num1 * num2;
//     return multyply;
// }

// function  devide(num1, num2) {
//     const devide = num1 / num2;
//     return devide;
// }

// function calculate(num1 , num2 , opration) {
//     if (opration === "add") {
//         const sum = num1 + num2;
//         return sum
//     }
//     else if (opration === "sub") {
//         const sub = num1 - num2;
//         return sub;
//     }
//     else if (opration === "multi") {
//         const multi = num1 * num2;
//         return multi;
//     }
//     else if (opration === "devid") {
//         const devid = num1 / num2;
//         return devid;
//     }
//     else{
//         return "give Some value"
//     }
// }
// const result = calculate(10, 15, "multi");
// console.log(result);

function add(num1, num2) {
   const sum = num1 + num2;
   return sum 
}
function sub(num1, num2) {
   const sub = num1 - num2;
   return sub 
}
function multi(num1, num2) {
   const multi = num1 * num2;
   return multi 
}
function div(num1, num2) {
   const div = num1 / num2;
   return div 
}

function calculate(a, b, opration) {
    if (opration === "add") {
        const result = add(a, b);
        return result
    }
    else if (opration === "sub"){
        const result = sub(a, b);
        return result
    }
    else if (opration === "multi"){
        const result = multi(a, b);
        return result
    }
    else if (opration === "div"){
        const result = div(a, b);
        return result
    }
}
const total = calculate(5, 10 ,"div");
console.log(total);

