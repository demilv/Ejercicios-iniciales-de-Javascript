// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

body$$ = document.querySelector("body")
pIds$$ = 0;

const baseUrl = 'https://api.nationalize.io?name=';

    const get = async (valor) => {
        let buscarvalor = baseUrl + valor
        console.log(buscarvalor)
        const response = await fetch(buscarvalor);
        const res = await response.json();
        console.log(res)
        creator(res)
    };

    const creator = (texto) => {
        const p$$ = document.createElement("p")
        const eliminar$$ = document.createElement("button")        
        p$$.innerHTML = `El nombre ${texto.name}`
        for (paises in texto.country){
        p$$.innerHTML += ` tiene un ${texto.country[paises].probability*100} de ser de ${texto.country[paises].country_id}`
        }        
        p$$.setAttribute("id", `${pIds$$}`);
        eliminar$$.setAttribute("id", `a${pIds$$}`)
        pIds$$++
        body$$.appendChild(p$$)
        body$$.appendChild(eliminar$$)
        eliminador(eliminar$$)
        
    }

    const localizar = (id) => {
        console.log(id)  
        let children = body$$.childNodes;
        console.log(children)
        for (hijos of children){
            if (hijos.id == id)
            {                
                console.log(hijos)
                return hijos
            }
        }
    } 

    const eliminador = (boton) => { 
        // console.log(boton)
        // botonP = document.querySelectorAll(`#${boton.id}`)
        let botonp$$ = boton.id.substring(1)   
        let acotada$$ = localizar(botonp$$)
        // let acotada$$ = busqueda$$.querySelector(`#${botonp$$}`)        
        boton.addEventListener("click", () => {
            // console.log(acotada$$)
            acotada$$.remove()
            boton.remove()
    });
        // boton.addEventListener("click", () =>

        // )
    };
        
    
  
  const takeInput = () => {  
      const input$$ = document.querySelector("input");
      const button$$ = document.querySelector("button");
      button$$.addEventListener("click", () =>
        get(input$$.value)
    );
  };

function init(){
    takeInput()
}

init()
// ???