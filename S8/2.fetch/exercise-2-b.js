// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

// ```  
body$$ = document.querySelector("body")
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
        p$$.innerHTML = `El nombre ${texto.name}`
        for (paises in texto.country){
          p$$.innerHTML += ` tiene un ${texto.country[paises].probability*100} de ser de ${texto.country[paises].country_id}`
        }        
        body$$.appendChild(p$$)

    }
  
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