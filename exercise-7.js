


let globalBasePrice = 10000;
globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
car1.basePrice = car1.basePrice + globalBasePrice;
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
car2.basePrice = car2.basePrice+globalBasePrice;

console.log (car1.basePrice);
console.log (car2.basePrice);