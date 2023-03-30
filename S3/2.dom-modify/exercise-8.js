// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

// ```html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//    <div></div>
//    <div></div>
// </body>
// </html>```

let newP$$ = document.createElement("p")
let pContent  = document.createTextNode("Voy en medio!")
newP$$.appendChild(pContent)
let body$$ = document.querySelector("body");
let div$$ = document.querySelectorAll("div")
body$$.insertBefore(newP$$, div$$[1]);
//Otra forma// body$$.insertBefore(newP$$, div$$[0].nextSibling);