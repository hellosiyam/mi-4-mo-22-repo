const employes = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function monthlySalary(salarys) {
    let salaryProvide= 0;
    for(const salary of salarys ){
        const fiveYearsExperince = salary.experience * salary.increment;
        const fiveYearsSalary = fiveYearsExperince + salary.starting;
        salary.monthlySalary = fiveYearsSalary; //Assign New Poparty for monthly salary
        salaryProvide+= salary.monthlySalary;  //For Total salary
    }
    console.log(employes);
    return salaryProvide;
    
    
}
const totalSalary = monthlySalary(employes);
console.log(totalSalary);
