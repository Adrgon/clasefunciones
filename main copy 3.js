let producto3 = {
    nombre: "Monitor 20 pulgadas",
    precio: 50000,
    disponible: true,
    medidas: {
        largo: 16,
        alto: 9
    }
}
console.log(producto3);

console.log(producto3.nombre);

producto3.nombre = "TV";

console.log(producto3);
console.log(producto3.nombre);

producto3.stok = 300;
console.log(producto3);
console.log(producto3.stok);
