let carritoPedidos = document.getElementById("pedidos");
let confirmar = document.getElementById("confirmarCompra");
let eliminar = document.getElementById("eliminarCompra");

const carritoStorage = JSON.parse(localStorage.getItem("objetoUno", "valor"));
const carritoStorageDos = JSON.parse(localStorage.getItem("objetoDos", "valor"));


eliminar.addEventListener("click", () =>{
    localStorage.clear();
    carritoPedidos.innerHTML = "";
    alert("productos borrados");
  });

confirmar.addEventListener("click", () => console.log(carritoStorage, carritoStorageDos));