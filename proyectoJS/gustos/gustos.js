//variables iniciadas globalmente
let contenedorDOs = document.getElementById("divGusto");
let buscar = document.getElementById("inputAfter");
let botonBuscar = document.getElementById("botonInput");
let botonCarrito = document.getElementById("carrito");
let eliminar = document.getElementById("eliminarCompra");

//se genera funcion constructora
function Gusto(id, name, description,) {
    this.id = id,
    this.nombre = name,
    this.descripcion = description
}

//creo los dos arrays vacion para subir mis productos
const gustos = [];

//pusheo los elementos a cada array
gustos.push(new Gusto(7, "Dulce de Leche", "Dulce de leche comun"));
gustos.push(new Gusto(8, "Super Dulce", "Con dulce de leche repostero"));
gustos.push(new Gusto(9, "Chocolate", "Chocolate comun"));
gustos.push(new Gusto(10, "Chocolate Amargo", "Chocolate al 70%"));
gustos.push(new Gusto(11, "Chocolate Blanco", "Chocolate blanco"));
gustos.push(new Gusto(12, "Vainilla", "Vainilla"));
gustos.push(new Gusto(13, "Crema Americana", "Crema Americana"));
gustos.push(new Gusto(14, "Frutilla a la crema", "Crema de frutilla con fruttilas naturales"));
gustos.push(new Gusto(15, "Frutilla al agua", "Frutilla a base de agua"));
gustos.push(new Gusto(16, "Mousse de limon", "Mousse de Limon"));
gustos.push(new Gusto(17, "Limon al agua", "Limon a base de agua"));
gustos.push(new Gusto(18, "Marroc", "Crema de Marroc, con pedazito"));
gustos.push(new Gusto(19, "Mantecol", "Crema de mantecol, con pedazitos"));
gustos.push(new Gusto(20, "Sambayon", "Crema de sambayon"));
gustos.push(new Gusto(21, "Cereza a la crema", "Crema de cereza con cerezas naturales"));
gustos.push(new Gusto(22, "Mousse de Maracuya", "Mousse de maracuya"));


const carritoGustos= [];

//DOM
//renderizamos los productos
//gustos
gustos.forEach((gustos) => {
    let renderizadoGustos = document.createElement("div")
    renderizadoGustos.innerHTML =`
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${gustos.nombre}</h5>
                    <p class="card-text">${gustos.descripcion}</p>
                 </div>
                 <button id=${gustos.id}>Elegir</button>
             </div>
    `;

   divGusto.append(renderizadoGustos);
   //se genera evento en el boton elegir
   const botonGusto = document.getElementById(gustos.id); 
   botonGusto.addEventListener("click", () => productoComprado(gustos));//por ahora se imprime por consola el gusto deseado
});


//funcion comprar, suma cantidades y precio
const productoComprado = (gustos) => {
    let productoExiste = carritoGustos.find((item) => item.id === gustos.id);
    if (productoExiste !== undefined) {
        productoExiste.cantidad = productoExiste.cantidad + 1;
      } else {
        carritoGustos.push({
          id: gustos.id,
          nombre: gustos.nombre,
        });
      }    
}

botonCarrito.addEventListener("click", () => localStorage.setItem("objetoDos", JSON.stringify(carritoGustos))); 




//buscador y renderizado de la busqueda
botonBuscar.addEventListener("click", () => { 
    const textoBusqueda = buscar.value.toLowerCase();

    // Filtrar los gustos que coincidan con el texto de búsqueda
    const gustosFiltrados = gustos.filter((gusto) => {
        const nombre = gusto.nombre.toLowerCase();
        const descripcion = gusto.descripcion.toLowerCase();
        return nombre.includes(textoBusqueda) || descripcion.includes(textoBusqueda);
    });

    // Limpiar el contenedor antes de renderizar los resultados de búsqueda
    contenedorDOs.innerHTML = "";

    // Renderizar los gustos filtrados
    gustosFiltrados.forEach((gusto) => {
        let renderizadoGustos = document.createElement("div");
        renderizadoGustos.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${gusto.nombre}</h5>
                    <p class="card-text">${gusto.descripcion}</p>
                 </div>
                 <button id=${gusto.id}>Elegir</button>
             </div>
        `;

        contenedorDOs.appendChild(renderizadoGustos);
        const botonGusto = document.getElementById(gusto.id);
        botonGusto.addEventListener("click", () =>  productoComprado(gusto));
    });
});

eliminar.addEventListener("click", () =>{
    localStorage.clear();
    alert("productos borrados");
  });
