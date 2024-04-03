//Aquí va tu código
//Aquí va tu código

//Punto 1: Creación y Manipulación Básica de Arrays
//Crea un array llamado nombres que contenga los nombres de tus compañeros de clase.
//Imprime en la consola el primer y último nombre del array.
//Añade tu nombre al final del array.
//Imprime en la consola la longitud del array después de agregar tu nombre.

console.log("===========================================================")
console.log("Punto 1")
// mi array de nombres
const nombres =['Ernesto','Sughey','jorge','Luisa','Davier','Claudia','Pablo','Dario','Daniel'];
const primerNombre = nombres [0];
console.log("El primer nombre de la lista es " +  primerNombre);

const ultimoNombre = nombres[nombres.length-1];
console.log("El ultimo nombre de la lista es "+  ultimoNombre);


let longuitudArray = nombres.length;
//console.log(longuitudArray);
console.log("Antes de agregar mi nombre " +nombres);
let agregar = nombres.push("Yaneth");
console.log(longuitudArray);


console.log("Agregando mi nombre al Array"+ nombres);

let longuitudArray1 = nombres.length;
console.log(longuitudArray1);



console.log("===========================================================")
console.log("Punto 2")
//Punto 2: Creación y Manipulación Básica de Objetos
//Crea un objeto llamado estudiante que represente a un estudiante con propiedades como nombre, edad y curso.
//Imprime en la consola el nombre y la edad del estudiante.
//Actualiza la propiedad curso del estudiante con el valor "JavaScript Básico".
//Imprime en la consola todas las propiedades del objeto utilizando un bucle for...in.

// Mi array estudiante
const estudiante = {
    nombre :"Yaneth",
    edad: "48",
    curso: "20"
};
// Utilizar un bucle for para imprimir nombre y edad


for (let propiedad in estudiante) {
    if (propiedad === "nombre" || propiedad === "edad") {
        console.log(`${propiedad}: ${estudiante[propiedad]}`);
    }

}

for (let propiedad in estudiante){
    if(propiedad ==="curso"){
        estudiante.curso ="JavaScript";
        console.log(estudiante);
    }
}
console.log(estudiante);

console.log("===========================================================")
console.log("Punto 3")

//Punto 3: Bucle For y Condicionales
//Crea un array de números llamado numeros con al menos 5 números enteros.
//Utiliza un bucle for para imprimir en la consola solo los números pares del array.
//Utiliza un bucle for y una sentencia if para encontrar el número más grande en el array.
//Imprime en la consola el número más grande encontrado.



const numeros = [1,2,3,4,5,6,7,8,9,10];


for (let i = 0; i < numeros.length; i++) {
    
}
console.log(numeros);

const nPares = [];
for (let i = 1; i<=numeros.length ; i++){
        if(i % 2 === 0 ){
        nPares.push(i);
    }
}
console.log(nPares);

let maximo = 0
for (let i = 0; i < numeros.length; i++) {
    if(i+1){
        maximo = Math.max(...numeros)
    }
}
console.log(`El valor máximo en la lista es: ${maximo}`);

console.log("===========================================================")
console.log("Punto 4")

//Punto 4: Manipulación Básica de Arrays
//Crea un array llamado edades que contenga las edades de tus familiares.
//Utiliza un bucle for para calcular la suma de todas las edades en el array.
//Calcula el promedio de edad de tus familiares.
//Imprime en la consola tanto la suma como el promedio de edad.

console.log("suma de edades");

edades = [21, 48, 51, 15, 75];
console.log(edades);
let suma = 0;
    for (let index = 0; index < edades.length; index++) {
        if (edades[index] !== 0) {
            const element = edades[index] ;
          //  console.log(element);
            suma += element;
        }
    }
console.log("la suma es "+suma );

promedio=0;
for (let index = 0; index < edades.length; index++) {
        if (edades[index] !== 0) {
            const element = edades[index] ;
            //console.log(element);
            promedio =suma/[index+1];
        }
}
console.log("El promedio de las edades es:"+ promedio);

console.log("===========================================================")
console.log("Punto 5")
//Punto 5: Desafío Final: Combinación de Objetos y Arrays (opcional)
//Utiliza un array de objetos llamado productos.
//Utiliza un bucle for para calcular el total del valor de todos los productos (precio * cantidad).
//Utiliza una sentencia if para determinar si el total supera un cierto umbral (por ejemplo, $100).
//Imprime en la consola el mensaje "¡Felicitaciones! Tu compra califica para envío gratuito" si el total supera el umbral, de lo contrario, imprime "Agrega más productos para calificar para envío gratuito".
//const productos = [ { nombre: "Camisa", precio: 25, cantidad: 2, categoria: "Ropa", color: "Azul", talla: "M" }, { nombre: "Pantalón", precio: 40, cantidad: 1, categoria: "Ropa", color: "Negro", talla: "32" }, { nombre: "Zapatos", precio: 50, cantidad: 1, categoria: "Calzado", color: "Marrón", talla: "40" }, { nombre: "Bolso", precio: 30, cantidad: 1, categoria: "Accesorios", color: "Rojo", material: "Cuero" }, { nombre: "Gorra", precio: 15, cantidad: 3, categoria: "Accesorios", color: "Negro", estilo: "Béisbol" }, { nombre: "Reloj", precio: 80, cantidad: 1, categoria: "Accesorios", color: "Plateado", marca: "Casio" } ];

const productos = [ 
    { nombre: "Camisa", precio: 25, cantidad: 2, categoria: "Ropa", color: "Azul", talla: "M" }, 
    { nombre: "Pantalón", precio: 40, cantidad: 1, categoria: "Ropa", color: "Negro", talla: "32" }, 
    { nombre: "Zapatos", precio: 50, cantidad: 1, categoria: "Calzado", color: "Marrón", talla: "40" }, 
    { nombre: "Bolso", precio: 30, cantidad: 1, categoria: "Accesorios", color: "Rojo", material: "Cuero" }, 
    { nombre: "Gorra", precio: 15, cantidad: 3, categoria: "Accesorios", color: "Negro", estilo: "Béisbol" }, 
    { nombre: "Reloj", precio: 80, cantidad: 1, categoria: "Accesorios", color: "Plateado", marca: "Casio" } ];



let multiplicar=0;
let sumaP =0;
let umbral1=250;
let umbral2=300;

for (let index = 0; index < productos.length; index++) {
    if (productos[index].precio !== 0) { // Acceso al valor correcto del producto
        console.log("Este es valor: " + productos[index].precio );
        console.log("Este es cantidad: " + productos[index].cantidad);
        multiplicar = productos[index].precio * productos[index].cantidad; // Suma de los valores
        console.log(multiplicar);
        sumaP+=multiplicar;
        console.log("Su compra total es de: " + sumaP);
        
    }
    if(sumaP <= umbral1 ){
        console.log("Debe pagar el envio:" +umbral1);
        
        }else{
            console.log("¡Felicitaciones! Tu compra califica para envío gratuito: ") 
        }

}
console.log();
console.log("Fin de la tarea");

 