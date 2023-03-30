// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

// ```html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//    <div class="fn-insert-here"></div>
//    <div></div>
//    <div class="fn-insert-here"></div>
//    <div>Aqui no va un p</div>
// </body>
// </html>```

// let newP$$ = document.createElement("p")
// let newPText$$ = document.createTextNode("Voy dentro!")
// newP$$.appendChild(newPText$$)

//Lo mueve????

// let arr$$ = document.querySelectorAll(".fn-insert-here")
// for (objeto of arr$$){
//     objeto.appendChild(newP$$)
// }

let arr$$ = document.querySelectorAll(".fn-insert-here")
for (let i = 0; i < arr$$.length; i++){
    let newP$$ = document.createElement("p")
    let newPText$$ = document.createTextNode("Voy dentro!")
    newP$$.appendChild(newPText$$)
    arr$$[i].appendChild(newP$$)
}
