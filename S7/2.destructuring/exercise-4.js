// En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.


// ```js
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
// ```

let name = car.name;
let itv = car.itv;

let itv1 = itv[0]
let itv2 = itv[1]
let itv3 = itv[2]

console.log(name, itv1, itv2, itv3)