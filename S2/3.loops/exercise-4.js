// Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

let incluido = [];

// for (const propiedad in toys){
//     if(toys[propiedad].name.includes("gato")){
//         incluido.push(propiedad)
//     }
//     console.log(`propiedad es: ${propiedad} y toyslength es ${toys.length}`)    
// }

let posicion = 0

for (const propiedad of toys){
    if(propiedad.name.includes("gato")){
        incluido.push(posicion)
    }   
    posicion++
}

incluido.reverse()

for (const numeros of incluido){
    toys.splice(numeros,1)
}

console.log(toys)