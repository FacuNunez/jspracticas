//Storage
//los datos se guardan a nivel Local
//tiene 2 partes LocalStorage y SecionStorage


//LocalStorage
//se ingresan datos de la forma localStorage("key","value")
//perciste los datos ingresados mas alla cerrar y volver abrir la pagina, o recargar


/* localStorage.setItem("nombre","Facundo");
localStorage.setItem("numero", 5);//siempre recibe string, sino lo corrige y lo guarda como string
localStorage.setItem("valor", true)

//para recuperar info del localStorage
//ejemplo
let mensaje = localStorage.getItem("numero");//.getItem es la forma de traer el local, todo lo q trae es un string
console.log(mensaje); */

//sessionStorege
//a diferencia del LocalStorage lo unico que reciste es la recarga, lo demas no.
//ejemplo
//sessionStorage.setItem("nombre", "juan");

//en el localstorage se puede guardar objetos arreglos pero no funciones
//para recorrerlo se utiliza for, ni foreach ni forOf
//ejemplo

/* for(let i= 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("clave", clave);
    console.log("value", localStorage.getItem(clave));
}//de esta forma me devuelve todas las claves y sus valores ingresados */

/* //como limpio un localStorage
localStorage.removeItem("nombre");//para algo especifico
localStorage.clear()//para limpiar el localStorage */


//JSON
/* //como transformar de objeto/arreglo a JSON
//definiendo un objeto primero y despues pasandolo a formato JSON
let objeto = {nombre: "andres", edad: "70"}
localStorage.setItem("objeto", JSON.stringify(objeto));

//directaente como formato JSON
localStorage.setItem("arreglo", JSON.stringify([2, 3, 4, 5, 6])) */


//de JSON a objeto/arreglo
/* let objeto = JSON.parse(localStorage.getItem("objeto"))
console.log(objeto);

let arreglo = localStorage.getItem("arreglo");
console.log(JSON.parse(arreglo)); */

/* const productos = [
    {id:1, nombre:"camisa", precio: 1000 },
    {id:2 , nombre: "pantalon", precio: 2520 },   
    {id:3 , nombre:"calzon", precio: 500 },
    {id:4 , nombre:"remera", precio: 1500 },

];

localStorage.setItem("carrito", JSON.stringify(productos));  */

 
//traemos los elementos del dom
let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("boton");

//declaramos el carrito y traemosdel storage
let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

//validamos si en el storage existe el carrito
if(carritoStorage){
  carrito = carritoStorage;
}

//recorremos el carrito para renderizarlo en el contenedor
carrito.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  contenedor.append(div);
});

//lógica para el borrado del carrito y del contenedor
boton.addEventListener("click", () => {
  localStorage.clear();
  contenedor.innerHTML = "";
  alert("productos borrados");
})





