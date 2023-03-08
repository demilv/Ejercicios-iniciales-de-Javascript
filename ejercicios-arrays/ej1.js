let arr = [0, 1, 2];

// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones

console.log(arr[0]); //Metodo 1
console.log(arr.shift()); //Metodo 2 (Aunque también eliminamos dicho elemento)

console.log(arr.unshift(0)); //Esta línea es para volver a ponerlo

console.log(arr.reverse()) //Metodo 3, le damos la vuelta y nos devuelve el array invertido (y podemos ver el nuevo elemento como el primero directamente); si queremos mirar el nuevo primer elemento especificamente y no el resto del array podemos volver a usar console.log(arr[0] o podemos usar un 2 en lugar de un 0 para ver el antiguo elemento)

console.log(arr.reverse()) //Devolviendolo a su sitio

console.log(arr.slice(0,1)); //Metodo 4 Devuelve el primer elemento del array unicamente



// ¿Cómo acceder al último elemento de un array? Dime 4 opciones

console.log(arr[2]); //Metodo 1
console.log(arr.pop()); //Metodo 2 (Aunque también eliminamos dicho elemento)

console.log(arr.push(2)); //Devolviendo el elemento

console.log(arr.reverse()); //Metodo 3 (Igual que usando reverse en el primer ejercicio pero ahora usaríamos console.log(arr[2]) para ver el nuevo elemento del final, podemos cambiar el 2 por un 0 para ver el antiguo)

console.log(arr.reverse()); //Devolviendolo a su sitio

console.log(arr.slice(arr.length-1)); //Metodo 4