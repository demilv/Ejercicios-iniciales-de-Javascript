// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

// ```js
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
// ```



const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul$$ = document.createElement("ul");
let body$$ = document.querySelector("body")
body$$.appendChild(ul$$)

for (let i = 0; i < countries.length; i++){
    let liHija$$ = document.createElement("li")
    liHija$$.textContent = countries[i]
    ul$$.appendChild(liHija$$)    
}