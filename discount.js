function ticketQuantity(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  }
  else if(quantity <= 200){
    const total = quantity * 80;
    return total;
  }
  else{
    const total = quantity * 60;
    return total
  }
}
const total = ticketQuantity(201);
console.log(total);
