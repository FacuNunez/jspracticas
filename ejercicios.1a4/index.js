/* JAVASCRIPT 1
//actividad 1
let nombre = "Homero";
let apellido = "Simpson";
let edad = "50 años";

console.log(nombre);
console.log(apellido);
console.log(edad);

//actividad 2
let ciudad1 = "Springfield";
let ciudad2 = "Shelbyville";
let ciudad3 = "Capital City";
let ciudad4 = "Cypress Creek";
let ciudad5 = "Ogdenville";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

//actividad 3
let nombre2 = "Bart Simpson";
let direccion = "742 EVERGREEN TERR."
let pais = "SPRINGFIELD, USA"

let carnet = nombre2 + " " + direccion + " " + pais;
console.log(carnet); 

/* actividad 4
let familiar1 = prompt("ingrese el nombre de familiar 1: ");
let familiar2 = prompt("ingrese el nombre de familiar 2: ");
let familiar3 = prompt("ingrese el nombre de familiar 3: ");
let familiar4 = prompt("ingrese el nombre de familiar 4: ");
let familiar5 = prompt("ingrese el nombre de familiar 5: ");

let integrantes = familiar1 + " " + 
                  familiar2 + " " +
                  familiar3 + " " +
                  familiar4 + " " +
                  familiar5;

alert(integrantes); 

//actividad 5
let precio = parseFloat(prompt("Ingrese un precio: "));
let descuento = prompt("Ingrese  el descuento correspondiente: ");
let resultado = precio - ((precio * descuento)/ 100);

alert("valor a abonar $" + resultado); */

/*JAVASCRIPT 2
//Actividad 1

let nombre = prompt("Ingrese un nombre: ");

if (nombre === "Bart"){
    alert("Fui yo");
}

alert("No Fui yo"); 

//Actividad 2
let letra = prompt("Ingrese una letra: ");
if (letra == "Y" || letra == "y") {
  alert("Correcto");
} else {
  alert("Error");
} 

//Actividad 3
let eleccion = prompt("Ingrese un numero entre 1 y 4: ");
switch (eleccion) {
  case "1":
    alert("elegiste a homero");
    break;
  case "2":
    alert("elegiste a Marge");
    break;
  case "3":
    alert("elegiste a Bart");
    break;
  case "4":
    alert("elegiste a Lisa");
    break;
  default:
    break;
}

//Actividad 4
let presupuesto = prompt("Ingrese el valor del presupuesto: ");
if (presupuesto >= 0 && presupuesto < 1000) {
  alert("presupuesto bajo");
} else if (presupuesto >= 1001 && presupuesto < 3000) {
  alert("presupuesto medio");
} else {
  alert("presupuesto alto");
}

//Actividad 5
let prod1 = prompt("Ingrese un producto de almacen");
let prod2 = prompt("Ingrese otro producto de almacen");
let prod3 = prompt("Ingrese otro producto de almacen");
let prod4 = prompt("Ingrese otro producto de almacen");

if (prod1 !== "" && prod2 !== "" && prod3 !== "" && prod4 !== "") {
  alert(prod1 + " " + prod2 + " " + prod3 + " " + prod4);
} else {
  alert("Error: es necesarios cargar todos los productos");
}*/

//JAVASCRIPT 3

//actividad 3
/* let alumnos = '';
for (let index = 0; index < 10; index++) {
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos) */

//actividad 4
/* let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados); */

//actividad 5

/* let numero = prompt("Ingrese un numero entre 1 y 4:  ");

while (numero != "ESC") {
  switch (numero) {
    case "1":
      alert("Tomate");
      break;
    case "2":
      alert("Papa");
      break;
    case "3":
      alert("Carne");
      break;
    case "4":
      alert("Pollo");
      break;
    default:
      break;
  }
  numero = prompt("ingrese un numero entre 1 y 4: ");
} */

//JAVASCRIPT 4
//actividad 1
/* function entrada() {
  valor = prompt("Ingrese un valor: ");
}

function procesamiento(valor) {
  return "entrada es " + valor;
}

function salida(valor) {
  alert(procesamiento(valor));
}

entrada();
procesamiento(valor);
salida(valor); */
/* function entrada(){
  return prompt("INGRESAR DATO");
}

function procesamiento(valor){
  return "LA ENTRADA ES "+valor
}

function salida(valor){
  alert(valor);
}
//SUMAR LA OTRA FORMA DE LLAMADA
salida(procesamiento(entrada())); */

//actividad 2
/* function decimal(num) {
  return Math.round(num)
};

for (let index = 0; index < 5; index++) {
  let entrada = prompt("ingrese un numero decimal: ");
  alert(decimal(entrada));
} */

//actividad 3
/* function impuesto(precio, porcentaje) {
  return precio + ((precio * porcentaje)/100); 
  
}

for (let index = 0; index < 5; index++) {
  //definir una variable con la llama a la funcion y pasarle los parametros
  let resultado = impuesto (parseFloat(prompt("ingrese un precio: ")), parseFloat( prompt ("ingrese un porcentaje:  ")));
  //cita la funcion por alert
  alert (resultado);
} */

//actividad 4
/* let cambio = prompt("elija moneda a cotizar:");
let pesos = prompt("ingrese cantidad de pesos a cotizar: ");
let dolar = prompt("ingrese cantidad de dolares a cotizar: ");

if (cambio === pesos) {
  function cotizarDolar(pesos) {
    return pesos / 500;
  }
} else if (cambio === dolar) {
  function cotizarPesos(dolar) {
    return dolar * 500;
  }
}

alert(cotizarDolar(pesos));
alert(cotizarPesos(dolar));
 */