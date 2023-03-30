// Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

// ```js
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
// ```

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement("ul");
let body$$ = document.querySelector("body")
body$$.appendChild(ul$$)


for (let i = 0; i < apps.length; i++){
    let liHija$$ = document.createElement("li")
    liHija$$.textContent = apps[i]
    ul$$.appendChild(liHija$$)    
}