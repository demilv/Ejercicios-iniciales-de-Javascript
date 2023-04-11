// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

// ```js
const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
// ```

let ciudades = cities.map((ciudad) => ({
    nombre : ciudad.name
   }));

for (lugares in ciudades){
    for(lugares2 in cities){
        if(ciudades[lugares].nombre == cities[lugares2].name && cities[lugares2].isVisited == true){
            ciudades[lugares].nombre += "(Visitado)"
        }
    }
}  
console.log(ciudades)
// :(