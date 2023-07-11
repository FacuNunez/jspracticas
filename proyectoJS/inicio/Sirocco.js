//array con los productos
/* const productos = [
    { id: 1, nombre: "1/4 kg", precio: 750 },
    { id: 2, nombre: "1/2 kg", precio: 1500 },
    { id: 3, nombre: "1 kg", precio: 3000 },
    { id: 4, nombre: "2 kg", precio: 4500 },
];
//msj de bienvenida
let bienvenida = prompt(
    "Hola, somos SIROCO \n Estos son nuestros productos disponibles: \n 1. 1/4 kg \n 2. 1/2 kg  \n 3. 1 kg \n 4. 2 kg \n queres pedir? (si/no)"
);
//condicional para ver que producto va a llevar
if (bienvenida === "si" || bienvenida === "SI") {
    let elegir = prompt(`que vas a llevar?`);
    //se busca en el array productos cual fue la seleccion del cl y se muestra por alert
    let encontrado = productos.find((item) => item.nombre === elegir);
    let mostrar = `
        producto: ${encontrado.nombre}
        precio: $ ${encontrado.precio}
    `;
    alert(mostrar);
//se le consulta al cl cuantos gustos va a llevar y se le pone un minimo y un maximo(mas adelante habra que ver como confirmar la cantidad elegida con el maximo posible)
    let cantidad = prompt("Elegi cuantos gustos queres: ");
    let gustos;
    if (cantidad > 0 && cantidad < 5) {
        gustos = prompt("Indica los gustos vas a llevar en el pote: ");
        alert(gustos);
    } else {
//si el maximo es sobrepasado se le mustra un alert con el msj
        alert("minimo un gusto, maximo cuatro por pote");
        cantidad = prompt("Elegi cuantos gustos queres: ");
    }
//se le muestra al cl el pedido solicitado + los gustos seleccionados
    let mensaje = prompt(
        `tu pedido es : ${mostrar} \n tus gustos: ${gustos} \n confirmas el pedido:  (si/no)`
    );
//si confirma el pedido se le pide que ingrese el domicilio para el envio
    if (mensaje === "si" || mensaje === "SI") {
        let domicilio = prompt("Ingresa los datos del domilicio: ");
//se le pide que confirme el domicilio
        let confirmacion = prompt(`Su domicilio es ${domicilio}: (si/no)`);
        if (confirmacion === "si") {
        //se le indica el tiempo de demora(mas adelante se calculara de alguna manera mas dinamica).
            alert("el pedido llegara en 20 minutos, gracias por tu compra");
        } else {
            domicilio = prompt("Ingresa los datos del domilicio: ");
        }
    } else {
        alert("Gracias por visitarnos!!");

    }
} else {
    alert("Gracias por visitarnos!!");
} 
 */

