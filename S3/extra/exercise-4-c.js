// Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

localizarBody$$ = document.querySelector("body")  

for (let i = 0; i<countries.length; i++){
    nuevoDiv$$ = document.createElement("div");
    nuevoDiv$$.setAttribute("id", `id${i}`)
    nuevoH4$$ = document.createElement("h4");
    nuevaImg$$ = document.createElement("img");
    nuevobttn$$ = document.createElement("button")
    nuevobttn$$.setAttribute("id", `bttn${i}`);    
    nuevobttn$$.innerHTML += "Elimina el div encima mio"

    h4Content$$ = document.createTextNode(countries[i].title)
    imgContent$$ = document.createTextNode(countries[i].imgUrl)

    nuevoH4$$.appendChild(h4Content$$)
    nuevaImg$$.appendChild(imgContent$$)
    localizarBody$$.appendChild(nuevoDiv$$);
    nuevoDiv$$.appendChild(nuevoH4$$)
    nuevoDiv$$.appendChild(nuevaImg$$)
    nuevoDiv$$.appendChild(nuevobttn$$)
}

button$$ = document.querySelector("button")
let tamaño = localizarBody$$.children.length-1;

button$$.addEventListener("click", () =>   
  localizarBody$$.removeChild(localizarBody$$.children[tamaño])
);


for (let i = 1; localizarBody$$.children.length-1; i++){
    let localizarId$$ = document.getElementById(`bttn${i-1}`);
    let localizarId2$$ = document.getElementById(`id${i-1}`)
    localizarId$$.addEventListener("click", () =>
        localizarId2$$.remove()        
  );
}