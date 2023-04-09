// Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
//  introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//   introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const body$$ = document.querySelector("body")

const draw = (streamers) => {  
    if(body$$.children.length > 2)
    {
        do {
            body$$.removeChild(body$$.children[body$$.children.length-1])
        }while(body$$.children.length > 2)
    }

    for (let streamer in streamers) {
      const div$$ = document.createElement("div");
      
      div$$.innerHTML = ` 
      <h2>${streamers[streamer].name}</h2>      
      <p>${streamers[streamer].age}</p>
      <p>${streamers[streamer].gameMorePlayed}</p>
      `;
      body$$.appendChild(div$$);
    }
  };
  
  const takeInput = (streamers) => {    

    let input$$ = document.querySelector("input")
    input$$.addEventListener("input", () =>
        searchCharacter(streamers, input$$.value)
    );
  }; 

  const searchCharacter = (arrayStreamers, filtro) => {
    let filteredStreamers = arrayStreamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(filtro.toLowerCase())
    );
    draw(filteredStreamers);
  };

function init (){
    draw(streamers)
    takeInput(streamers)
}

init()