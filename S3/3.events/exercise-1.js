// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

let button$$ = document.createElement("button")
let newButtonText$$ = document.createTextNode("Clicame!")
button$$.appendChild(newButtonText$$)
button$$.setAttribute("id", "btnToClick")
body$$ = document.querySelector("body")
body$$.appendChild(button$$)

let recogerId$$ = document.getElementById("btnToClick")
recogerId$$.addEventListener("click", () =>
    console.log("Has clickeado")
)