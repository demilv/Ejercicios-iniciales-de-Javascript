// Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

// ````js
const getCharacters = async () => {
    let respuesta = await fetch('https://rickandmortyapi.com/api/character')
    let res = await respuesta.json()
    return res
}

const init = async () => {
    const characters = await getCharacters()
    console.log(characters.results)
}

init()

// ````
