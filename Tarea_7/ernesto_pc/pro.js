const estudiantes = [
    {
    nombre: 'Ernesto',
    edad: 46,
    promedio: 30,
    genero: 'Masculino',
    carrera: 'Ingeniería Sistemas',
    ciudad: 'Medellin'
    },
    {
    nombre: 'Wilfredo',
    edad: 55,
    promedio: 40,
    genero: 'Masculino',
    carrera: 'LicenciadoAmbiental',
    ciudad: 'Medellín'
    },
    {
    nombre: 'Ruth',
    edad: 53,
    promedio: 90,
    genero: 'Femenino',
    carrera: 'Abogada',
    ciudad: 'Medellin'
    },
    {
    nombre: 'Alan',
    edad: 22,
    promedio: 70,
    genero: 'Masculino',
    carrera: 'Deporte',
    ciudad: 'Medellin'
    },
    {
    nombre: 'Emma',
    edad: 60,
    promedio: 50,
    genero: 'Femenino',
    carrera: 'LicenciadaSociales',
    ciudad: 'BahiaSolano'
    },
    {
    nombre: 'Aldemar',
    edad: 48,
    promedio: 70,
    genero: 'Masculino',
    carrera: 'comando',
    ciudad: 'Medellin'
    },

    {
    nombre: 'Jorge',
    edad: 38,
    promedio: 30,
    genero: 'Masculino',
    carrera: 'Contador',
    ciudad: 'Putumayo'
     },
     {
    nombre: 'David F.',
    edad: 35,
    promedio: 28,
    genero: 'Masculino',
    carrera: 'Trabajador Social',
    ciudad: 'Guajira'
    },
    {
    nombre: 'Daniel Esteban.',
    edad: 28,
    promedio: 2,
    genero: 'Masculino',
    carrera: 'Administrador de Empresa',
    ciudad: 'Guajira'
    },
    
    {
    nombre: 'Edwin Dario.',
    edad: 37,
    promedio: 31,
    genero: 'Masculino',
    carrera: 'Ingniero civil',
    ciudad: 'Amazona'
    },
    {
    nombre: 'Pablo Enrique.',
    edad: 50,
    promedio: 38,
    genero: 'Masculino',
    carrera: 'Ingniero civil',
    ciudad: 'Ibague'
    },
    {
    nombre: 'Claudia Lorena.',
    edad:40,
    promedio: 28,
    genero: 'Femenina',
    carrera: 'Ingniera',
    ciudad: 'Tunja'
    },
    {
    nombre: 'Sughey Del Valle Urbano.',
    edad: 47,
    promedio: 26,
    genero: 'Femenina',
    carrera: 'Ingniero Sstemas',
    ciudad: 'Cali'
    },
        

    ];
let promedioMasAlto = estudiantes[0].promedio;
let estudiantePromedioMasAlto = estudiantes[0];

for (let i = 1; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > promedioMasAlto) {
        promedioMasAlto = estudiantes[i].promedio;
        estudiantePromedioMasAlto = estudiantes[i];
    }
}
console.log(estudiantePromedioMasAlto.nombre);
console.log(estudiantePromedioMasAlto.edad);

const estudiantesMayores = [];

for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].edad > 20) {
        estudiantesMayores.push(estudiantes[i]);
    }
}
console.log(estudiantesMayores);

/// Inicia otro ejercicio

const estudiante = [
    { name: 'ernesto', age: 50, average: 5 },
    { name: 'ruth', age: 54, average: 6 },
    { name: 'alan', age: 22, average: 3 }];

      for(let i =0; i<estudiante.length; i++){
    }
    /// Imprima en consola el segundo nombre con sus datos y el tercero con sus datos personales 
    console.log(estudiante[1].name); 
    estudiante[1].age=54 
    console.log(estudiante[1]); 
    console.log(estudiante[0].name); 
    estudiante[0].age=25 
    console.log(estudiante[0]); 

    /// incia otro ejercicio
    
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