////EJEMPLO DE CAMBIO DE MONEDA
/* let moneda = prompt("ingrese $ pesos a cambiar: ");
let cambio = prompt("ingrese moneda solicitada: ");
let cuit;

while (moneda > 1000000) {
  alert("debe ingresar su cuit: ");
  cuit = prompt("Ingrese n° de cuit: ");
  if (cuit < 20000000) {
    alert("no puede comprar");
    moneda = prompt("ingrese $ pesos a cambiar: ");
  } else {
    switch ((moneda, cambio)) {
      case "R$":
        cambio = moneda / 46.21;
        alert("son R$ " + cambio);
        break;

      case "u$s":
        cambio = moneda / 489;
        alert("son u$S " + cambio);
        break;

      case "EU$":
        cambio = moneda / 263;
        alert("son EU$ " + cambio);
        break;

      case "uYu":
        cambio = moneda / 5.95;
        alert("son uYu " + cambio);
        break;

      default:
        break;
    }
  }
}

switch ((moneda, cambio)) {
  case "R$":
    cambio = moneda / 46.21;
    alert("son R$ " + cambio);
    break;

  case "u$s":
    cambio = moneda / 489;
    alert("son u$S " + cambio);
    break;

  case "EU$":
    cambio = moneda / 263;
    alert("son EU$ " + cambio);
    break;

  case "uYu":
    cambio = moneda / 5.95;
    alert("son uYu " + cambio);
    break;

  default:
    break;
} */
///////////////////////////////////////////////////////////
//EJEMPLO NUMERO PRIMO
/*CONDICIONES A CUMPLIR
    N° / 1 = 0  => n % 1 = 0
    N° / N° = 0  => n % n = 0
NO PUEDE SER DIVISIBLE POR NINGUN OTRO NUMERO
    no resu
    
*/
/////muestra los numeros que complen con la condiciones, pero esas no serian las 
for (let i = 1; i < 30; i++) {
    if (i % 1 === 0 , i % i === 0 , i % i - 1 === 0) {
        console.log(i + " es primo");
    } else {
        console.log(i + " no es primo");
    }
    
}

/* for (let numero = 2; numero <= 30; numero++) {
  let esPrimo = true;

  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      esPrimo = false;
    }
  }

  if (esPrimo) {
    console.log(numero);
  }
} */