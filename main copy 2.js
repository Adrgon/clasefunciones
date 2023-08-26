let x = 5;
let y = x;

console.log(x) // 5
console.log(y) // 5

y = 10;

console.log(x) // 5
console.log(y) // 10

console.log("---------------------------")

let obj1 = {
    x:5
}

let obj2 = obj1;

console.log(obj1.x) // 5
console.log(obj2.x) // 5

obj2.x = 10;
console.log(obj1.x) // 5  --> 10
console.log(obj2.x) // 10




/* 
Primitivos copian por valor 
String
Number
Boolean

Objetos copian por referencia de memoria 
*/
