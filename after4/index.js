let div = document.getElementById("div");
let carritoLleno = document.getElementById("click");
let inputAfter = document.getElementById("inputAfter");
let botonBuscar = document.getElementById("botonInput");

//funcion contracuctora
function Producto(id, nombre, precio, imagen) {
  this.id = id;
  this.name = nombre;
  this.price = precio;
  this.image = imagen;
}

const tienda = [];
//pusheo de productos
tienda.push(
  new Producto(
    1,
    "camisa",
    1500,
    "https://tse3.mm.bing.net/th?id=OIP.V6lPOrqudpVLm6mD7hiKrAHaJR&pid=Api&P=0&h=180"
  )
);
tienda.push(
  new Producto(
    2,
    "pantalon",
    3800,
    "https://tse4.mm.bing.net/th?id=OIP.u-QCtVkzQjvBd5uDVSOd7QHaIQ&pid=Api&P=0&h=180"
  )
);

const carrito = [];

//DOM
//renderizado del producto
tienda.forEach((producto) => {
  let productoRenderizado = document.createElement("div");
  productoRenderizado.innerHTML = `
    <div class="card" class="" style="width: 18rem;">
            <img class="card-img-top" src="${producto.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.name}</h5>
                <p class="card-text">$ ${producto.price}</p>
            </div>
            <button id=${producto.id}>COMPRAR</button>
    </div>
    `;

  div.append(productoRenderizado);
  const boton = document.getElementById(producto.id);
  boton.addEventListener("click", () => comprarProducto(producto));
});

//EVENTO
//el evento va a funcionar sobre un nodo, si dos nodos tiene el mismo id, va a funcionar sobre uno solo
const comprarProducto = (producto) => {
  let productoExiste = carrito.find((item) => item.id === producto.id);
  if (productoExiste !== undefined) {
    productoExiste.precio = productoExiste.precio + producto.price;
    productoExiste.cantidad = productoExiste.cantidad + 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.name,
      precio: producto.price,
      imagen: producto.image,
      cantidad: 1,
    });
  }
};

const buscarProducto = (string) => {
  console.log(string);
  let productoBuscado = tienda.find(producto =>
    producto.name.includes(string)
  );
  console.log(productoBuscado);
  inputAfter.value = " ";
};//

carritoLleno.addEventListener("click", () => console.log(carrito));

//EVENTOS INPUT
//BUSCADOR
botonBuscar.addEventListener("click", () => buscarProducto(inputAfter.value));

/* //EVENTO
//el evento va a funcionar sobre un nodo, si dos nodos tiene el mismo id, va a funcionar sobre uno solo
const comprarProducto = (producto) => {
  let productoExiste = carrito.find(item => item.id === producto.id);
  if (productoExiste !== undefined) {
      productoExiste.precio = productoExiste.precio + producto.price;
      productoExiste.cantidad = productoExiste.cantidad + 1
  } else {
      carrito.push({
          id: producto.id,
          nombre: producto.name,
          precio: producto.price,
          imagen: producto.image,
          cantidad: 1
      })
  }
  ;
} 

const producoEncontrado = (string) => {
  console.log(string);
  let productoBuscar = tienda.filter(producto => producto.name.includes(string))//al cambiar el find por el filter, lo q logro es que me traiga todo aquello que cumpla con la condicion, el find solo trae el primero
  console.log(productoBuscar);
}//se genera una funcion, la cual el parametro va a ser el string que le pasamos al input//y lo buscamos conun find dentro de la tienda que concida con los valores que se le ingresan al input//



const guardarEmail = (e) => {
  e.preventDefault()//evita que se actualice la pagina
  let direccion = e.target.children[0].value;//guardo en una variable el valor del primer input
  let mensaje = e.target.children[1].value;//guardo en otra el otro valor del input
  email.push({//
      direccion: direccion,
      mensaje: mensaje,
});//pusheo eel objeto al array vacio

console.log(email);//muestro el array
}



carritoLleno.addEventListener("click", () => console.log(carrito));


buscar.addEventListener("click", () => producoEncontrado(productoBuscado.value));//se le genera un escuchador de eventos al boton Buscar, se le pasa por parametro la funcion creada para buscar, y el parametro son los valores que se ingresen en el input


formulario.addEventListener("submit", (e) => guardarEmail(e)); */
