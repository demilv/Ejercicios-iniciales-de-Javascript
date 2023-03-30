// Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

// ```html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//   <input type="text"/>
// </body>
// </html>
// ```

let recogerText$$ = document.querySelector("input")
recogerText$$.addEventListener("focus", (evento) =>
console.log(`Te has centrado en el input`) // console.log(`Te has centrado en ${evento.srcElement.id}`) -> me diria el elemento si le pasara la id, pero en este ejercicio el input no tiene id
)
