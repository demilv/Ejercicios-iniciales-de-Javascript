// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
//  los usuarios.

const users = [
    {name: 'Manolo el del bombo',
    favoritesSounds: {
        waves: {format: 'mp3', volume: 50},
        rain: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]


let media = 0
let tipostotales = 0

for (const usuarios of users){
    for (const volumenes in usuarios.favoritesSounds){       
        // console.log(usuarios.favoritesSounds[volumenes].volume)
        media += usuarios.favoritesSounds[volumenes].volume;
        tipostotales++;             
    }
    console.log(`La media del sonido favorito de ${usuarios.name} es de ${media/tipostotales}`)
    media = 0;
    tipostotales = 0;
}