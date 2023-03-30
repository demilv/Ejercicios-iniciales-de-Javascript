// Inserta dinamicamente en un html un div que contenga una p con javascript.

let divVacio$$ = document.createElement("div");
let body$$ = document.querySelector("body")
body$$.appendChild(divVacio$$)

let pHija$$ = document.createElement("p")
pHija$$.textContent = "Hola que tal"
divVacio$$.appendChild(pHija$$)