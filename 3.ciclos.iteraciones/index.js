//ESTRUCTURA
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
//EJEMPLO 
/* for (let i = 0; i < 10; i++){
    console.log(i);
}   */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                          //diferencia entre for y while, el primero es por conteo y el segundo por condicion///
//ESTRUCTURA
/* while (condition) {
    } */
//EJEMPLO
/* let nombre = prompt("ingrese usuario");

while (nombre != "facundo") {
    alert ("usuario incorrecto");
    
    nombre =  prompt ("ingrese usuario");
}

alert("Bienvenido!"); */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ESTRUCTURA
/* switch (key) {
    case value:
        
        break;
    case value:
        
        break;    

    default:
        break;
} */
//EJEMPLO
/* let moneda = prompt("Ingrese cantidad de $: ");
let cambio = prompt ("ingrese tipo de moneda: ")

switch (moneda, cambio) {
    case "dolar":
        cambio = moneda / 470
        alert(cambio)
        break;

    case "uru":
        cambio = moneda / 210
        alert(cambio)
        break

    case "real":
        cambio = moneda / 180
        alert(cambio)
        break
        
    default:
        break;
} */