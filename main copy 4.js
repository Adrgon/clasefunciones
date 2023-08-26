/* 
let super1 = {
    nombre: "Bruno Dias",
    alterEgo: "Batman",
    superpoder: "Millonario"
} 
*/


function Superheroe(n, a, s){
    this.nombre = n;
    this.alterEgo = a;
    this.superpoder = s;

    this.atacar = function(){
        console.log(this.alterEgo + " ataca con " + this.superpoder);
    }
    this.descubrir = ()=> {
        console.log(this.alterEgo +  " es " + this.nombre);
    }

    this.saludar = function(){
        console.log("Hola");
    }



}

let super1 = new Superheroe("Bruno Dias", "Batman", "Millonario");
let super2 = new Superheroe("Diana Prince", "Mujer Maravilla", "Lazo magico");
let super3 = new Superheroe("Barry Allen", "Flash", "velocidad");
let super4 = new Superheroe("Clark Kent", "Superman", "Fuerza");

console.log(super1);
console.log(super2);
console.log(super3);
console.log(super4);

super2.atacar();
//atacar()
super4.descubrir();
super1.saludar();

console.log("----------------------")
console.log("nombre" in super1);
console.log("editorial" in super1);


if("editorial" in super1){
    console.log(super1.editorial)
}else {
    super1.editorial = "No existe";
}

console.log(super1);



for(let propiedad in super4){
    //console.log(propiedad);
    console.log(super1[propiedad]);
}
