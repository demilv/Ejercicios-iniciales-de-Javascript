// Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let totalventas = 0;
let totaltipos = 0;

for (i = 0; i<products.length; i++){
    totalventas = products[i].sellCount + totalventas;
    totaltipos++;
}

console.log("Esta es la media de ventas " + totalventas/totaltipos);