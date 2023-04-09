// Dado el siguiente array, haz la media de las notas de todos los examenes .reduce().

// ```js
const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
// ```
let total = exams.length
let contador = 0;
const notasMedias = exams.reduce((añadir, actual) => {
    añadir += actual.score
    contador++  
    if (contador == exams.length){
        añadir = añadir / 10
    }
    return añadir
}, 0)

console.log(notasMedias)