// Elimina el último elemento del array y muestra el primero y el último por consola.

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

RickAndMortyCharacters.splice([RickAndMortyCharacters.length-1],1);

console.log(RickAndMortyCharacters[RickAndMortyCharacters.length-1]);
console.log(RickAndMortyCharacters[0]);
