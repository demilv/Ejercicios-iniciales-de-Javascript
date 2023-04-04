// Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 

// ```js
// const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
// ```

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for (let i = 0; i<countries.length; i++){
    nuevoDiv$$ = document.createElement("div");
    nuevoH4$$ = document.createElement("h4");
    nuevaImg$$ = document.createElement("img");

    localizarBody$$ = document.querySelector("body")    
    h4Content$$ = document.createTextNode(countries[i].title)
    imgContent$$ = document.createTextNode(countries[i].imgUrl)
    nuevoH4$$.appendChild(h4Content$$)
    nuevaImg$$.appendChild(imgContent$$)
    localizarBody$$.appendChild(nuevoDiv$$);
    nuevoDiv$$.appendChild(nuevoH4$$)
    nuevoDiv$$.appendChild(nuevaImg$$)
}