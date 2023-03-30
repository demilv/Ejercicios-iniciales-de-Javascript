// Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let p$$ = document.createElement("p");
p$$.textContent = `Soy dinamico!`
let body$$ = document.querySelector("body")
body$$.appendChild(p$$)