let div = document.getElementById("div");

function Producto(id, nombre, precio, imagen) {
  this.id = id;
  this.name = nombre;
  this.price = precio;
  this.image = imagen;
}

const tienda = [];

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

tienda.forEach((producto) => {
  let productoRenderizado = document.createElement("div");
  productoRenderizado.innerHTML = `
    <div class="card" class="" style="width: 18rem;">
            <img class="card-img-top" src="${producto.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.name}</h5>
                <p class="card-text">$ ${producto.price}</p>
            </div>
            <button class="boton">COMPRAR</button>
    </div>
    `;

  div.append(productoRenderizado);
});
