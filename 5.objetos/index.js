//OBJETOS
/* 
estructura del objeto
const nombre = {
    key1: value1, (ej= edad: 30)
    key2: value2
} */

/* //ejemplo
let nombre = "pepe";
let edad = 56;
let direccion = "av"
/lo transformo a un objeto
let persona1 = {
    nombre: "pepe",
    edad: 56,
    direccion: "av"
}
/para poder acceder a los datos debo utilizar el .
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.direccion);
/otra forma es con [] (es mas dinamico)
console.log(persona1["nombre"]); */

/* 
/en un objeto puedo sobreescribir valores
const persona1 = {
    nombre: "pepe",
    edad: 56,
    direccion: "av"
}

/forma de sobreescribir un objeto
persona1.nombre = "ramon";
persona1["edad"] = 100; */
/* 

/funciones constructoras, va con mayuscula para distinguir q es una funcion constructora

function Persona(nombre, edad, direccion) {
    this.name = nombre; //van a generar las key del objeto, this.name es la key y nombre es el valor
    this.age = edad;
    this.adress = direccion;
}

/como se genera el valor, tienen que respetar el orden de los valores (nombre (andres), edad(50), direccion(AV))

const persona1 = new Persona("andres", 50, "AV");
console.log(persona1);

/se pueden contruir mas de un objeto  con la funcion constructora

const persona2 = new Persona("jose", 60, "marconi");
console.log(persona2);

/se forman dos objetos distintos e independientes con una sola funcion constructora
/this. es el objeto que llama a la propiedad.
/no es de buena practica tener muchos parametros, crea un objeto para poder pasar los parametros

function Producto(info) {
    this.img = info.img;
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.envio = info.envio;
}

/al ser un objeto, ya no importa el orden de los parametro

let producto1 = new Producto({
    imagen: "https:..... ",
    nombre: "TV",
    precio: "$5240",
    envio: "gratis",
});

/es buena practica a lo suma pasar dos parametro no mas */

//METODO
//a diferencia de las funciones un metodo esta ligado a un objeto
//se representa con ()

/* function Persona(nombre, edad, direccion) {
    this.name = nombre; 
    this.age = edad;
    this.adress = direccion;
    this.hablar = function() {console.log("hola soy" + this.nombre);
    }
}


const persona1 = new Persona("andres", 50, "AV");
persona1.hablar() */

//clases
/* 
estructura
class Nombre{
    constructor(param1, param2,.....,parmn){
        this.key = parm1;
        .
        .
        .
        .
        .
        this.keyn = parmn
    }

    metodo(){
        codigo del metodo
    }
} */

//es la forma mas nueva, funciona igual  a una funcion constructora
/* class Personas {
    constructor(nombre, edad, direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion; 
    }

    hablar() {
        console.log("hola soy" + this.nombre);
    }
}

const persona1 = new Persona("andres", 50, "AV");
persona1.hablar(); */
/* 
class Producto{
    constructor(nombre, imagen, precio, cantidad){
        this.nombre =  nombre;
        this.imagen = imagen;
        //this.precio = precio;
        this.vendido = false;
        this.cantidad = cantidad
    }

    vender(){
        //this.vendido = true;
        this.cantidad = this.cantidad - 1;
        if(this.cantidad === 0){
            console.log("sin stock");
        }
    }
}

const producto1 = new Producto("monitor", "http", 1234, 5);
console.log(producto1);

producto1.vender();
console.log(producto1);

producto1.vender();
console.log(producto1);

producto1.vender();
console.log(producto1);

producto1.vender();
console.log(producto1);


producto1.vender();
console.log(producto1); */

















