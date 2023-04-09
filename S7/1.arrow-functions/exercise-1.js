// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

// - Ejecuta esta función sin pasar ningún parametro
// - Ejecuta esta función pasando un solo parametro
// - Ejecuta esta función pasando dos parametros

let a = 10;
let b = 5;

//2 parametros
let suma = ((a, b) => {
    return a+b;
})
console.log(suma(a,b))

//1 parametro
let suma2 = ((a) =>{
    return a+b
})
console.log(suma2(a))

let suma3 = () => a + b;
console.log(suma3())