const number = [14, 25, 45, 63, 87, 102];
let lrg = 0;
for(const lrgNumber of number){
    if (lrgNumber > lrg  ) {
        lrg = lrgNumber
    }
}
console.log(lrg);
