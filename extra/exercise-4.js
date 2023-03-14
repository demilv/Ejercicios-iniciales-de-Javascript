// Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let totalventas = 0;

for (i = 0; i<products.length; i++){
    totalventas = products[i].sellCount + totalventas;
}

console.log("Este es el total de ventas: " + totalventas);
