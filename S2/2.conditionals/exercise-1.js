// Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let conditions = 0;


for (let i  = 0; i<alumns.length; i++){

    if (alumns[i].T1 == true){
        conditions++;
    }
    if (alumns[i].T2 == true){
        conditions++;
    }
    if (alumns[i].T3 == true){
        conditions++;
    }
    if (conditions >= 2){
        alumns[i].isApproved = true;
    }
    conditions = 0;
}

console.log(alumns)