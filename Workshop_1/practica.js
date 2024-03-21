//PUNTO 1 >>>>
const estudiantes = ["Edison Fernando Suárez Solano", "Claudia Lorena Diaz Gomez", 
    "Pablo Enrique Báez Niño", "William Chávez Bravo", "Jeisten Anaya serna",
    "David Felipe Sanchez Pacheco", "Daniel Esteban Lopez lopera",
    "Yaneth Cundar", "Davier Rubio Quintero", "Sughey Del Valle Urbano Mariño",
    "David Echenagucia", "Edwin Darío Sotelo Salamanca", "Ernesto Potes Cordoba",
    "Jorge Leonel Tonguino Pantoja", "Johanna Sofía Poveda Carvajal",
    "Diego Mauricio Bonilla Ruíz"];
    let ultimoEstudiante = estudiantes.length -1;
console.log("Primer Nombre: ", estudiantes[0], "Ultimo Estudiante: ",estudiantes[ultimoEstudiante]);

//PUNTO 2 >>>>
let estudiante = {nombre: "Juan", edad: 20, curso: "HTML y CSS" };

console.log("Nombre del estudiante:", estudiante.nombre, ", Edad: ", estudiante.edad);

estudiante.curso = "JavaScript Básico";

console.log("Estudiante:");
for (let propiedad in estudiante) {
    console.log(propiedad , ": " , estudiante[propiedad]);}
//PUNTO 3 >>>>

const numerosEnteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numerosEnteros.length; i++) {
  if (numerosEnteros[i] % 2 === 0) {
    console.log("Numeros Pares: ",numerosEnteros[i]);
  }
}
let mayor = numerosEnteros[0];
for (let i = 0; i < numerosEnteros.length; i++) {
  if (numerosEnteros[i] > mayor) {
    mayor = numerosEnteros[i];
  }
}
console.log("Número más grande:", mayor);

//PUNTO 4 >>>>
const edades = [30, 35, 40, 45, 50];
let sumaEdades = 0;

for (let i = 0; i < edades.length; i++) {
    sumaEdades = sumaEdades + edades[i];
}

const promedioEdad = sumaEdades / edades.length;

console.log("La suma de las edades es:", sumaEdades);
console.log("El promedio de edad es:", promedioEdad);

//PUNTO 5 >>>>
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
  ];
let total = 0;

for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio * productos[i].cantidad;
}

if (total > 100) {
    console.log("¡Felicitaciones! Tu compra califica para envío gratuito");
} else {
    console.log("Agrega más productos para calificar para envío gratuito");
}
//FIN DEL WORKSHOP