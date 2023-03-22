// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
// `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
// llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
// javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function findArrayIndex(array, text) {
    if(array.includes(text))
    {
        return array.indexOf(text)
    }else{
        return console.log("texto erroneo en findarray");        
    }
}

function removeItem(array,text){
    let eleccion = findArrayIndex(array,text)
    if(typeof eleccion == "number")
    {
        array.splice(eleccion, 1)
    }else{     
        console.log("texto erroneo en remover")
    }
}

const arr = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

removeItem(arr, "Salamandra")

console.log(arr)