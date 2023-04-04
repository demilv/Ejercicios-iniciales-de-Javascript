// Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

localizarBody$$ = document.querySelector("body")  

for (let i = 0; i<countries.length; i++){
    nuevoDiv$$ = document.createElement("div");
    nuevoH4$$ = document.createElement("h4");
    nuevaImg$$ = document.createElement("img");
      
    h4Content$$ = document.createTextNode(countries[i].title)
    imgContent$$ = document.createTextNode(countries[i].imgUrl)
    nuevoH4$$.appendChild(h4Content$$)
    nuevaImg$$.appendChild(imgContent$$)
    localizarBody$$.appendChild(nuevoDiv$$);
    nuevoDiv$$.appendChild(nuevoH4$$)
    nuevoDiv$$.appendChild(nuevaImg$$)
}

button$$ = document.querySelector("button")
let tamaño = localizarBody$$.children.length-1;
button$$.addEventListener("click", () =>   
  localizarBody$$.removeChild(localizarBody$$.children[tamaño])
);
