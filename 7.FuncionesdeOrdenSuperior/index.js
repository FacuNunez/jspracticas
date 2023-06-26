//FUNCION DE ALTO ORDEN
//son aquellas funciones que o bien recibe funciones como parametro o retorna funciones

//EJEMPLO ROTORNA FUNCIONES POR PARAMETRO
/* const mayorQue = (n) =>{
    return m => m > n;
};

let mayorQueCinco = mayorQue(5);//m => m > 5 
console.log(mayorQueCinco(20)) */ //si no le paso parametro me da Funcion Anonima//le doy un valor a mayorQueCinco y me devuelve un booleano

/* function operaciones(op) {

    if (op === "sumar") {
        return (x, y) => x + y
    }

    if (op === "restar") {
        return (x, y) => x - y
    }

    if (op === "multiplicar") {
        return (x, y) => x * y
    }

    if (op === "dividir") {
        return (x, y) => x / y
    }
    
}

let resta = operaciones("restar");
console.log(resta(9,10)); */

//EJEMPLO RECIBE FUNCIONES POR PARAMETROS
/* function recorrer(arreglo, fn) {
    for (const numero of arreglo);
    fn(numero);
}

recorrer([1,2,3,4], console.log); */ //log se pone sin parentesis porq se nombre, no se ejecuta

/* const cursos = [
  { nombre: "Javascript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
]; */

//FOREACH = recorre cada uno de los elementos del arreglo
//cursos.forEach(item => console.log(item.precio));

//FIND = encuentra el primer elemento que cumple la condicion
/*let nombre = prompt("Ingrese el nombre del curso a encontrar");
let encontrado = cursos.find(curso => curso.nombre === nombre);
let mensaje = `
   nombre: ${encontrado.nombre}
   $${encontrado.precio}
 `;

alert(mensaje);*/

//FILTER filtra todos los elementos que complan la condicion
/* let precio = parseInt(prompt("Ingrese el precio minimo"));
let filtrados = cursos.filter((curso) => curso.precio > precio);

filtrados.forEach((item) => {
  let mensaje = `
   nombre: ${item.nombre}
 $${item.precio}
`;

  alert(mensaje);
}); */


//SOME verifica si existe al menos un elemento q cumple la condicion//devuelve un booleano//puede servir para buscar un producto especifico
/* let existe = cursos.some(curso => curso.precio === 16000);
console.log(existe); */

//MAP crear un nuevo arreglo con los elementos transformados o modificados
//let nombre = cursos.map(item=> item.nombre);
//console.log(nombre);

/* let preciosActualizados = cursos.map(item => {
    return{
        nombre: item.nombre,
        precio: item.precio + item.precio * 0.21
    }
});

console.log(preciosActualizados); */


//REDUCE reduce todo el arreglo a un unico valor, recibe 2 parametros, 
//const numeros = [1, 2, 3, 4, 5];
//;
//console.log(total); 

/* const cursos = [
    { nombre: "Javascript", precio: 15000 },
    { nombre: "ReactJS", precio: 22000 },
    { nombre: "AngularJS", precio: 22000 },
    { nombre: "Desarrollo Web", precio: 16000 },

];

const total= cursos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(total); */

//SORT ordenar
//const numeros = [40, 1, 5, 200];
//console.log(numeros.sort((a,b) => a - b));//ordena de menor a mayor simre que los parametros esten en el mismo orden que la resta
//console.log(numeros.sort((a,b) => b - a));//como se invierte el orden ordena de mayor a menos

//EJEMPLO
/* const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

let precio = parseInt(prompt("Ingrese el precio minimo"));
let filtrados = items.filter((item) => item.price > precio);

console.log(
 filtrados.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  })
);  */


//MATH (leer documentacion)
//console.log(Math.E);
//console.log(Math.PI);
//console.log(Math.max(1, 2, 3, 4, 5, 3.25));
//console.log(Math.min(1, 2, 3, 4, 5, 3.25));
//console.log(Math.ceil(3.45));//devuelve el entero mayor
//console.log(Math.floor(3.74));//devuelve el entero menor
//console.log(Math.round(3.654));//devuelve al entero mas aproximado
//console.log(Math.sqrt(9));//raiz cuadrada

//DATE (trabaja en milisegundos)
//console.log(Date());
//console.log(new Date(1981, 6, 15));
//let navidadActual = new Date("December 24, 2023 23:59:59");
//console.log(navidadActual);

//const hoy = new Date("September 15, 2022")

/*
console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay()); */

//console.log(hoy.toDateString());//formato de fechas
























































