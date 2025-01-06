const phonesArray = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function allPhones(phones) {
    let avg = []
    sum = 0;
  for(const phone of phones){
    sum+=phone.price;
    avg.push(phone)
  }
  return sum / avg.length;
  
}
const totalAvg = allPhones(phonesArray);
console.log(totalAvg);

