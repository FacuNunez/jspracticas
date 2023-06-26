///funciones
/* estructura de funcion 
function nombreFuncion(){
    codigo a ejecutar por la funcion
}
*/
//sin parametros
/* function saludar() {
  let nombre = prompt("ingrese su nombre");
  let mensaje = `Hola ${nombre}`;
  alert(mensaje);
}

//hay que invocar la funcion para que funcione
//sirve para no repetir codigo, solo con nombrerla se ejecutara las veces que sea necesario, y en el caso de tener que cambiar algo del enunciado lo simplifica al solo cambiar en la funcion
saludar(); */

//con parametros
//de esta manera nos evitamos declarar variables dentro de la funcion
//importa el orden de los parametros
/* function saludar(nombre, edad) {
    let mensaje = `Hola ${nombre} tiene ${edad} de edad`;
    alert(mensaje);
    
}

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

saludar(nombre, edad); */

/* function sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}

sumar(4,3) */

//ruturn le dice a la funcion que es lo q tiene q devolver, con el console.log lo muestra solamente
/* function sumar(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = sumar(4,3); 
console.log(resultado); */
//muestra por consola 9, en la variable resultado retorna la funcion.
//utilizo return cuando necesito que la funcion retorne el valor para utilizarlo en otra parte del codigo 
//el return finaliza la funcion


/* function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;
    
    case "-":
      return num1 - num2;
      break;
        
    case "*":
      return num1 * num2;
      break;
      
    case "/":
      return num1 / num2;
      break;
  
    default:
      return "operacion no disponible;"
      break;
  }
  
}

console.log(calculadora(3,4, "* ")); */

//scope
//dos ambitos, local y global, local solo se reconoce en un solo lado (bloque de codigo), global es en todos lados(todo el codigo)
//con var, funciona pero es mala practica

//Ejemplo global
/* let resultado;

function sumar(num1, num2) {
  resultado = num1 + num2;
}

sumar(5, 6);
console.log(resultado); */

//Ejemplo local

/*  function sumar(num1, num2) {
  let resultado = num1 + num2;
}

sumar(5, 6);
console.log(resultado); */


/* let nombre = "Jhon Doe"

function saludar() {
  let nombre = "Juan Coder"
  console.log(nombre)
  
}

console.log(nombre);

saludar(); */

///Funciones Flechas(Arrow function), Funciones anonimas

//Ejemplo Funcion Anonima

/* let suma = function (a, b) { return a + b};
console.log(suma (9, 7)); */


//Ejemplo Arrow Function

/* const suma = (a, b) => { return a + b };
console.log(suma(5,6)); */

/* let suma = a => {
  todo tu 
  codigo
  mas largo
  return 
} */


/* const suma = ( a, b ) => a + b;
const resta = ( a, b ) => a - b;
const iva = x => x * 0.21; //como es un solo parametro no hay que utilizar los ()
let precioProducto = 500; 
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio); */

























