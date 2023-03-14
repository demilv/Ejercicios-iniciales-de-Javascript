// Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

// let usedStrawberry = false;
// let usedBanana = false;
// let usedOrange = false;
// let usedApple = false;

// for (i = 0; i < foodSchedule.length; i++){
//     if(foodSchedule[i].isVegan == true) {
//     }else if (foodSchedule[i].isVegan == false && usedStrawberry == false){       
//         foodSchedule[i].name = "Strawberry";
//         foodSchedule[i].isVegan = true;
//         usedStrawberry = true;
//     }else if (foodSchedule[i].isVegan == false && usedBanana == false){
//         foodSchedule[i].name = "Banana";
//         foodSchedule[i].isVegan = true;
//         usedBanana = true;
//     }else if (foodSchedule[i].isVegan == false && usedOrange == false){
//         foodSchedule[i].name = "Orange";
//         foodSchedule[i].isVegan = true;
//         usedOrange = true;
//     }else{
//         foodSchedule[i].name = "Apple";
//         foodSchedule[i].isVegan = true;
//         usedApple = true;
//     }
// }   

let nuevafruta = 0;

for (i = 0; i < foodSchedule.length; i++){
    if(foodSchedule[i].isVegan == false){
        switch(nuevafruta){
            case nuevafruta:
                foodSchedule[i].name = fruits[nuevafruta];
                foodSchedule[i].isVegan = true;
                nuevafruta++;
                break;
            default:
                break;      
        }              
    }
}

console.log(foodSchedule);