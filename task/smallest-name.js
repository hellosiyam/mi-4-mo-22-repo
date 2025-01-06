function findSmallName(names) {
    let smallName = []
    let nam = names[0].length
    for(const name of names)
    if (name.length < nam) {
        nam = name.length
        smallName = name;
    }
    return smallName;
    
}
const heights2 = findSmallName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(heights2);
