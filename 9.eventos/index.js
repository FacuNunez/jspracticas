//Eventos
//MOUSSE

//CLICK
//let boton = document.getElementById("boton");
//boton.addEventListener("click", respuesta);//los parametros si o si tiene que ser, a que evento responde y una funcion
//boton.onclick = respuesta;//son las dos formas iguales de hacer lo mismo. El q mas se utiliza es el addEventlistener

//boton.addEventListener("click", () => respuesta(8 ,7));//en el caso que le tuviera que pasar un parametro a la funcion se declara una arrow function y se le pasa el parametro por este medio

/* //contador de clicks(guardar)
let cantidad = 0;
function respuesta( a ,b ) {
   console.log(a + b);
   cantidad = cantidad + 1;
} */

//OTROS DEL MOUSSE
//let boton = document.getElementById("boton")
//boton.addEventListener("mousedown", ( ) => console.log("mousedown"));//cuando se presiona
//boton.addEventListener("mouseup", ( ) => console.log("mouseup"));//cuando se levanta
//boton.addEventListener("mouseover", () => console.log("mouseover"));//cuando lo pasas por encima
//boton.addEventListener("mouseout", () => console.log("mouseout"));//cuando se pasa por arriba del boton y despues sale, marca la salida
//boton.addEventListener("mousemove", () => console.log("mousemove"));//cuando el cursor se mueve dentro del boton
//boton.addEventListener("click", () => console.log("click"));//cuando se le da click al boton
//boton.addEventListener("dblclick", () => console.log("dblclick"));//cuando se le da doble click

/* //ejemplo
let saludo = document.getElementById("saludo");
let boton = document.getElementById("boton");
boton.addEventListener("mousedown", () => {
  saludo.className = "rojo";
});
boton.addEventListener("mouseover", () => {
  saludo.className = "azul";
});
boton.addEventListener("mouseup", () => {
  saludo.className = "verde";
}); */

//TECLADO
/* let input = document.getElementById("nombre") */;
//let saludo = document.getElementById("saludo");
//input.addEventListener("keydown", () => console.log("keydown"));//cuando oprimo
//input.addEventListener("keyup", () => console.log("keyup"));//cuando dejo de oprimir

//(e)
/* input.addEventListener("keyup", (e) => {
  if (e.key === "a") {
    saludo.className = "rojo";
  } else if (e.key === "s") {
    saludo.className = "azul";
  } else if (e.key === "d") {
    saludo.className = "verde";
  } else {
    saludo.className = "amarillo";
  }
}); *///la letra (e) corre siempre por detras al yo nombrarla me doy la posibilidad de usar su valor como en este ejemplo

//CHANGE
//input.addEventListener("change", () => console.log("change"));//si yo modifico el input y luego orpimo el cursor fuera del input hay me marca los cambios, si no ingreso nada y oprimo no cambia nada

//INPUT
/* input.addEventListener("input", () => {
  if (!input.value.includes("@")){
    saludo.innerHTML = "correo incorrecto";
    saludo.className = "rojo";
  } else {
    saludo.innerHTML = "correo correcto";
    saludo.className = "verde";
  }
}) */

//EVENTOS FURMULARIOS
//SUBMIT
/* let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();//el preventDefault evita evita que se recarge el formulario, sin esto una vez q demos enviar se recarga automaticamente, siempre hay que poner esto en los fomularios
  
  let inputs = e.target.children;//en la variable guardamos los valores de los impus que se ingresan con .children
  console.log(inputs[0].value);//nos devuelve un htmlcollections y asi llamamos a los valores que queremos mostrar
  console.log(inputs[1].value);
//ejemplo de lo que podemos hacer con los valores que traemos del imput
  if (!inputs[0].value.includes("@")){
    inputs[0].value = " ";
  }//si no tiene in @ dentro del primer input se borra lo q escribimos
}); */

//EJEMPLO DE BUSCADOR
/* let productos = [
{id: 1, nombre: "camisa" , precio: 1500 },
{id: 2, nombre: "pantalon" , precio: 2750 },
{id: 3, nombre: "medias" , precio: 580 },
{id: 4, nombre: "remera", precio: 980 },  
]
let contenedor = document.getElementById("contenedor");


let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML= " ";//con esto logro que el contendor vuelva a blanco en cada busqueda//
  let inputs = e.target.children;
  
  let producto = productos.find(item => item.nombre === inputs[0].value);//recorro el arreglo para buscar los q coincide con la busqueda
  if (!producto) {
    console.log("no se encontro producto");
  }else{
  let div = document.createElement("div");
  div.innerHTML = `
    <h1>id ${producto.id}</h1>
    <p>nombre ${producto.nombre}</p>
    <h2>$ ${producto.precio}</h2>
  `;

  contenedor.append(div)
  }
}); */















