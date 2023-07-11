//variables iniciadas globalmente
let contenedor = document.getElementById("divEnvase");
let buscar = document.getElementById("inputAfter");
let botonBuscar = document.getElementById("botonInput");
let botonCarrito = document.getElementById("carrito");
let eliminar = document.getElementById("eliminarCompra");


//funcion constructora
function Envase(id, name, size, description, price, image) {
    this.id = id,
    this.nombre = name,
    this.tamaño = size,
    this.descripcion = description,
    this.precio = price,
    this.imagen = image
}

//array vacio para incorportar los productos mediante el push
const producto = [];

//pusheo de producto
producto.push(new Envase(1,"Vaso", 25, "vaso de oblea comestible, capacidad un gusto", 200,"https://www.yomo.com.ar/resources/original/productos/1.jpg"));
producto.push(new Envase(2, "Vaso", 50, "vaso de oblea comestible, capacidad dos gustos ", 300,"https://www.yomo.com.ar/resources/original/productos/1.jpg"));
producto.push(new Envase(3, "Cucurucho", 75, "cucurucho de oblea comestible, capacidad dos gustos", 350,"https://nonperfect.files.wordpress.com/2014/07/c1.jpg"));
producto.push(new Envase(4, "Cuarto", 250, "Pote de Tergoporl, capacidad maxima recomendada 3 gustos", 450,"https://envasesparahelados.com.ar/images/product-02-470x303.jpg"));
producto.push(new Envase(5, "Medio", 500, "Pote de Tergoporl, capacidad maxima recomendada 4 gustos", 900,"https://envasesparahelados.com.ar/images/product-02-470x303.jpg"));
producto.push(new Envase(6, "Kilo", 1000, "Pote de Tergoporl, capacidad maxima recomendada 4 gustos", 1800,"https://envasesparahelados.com.ar/images/product-02-470x303.jpg"));

const carrito = [];

//renderizado de prodructos
producto.forEach((envases) => {
    let renderizadoEnvases = document.createElement("div")
    renderizadoEnvases.innerHTML =`
            <div class="card" style="width: 18rem;">
                <img src=${envases.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${envases.nombre}</h5>
                    <p class="card-text">${envases.descripcion}</p>
                    <p class="card-text">${envases.tamaño}gr.</p>
                    <span class="card-text">$${envases.precio}</span>
                 </div>
                 <button id=${envases.id}>Elegir</button>
             </div>
    `;

    divEnvase.append(renderizadoEnvases);
    //evento para elegir el producto
    const boton = document.getElementById(envases.id);
    boton.addEventListener("click", () => productoComprado(envases));//por ahora lo imprime en consola 
});

//funcion comprar, suma cantidades y precio
const productoComprado = (envases) => {
    let productoExiste = carrito.find((item) => item.id === envases.id);
    if (productoExiste !== undefined) {//lo hago distinto de undefined porq find da como resultado si no lo encuentra
        productoExiste.precio = productoExiste.precio + envases.precio;
        productoExiste.cantidad = productoExiste.cantidad + 1;
      } else {
        carrito.push({
          id: envases.id,
          nombre: envases.nombre,
          precio: envases.precio,
          imagen: envases.imagen,
          cantidad: 1,
        });
      }    
}

botonCarrito.addEventListener("click", () => localStorage.setItem("objetoUno", JSON.stringify(carrito))); 



    //evento de la funcion busqueda de envases y el renderizado de la busqueda en el dom
botonBuscar.addEventListener("click", () => { 
    const textoBusqueda = buscar.value.toLowerCase();

    // Filtrar los gustos que coincidan con el texto de búsqueda
    const envasesFiltrados = producto.filter((envase) => {
        const nombre = envase.nombre.toLowerCase();
        const descripcion = envase.descripcion.toLowerCase();
        return nombre.includes(textoBusqueda) || descripcion.includes(textoBusqueda);
    });

    //Limpio el dom para luego realizar
    contenedor.innerHTML = ` `;

    //Renderizar la busqueda efectuada
    envasesFiltrados.forEach((envases) => {
        let renderizadoEnvases = document.createElement("div")
        renderizadoEnvases.innerHTML =`
                <div class="card" style="width: 18rem;">
                    <img src=${envases.imagen} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${envases.nombre}</h5>
                        <p class="card-text">${envases.descripcion}</p>
                        <p class="card-text">${envases.tamaño}gr.</p>
                        <span class="card-text">$${envases.precio}</span>
                     </div>
                     <button id=${envases.id}>Elegir</button>
                 </div>
        `;
    
        divEnvase.append(renderizadoEnvases);
        const boton = document.getElementById(envases.id);//genero un evento para poder elegir el envase que desea el cl 
        boton.addEventListener("click", () => productoComprado(envases));//lo imprime en consola 
    });


});

eliminar.addEventListener("click", () =>{
    localStorage.clear();
    alert("productos borrados");
  });