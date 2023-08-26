class Producto {
    constructor(nombre, precio, stock, img){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.disponible = true;
    }
    sinStock(){
        this.disponible = false;
        this.stock = 0;
    }
}


let nombre = prompt("Nombre del producto")
let precio = Number(prompt("Precio del producto"))
let stock = Number(prompt("Stock del producto"))
let image = prompt("Imagen del producto")


const p1 = new Producto(nombre, precio, stock, image);
console.log(p1.disponible);
console.log(p1.stock);

p1.sinStock()

console.log(p1);
