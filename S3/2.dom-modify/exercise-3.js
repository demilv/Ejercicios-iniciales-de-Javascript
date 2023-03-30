// Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let divVacio$$ = document.createElement("div");
let body$$ = document.querySelector("body")
body$$.appendChild(divVacio$$)


for (let i = 0; i < 6; i++){
    let pHija$$ = document.createElement("p")
    pHija$$.textContent = `soy la p numero ${i+1}`
    divVacio$$.appendChild(pHija$$)
}
