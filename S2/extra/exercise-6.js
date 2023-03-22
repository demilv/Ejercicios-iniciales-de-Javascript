// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
// resultante.


let arr = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap (array,pos1,pos2){
    let intercambio = "";
    intercambio = array[pos1];
    array.splice(pos1, 1, array[pos2]);
    array.splice(pos2, 1, intercambio)
    console.log(array);
}

swap(arr,3,1)