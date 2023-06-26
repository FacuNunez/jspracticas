//ARRAYS

/* 
es una estructura de datos
const nombreArray = [" ", " "," ",];
*/

//ejemplos
/* const arrayVacios = [];
const numeros = [1, 2, 3, 4, 5];
const nombres = ["camila", "jose", "maxi"];
const booleanos = [false, true];
const varios = [1, "gabriel", true];

console.log(varios[0]); */
//consola muesta el elemento 1, posiscion 0


//si yo quiero ACCEDER a un elemento del array 
//console.log(nombreArray [indico la posicion del elemento]);

//si quiero RECORRER un arreglo, se arranca desde 0 porq todos los arreglos empiezan desde la posicion 0
/* for (let index = 0; index < (cantidad de elementos); index++) {
    const element = arrayNombre [index];
    console.log(index, elemento);
} */

/* //ejemple


for (let index = 0; index < 3; index++) {
    const element = nombres [index];
    console.log(index, element);
} 

//consola muestra
0 camila
1 jose
2 maxi
*/
//.length me trae dinamicamento los elementos que tenga un arreglo
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

//PROPIEDADES Y METODOS
//const nombres = ["camila", "jose", "maxi"];

//PUSH
//metodo para agregar elementos 
//al final del arreglo
//nombres.push("Pedro");//consola muestra "camila", "jose", "maxi", "Pedro"

//al inicio del arreglo
//nombres.unshift("Miguel");//consola muestra "Miguel", "camila", "jose", "maxi"


//POP
//metodo para quitar 
//el ultimo elemento del arreglo
//nombre.pop();//consola muestra "camila", "jose"
//el primer elemento del arreglo
//nombre.shift();//consola muestra "jose", "maxi"

//SPLICE
//metodo para eliminar o agregar elementos en cualquier posicion
//const numeros = [1, 2, 3, 4, 5];

//numeros.splice(1,3);//elimina a partir de la posicion indicada en el 1er parametro, la cantidad indicada en el 2do parametro
//console.log(numeros);//consola muestra [ 1, 5 ]

//numeros.splice(1, 0, 3)//pasandole 3 parametros lo q hace es agregar el elemento pasado como 3er parametro en la posicion indicada en el 1er paramentro. En este caso, para que no borre nada se le indica 0 al 2do parametro
//console.log(numeros);//consola muestra [ 1, 3, 2, 3, 4, 5 ]

//JOIN
//const nombres = ["camila", "jose", "maxi"]
//console.log(nombres.join("*/*"));//une todos los elementos de un arreglo en un string y los separa por el parametro pasado

//CONCAT
//une dos arreglos en uno solo
//const nombres = ["camila", "jose", "maxi"];
//const numeros = [1, 2, 3, 4, 5];
//const varios = nombres.concat(numeros);
//console.log(varios);//[ 'camila', 'jose', 'maxi', 1, 2, 3, 4, 5 ]

//SLICE
//const nombres = ["camila", "jose", "maxi", "javier", "miguel", "simon"];
//const fragmento = nombres.slice(1, 2);//genera una copia del fragmento
//console.log(fragmento);//muertra por consola [ 'jose', 'maxi' ]

//INDEXOF
//muestra el indice del parametro pasado, dentro del arreglo
//const nombres = ["camila", "jose", "maxi", "javier", "miguel", "simon"];
//console.log(nombres.indexOf("javier"));//muestra por consola 3

//INCLUDES
//devuelve por consola un booleano
//const nombres = ["camila", "jose", "maxi", "javier", "miguel", "simon"]
//console.log(nombres.includes("simon"));//consola devuelve true

//REVERSE
//da vuelta el orden del arreglo
//const nombres = ["camila", "jose", "maxi", "javier", "miguel", "simon"]
//nombres.reverse();
//console.log(nombres);//consola devuelve [ 'simon', 'miguel', 'javier', 'maxi', 'jose', 'camila' ]


/*EJEMPLO 
const nombres =  ["camila", "jose", "maxi", "javier", "miguel", "simon"];
//ejemple para eliminar elemento
const eliminarNombre = (nombre) => {
    let indice = nombres.indexOf(nombre);//primero busco el elemento
    //si no lo encuentra se muestra por consola -1, si lo encuentra entonces ejecutara el splice
    if(indice != -1){
        nombres.splice(indice, 1);
    }

    console.log(nombres);
}

eliminarNombre("miguel");//muestra [ 'camila', 'jose', 'maxi', 'javier', 'simon' ] */

//EJEMPLO
/* const productos = [
    { id: 1, producto : "Arroz"},
    { id: 2, producto : "Fideo"},
    { id: 3, producto : "Pan"},
];

for (const producto of productos) {
    console.log(producto);
}//recorre arreglos for of */



/*
 //EJEMPLO
class Producto {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let productos = []
productos.push(new Producto(productos.length + 1,"camisa", 1000));
productos.push(new Producto(productos.length + 1,"pantalon", 2000));

console.log(productos); */




















