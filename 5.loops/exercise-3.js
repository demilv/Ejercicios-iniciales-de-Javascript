// Crea un bucle para conseguir dormir contando ovejas. Este bucle empieza en 0 y termina en 10. Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'.

let contar = 0;

while(contar<10){
    console.log("Intentando dormir");    
    contar++;
    if(contar == 10){
        console.log("Dormido!");
    }
}