// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:


function findArrayIndex(array, text) {
    if(array.includes(text))
    {
        return console.log(array.indexOf(text))
    }else{
        console.log("texto erroneo")
    }
}


// Ej array:

const arr = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

findArrayIndex(arr, "Ajolote")