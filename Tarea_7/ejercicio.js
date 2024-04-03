/// Se seleccionaron los estudiantes para hacer  Workshop
const estudiantes = ['Ernesto Potes C', 'Diego Mauricio B. R.', 
    'Jorge Leonel Tonguino P.','Johanna Sofía Poveda C.','Edwin Darío Sotelo S.',
    'David Felipe Sanchez P.', 'Sughey Del Valle Urbano M',
    'Jeisten Anaya s.', 'Davier Rubio Q.', 'Daniel Esteban Lopez L',
    'David Echenagucia', 'Yaneth Cundar', 'William Chávez B.',
    'Pablo Enrique Báez N.', 'Edison Fernando Suárez S.',
    'Claudia Lorena Diaz G.'];
    let ultimoEstudiante = estudiantes.length -1;
console.log('Primer Nombre: ', estudiantes[0], 'Ultimo Estudiante:',estudiantes[ultimoEstudiante]);


let estudiante = {nombre: 'Ernesto', edad: 46, curso: 'Javascript_basico y Javascript_avanzado' };

console.log('Nombre del estudiante:', estudiante.nombre,  ', Edad:  ', estudiante.edad);

estudiante.curso = 'JavaScript Básico';

console.log('Estudiante:');
for (let propiedad in estudiante) {
    console.log(propiedad , ": " , estudiante[propiedad]);}


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

const edades = [28, 33, 55, 35, 40];
let sumaEdades = 0;

for (let i = 0; i < edades.length; i++) {
    sumaEdades = sumaEdades + edades[i];
}

const promedioEdad = sumaEdades / edades.length;

console.log('La suma de las edades es:', sumaEdades);
console.log('El promedio de edad es:', promedioEdad);


const productos = [
    {
      nombre:'Camisa',
      precio: 30,
      cantidad: 3,
      categoria: 'Ropa',
      color: 'Negro',
      talla: 'L',
    },
    {
      nombre: 'Mocho',
      precio: 50,
      cantidad: 2,
      categoria: 'Ropa',
      color: 'Azul',
      talla: '36',
    },
    {
      nombre: 'Zandalia',
      precio: 60,
      cantidad: 2,
      categoria: 'Calzado',
      color: 'Blanco',
      talla: '50',
    },
    {
      nombre:'Maleta',
      precio: 40,
      cantidad: 1,
      categoria: 'Bisuteria',
      color: 'Cafe',
      material: 'Cuero',
    },
    {
      nombre: 'Sombrero',
      precio: 10,
      cantidad: 2,
      categoria: 'Bisuteria',
      color: 'Beis',
      estilo: 'Fact',
    },
    {
      nombre:'Manilla',
      precio: 70,
      cantidad: 3,
      categoria: 'Bisuteria',
      color: 'Cobre',
      marca: 'Punta Chell',
    },
  ];
let total = 0;

for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio * productos[i].cantidad;
}

if (total > 100) {
    console.log('¡Te haz gano un bono, felicitaciones! ');
} else {
    console.log('Sigo siendo cliente fiel');
 }