// # Español
// Dado el siguiente html usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

// ```html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <span data-function="testMe">Batman</span>
//     <span data-function="testMe">Robin</span>
//     <span data-function="testMe">Rick</span>
//     <span data-function="testMe">Morty</span>
// </body>
// </html>
// ```

console.log("juju")
let arr = document.querySelectorAll("span")

for (let i = 0; i < arr.length; i++){
    if (i == 2){
        console.log(arr[2])
    }
}