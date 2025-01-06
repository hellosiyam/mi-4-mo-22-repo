const numbers = [16, 20, 5, 36, 25, 10, 2, 10, 15]
let less = numbers[0];
for(const num of numbers){
    if (num<less) {
        less = num
    }
}
console.log(less);
