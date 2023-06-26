//DOM
//para el acceso al dom hay 3 metodos
//getElementById(), getElementByClassName(), getElementByTagName()
//para poder conectar el JS con el HTML necesito el "document"
//para traer desde el HTML al JS


//getElementByid)()
/* let div = document.getElementById("aplicacion");
console.log(div.innerHTML);//me muestra el html que tiene el div por dentro
console.log(div.innerText);//me muestra el texto que tiene el div por dentro */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);//coinciden los dos porq dentro el parrafo solo tiene texto
 */

//getElementByClassName()
//trae un htmlcollection, parece pero no es un arreglo, es solo una estructura
/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);//entre los []puedo acceder a la posiscion dentro del htmlcollection */


//getElementByTagName
/* let divs = document.getElementsByTagName("div");
console.log(divs[1].innerHTML); */


/* let perritos = document.getElementsByClassName("perritos");
//recorro con un forOf el htmlCollection
for (const perrito of perritos) {
    console.log(perrito.innerHTML);
} */

/* let saludos= document.getElementById("saludo");
saludos.innerHTML = "Hola Coder" */;//modifico desde el JS el HTML (conviene por el dinamismo);


//modifico el html desde el JS con dinamismo
/* let saludos = document.getElementById("saludo");
let mensaje =  prompt("Ingrese la seccion a la que desea ingresar: ");

if (mensaje === "carrito") {
    saludos.innerHTML = "<h1>bienvenido al Carrito</h1>";//puedo agregar o cambiar los tag desde JS
    saludos.className = "rojo";
} else if (mensaje === "favoritos") {
    saludos.innerHTML = "<h1>bienvenido al Favoritos</h1>";
    saludos.className = "azul";
} else {
    saludos.innerHTML = "<h1>bienvenido a nuestra Pagina</h1>";
    saludos.className = "amarillo";
};
 */

//agregar y quitar nodos desde html
//AGREGAR
/* let contenedor = document.getElementById("contenedor");
let parrafo = document.createElement("p");//primero crear etiqueta
parrafo.innerHTML = "<h2>Hola Coder</h2>";//segundo contenido
//document.body.append(parrafo);//tercero agregar a un padre
contenedor.append(parrafo); 
 */

//ELIMINAR
/* let contenedor = document.getElementById("contenedor");
contenedor.remove(); */


//ARREGLOS
/* let personas = document.getElementById("personas");
let nombres = ["andres", "maria", "fabian", "carlos"];

nombres.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    personas.append(li) 
});*///con estas lineas lo que hago es crear una lista y mostrarla, si voy agregando elelmentos al arreglo se van mostrando


/* let producto = {id: 1, nombre: "camisa", precio: 1000};//objeto
let contenedor = document.getElementById("contenedor");//traigo el contenedor del HTML
let item = document.createElement("div");//creo un div
item.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>nombre: ${producto.nombre}</p>
    <h1>$ ${producto.precio}</h1>
`;//a ese div(con el nombre de la variable donde lo guarde le paso los tag y el contenido)

contenedor.append(item); *///lo inserto en el contendor 


//caso de Arreglo con varios objetos.
/* let productos = [
{id: 1 ,nombre:"camisa" , precio: 1000 },
{id: 2 ,nombre:"pantalon" , precio: 2500 },
{id: 3 ,nombre:"remera" , precio: 1500},
{id: 4 ,nombre:"short" , precio: 500 },
];

productos.forEach(producto =>{//le pone producto por cada podructo del arreglo//
    let item = document.createElement("div");
    item.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>nombre: ${producto.nombre}</p>
    <h1>$ ${producto.precio}</h1>
`;//le puedo agregar una foto tb.

contenedor.append(item);
}); */

//querySelector//trae el primer elemento con la clase(.) o id(#)
//let div = document.querySelector("#contendor");//traigo el contenedor
//let parrafo = document.querySelector(".texto");//asi lo traigo por clase
//let parrafo = document.querySelector("#contenedor p");//asi traigo con la etiqueta <p> del contendor sin utilizar la clase

//let perritos = document.querySelectorAll(".perritos");//con el querySelectorAll traigo todos los item con la misma clase





















































































