// Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

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
recogerText$$.addEventListener("input", (escrito) => console.log(escrito.target.value));