// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

// ```js
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
// ```

let usuarios = users.map((person) => ({
   nombre : person.name
  }));

  for (personas in usuarios){
    if (usuarios[personas].nombre.charAt(0) == "A")
    {
        usuarios[personas].nombre = "Anacleto"
    }
  }

  console.log(usuarios)

// :( ?