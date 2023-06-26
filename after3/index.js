//calcular costo total de preoducto y/o servicios seleccionados por el usuario
//inicializamos las variables
//funciones 
/* let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert(
  `vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor valido numerico`
); 
//definimos las funciones necessarios
function ingresarPrecio() {
  precioProducto = Number(
    prompt("Ingrese el precio del producto" + (contador + 1) + ":")
  );

  while (precioProducto > 0) {
    gastoTotal = calcularTotal(precioProducto);
    contador++;
    precioProducto = Number(
      prompt("Ingrese el precio del producto" + (contador + 1) + ":")
    );
  }

  if (precioProducto <= 0 || isNaN(precioProducto)) {
    console.log("ha introducido un valor invalido");
  }
}

function calcularTotal(precioProducto) {
  return gastoTotal + precioProducto;
}

function mostrarTotal() {
  console.log("cantidad de productos: " + contador);
  console.log("el precio total es $" + gastoTotal);
}
ingresarPrecio();
mostrarTotal(); */


//funciones anonimas
/* let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert(
  `vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor valido numerico`
); 
//definimos las funciones necessarios
const ingresarPrecio = function () {
  precioProducto = Number(
    prompt("Ingrese el precio del producto" + (contador + 1) + ":")
  );

  while (precioProducto > 0) {
    gastoTotal = calcularTotal(precioProducto);
    contador++;
    precioProducto = Number(
      prompt("Ingrese el precio del producto" + (contador + 1) + ":")
    );
  }

  if (precioProducto <= 0 || isNaN(precioProducto)) {
    console.log("ha introducido un valor invalido");
  }
}

const calcularTotal = function (precioProducto) {
  return gastoTotal + precioProducto;
}

const mostrarTotal = function () {
  console.log("cantidad de productos: " + contador);
  console.log("el precio total es $" + gastoTotal);
}
ingresarPrecio();
mostrarTotal(); */

//funcion flecha
/* let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert(
  `vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor valido numerico`
); 
//definimos las funciones necessarios
const ingresarPrecio = () => {
  precioProducto = Number(
    prompt("Ingrese el precio del producto" + (contador + 1) + ":")
  );

  while (precioProducto > 0) {
    gastoTotal = calcularTotal(precioProducto);
    contador++;
    precioProducto = Number(
      prompt("Ingrese el precio del producto" + (contador + 1) + ":")
    );
  }

  if (precioProducto <= 0 || isNaN(precioProducto)) {
    console.log("ha introducido un valor invalido");
  }
}

const calcularTotal = (precioProducto) => gastoTotal + precioProducto;

const mostrarTotal = () => {
  console.log("cantidad de productos: " + contador);
  console.log("el precio total es $" + gastoTotal);
}
ingresarPrecio();
mostrarTotal(); */