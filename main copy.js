let nombre = "Adrian";
let edad = 47;
let empleo = true;

let nombreProducto = "TV";
let precioProducto = 50000;
let hayStockProducto = true;

// objeto literal
let producto = {}
console.log(producto);
console.log(typeof producto);

/* 
let pp = null;
console.log(pp)
console.log(typeof pp)

let arr = [];
console.log(arr);
console.log(typeof arr);
*/

let producto1 = {
    nombre: "Monitor 20 pulgadas"
}

console.log(producto1)
//alert(producto1)

let producto2 = {
    nombre: "Monitor 20 pulgadas",
    precio: 50000
}

console.log(producto2)
//alert(producto2)


let producto3 = {
    nombre: "Monitor 20 pulgadas",
    precio: 50000,
    disponible: true,
    medidas: {
        largo: 16,
        alto: 9
    }
}

console.dir(producto3);

console.log(typeof producto3.nombre)
console.log(typeof producto3.precio)
console.log(typeof producto3.disponible)
console.log(typeof producto3.medidas)
console.log(producto3.medidas)
console.log(producto3.medidas.largo)
console.log(producto3.medidas.alto)


console.log(producto3.nombre);
alert(producto3.nombre);
console.log(producto3['precio'])
alert(producto3['precio'])

//document.write(producto3['precio'])
