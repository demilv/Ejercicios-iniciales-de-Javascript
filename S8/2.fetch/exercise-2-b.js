// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

// ```  
body$$ = document.querySelector("body")

    const creator = (texto) => {
        const p$$ = document.createElement("p")
        p$$.innerHTML = `${texto}`
        body$$.appendChild(p$$)

    }
  
  const takeInput = () => {  
      const input$$ = document.querySelector("input");
      const button$$ = document.querySelector("button");
      button$$.addEventListener("click", () =>
        creator(input$$.value)
    );
  };

function init(){
    takeInput()
}

init()