//1. Arrays
console.log("ejercicio 1");
let nombres = ["Daniel", "Mauricio", "Yaneth", "Luis"];
console.log("a", nombres[0]); //daniel
console.log("b", nombres[nombres.length - 1]); //3 luis
nombres.push("Sofia"); //"Daniel", "Mauricio", "Yaneth", "Luis" "Sofia"
console.log("c", nombres[nombres.length - 1]); // se agrga 1 y quedan 5, va al  4, Sofia
console.log("d", nombres.length);

//2.Objeto
console.log("ejercicio 2");
let estudiante = {
  name: "Sofia",
  age: 33,
  course: "JavaScript Avanzado",
};

console.log(estudiante.name);
console.log(estudiante.age);
estudiante.course = "JavaScript Básico";
console.log("bucle for");
for (let key666 in estudiante) {
  console.log(key666 + ": " + estudiante[key666]);
}
console.log("ejercicio 3");
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

let Biggest = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > Biggest) {
    Biggest = numeros[i];
  }
}

console.log(Biggest);

console.log("ejercicio 4");
let edadesFamilia = [65, 64, 39, 34, 2];
let suma = 0;

for (
  let indexsofi = 0;
  indexsofi < edadesFamilia.length;
  indexsofi = indexsofi + 1
) {
  suma = suma + edadesFamilia[indexsofi];
}
console.log(suma);
const promedio = suma / edadesFamilia.length;
console.log(promedio);

console.log("ejercicio 5");
const productos = [
  {
    nombre: "Camisa",
    precio: 25,
    cantidad: 2,
    categoria: "Ropa",
    color: "Azul",
    talla: "M",
  },
  {
    nombre: "Pantalón",
    precio: 40,
    cantidad: 1,
    categoria: "Ropa",
    color: "Negro",
    talla: "32",
  },
  {
    nombre: "Zapatos",
    precio: 50,
    cantidad: 1,
    categoria: "Calzado",
    color: "Marrón",
    talla: "40",
  },
  {
    nombre: "Bolso",
    precio: 30,
    cantidad: 1,
    categoria: "Accesorios",
    color: "Rojo",
    material: "Cuero",
  },
  {
    nombre: "Gorra",
    precio: 15,
    cantidad: 3,
    categoria: "Accesorios",
    color: "Negro",
    estilo: "Béisbol",
  },
  {
    nombre: "Reloj",
    precio: 80,
    cantidad: 1,
    categoria: "Accesorios",
    color: "Plateado",
    marca: "Casio",
  },
  //
];

let total = 0;
for (
  let indexProd = 0;
  indexProd < productos.length;
  indexProd = indexProd + 1
) {
  total = total + productos[indexProd].precio * productos[indexProd].cantidad;
}
console.log("Este es el total " + total);
if (total > 100) {
  console.log("¡Felicitaciones! Tu compra califica para envío gratuito");
} else {
  console.log("Agrega más productos para calificar para envío gratuito");
}
