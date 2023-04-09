// Dado el siguiente array, usa .find() para econtrar el número 100.

// ```js
const numbers = [32, 21, 63, 95, 100, 67, 43];
// ```

const found = numbers.find(function (numero) {
    return numero === 100;
  });

  console.log(found)