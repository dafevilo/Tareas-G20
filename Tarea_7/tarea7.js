const estudiantes = [
    {
        nombre: "Ana",
        edad: 20,
        promedio: 85,
        genero: "Femenino",
        carrera: "Ingeniería Civil",
        ciudad: "Bogotá"
    },
    {
        nombre: "Juan",
        edad: 18,
        promedio: 78,
        genero: "Masculino",
        carrera: "Medicina",
        ciudad: "Medellín"
    },
    {
        nombre: "María",
        edad: 21,
        promedio: 90,
        genero: "Femenino",
        carrera: "Administración de Empresas",
        ciudad: "Cali"
    },
    {
        nombre: "Pedro",
        edad: 23,
        promedio: 82,
        genero: "Masculino",
        carrera: "Derecho",
        ciudad: "Barranquilla"
    },
    {
        nombre: "Laura",
        edad: 24,
        promedio: 88,
        genero: "Femenino",
        carrera: "Arquitectura",
        ciudad: "Cartagena"
    },
    {
        nombre: "Carlos",
        edad: 20,
        promedio: 75,
        genero: "Masculino",
        carrera: "Ingeniería de Sistemas",
        ciudad: "Santa Marta"
    },
    {
        nombre: "Sofía",
        edad: 22,
        promedio: 95,
        genero: "Femenino",
        carrera: "Psicología",
        ciudad: "Pereira"
    }
];
// PUNTO UNO >>>>
console.log("Estudiante 2: ",estudiantes[1].nombre);
estudiantes[0].edad = 25;
console.log("Estudiante 1: ",estudiantes[0]);
// FIN PUNTO UNO >>>>
let sumaEdades = 0;
for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades = sumaEdades + estudiantes[i].edad;
}
const promedioEdad = sumaEdades / estudiantes.length;
console.log("Suma edades de los estudiantes:", sumaEdades);
console.log("Promedio de edad estudiantes:", promedioEdad);
// FIN PUNTO DOS >>>>

// INICIO PUNTO TRES >>>>
let estudiantePromedioAlto = estudiantes[0];
for (let i = 1; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > estudiantePromedioAlto.promedio) {
        estudiantePromedioAlto = estudiantes[i];
    }
}
console.log("Estudiante con el promedio más alto:",estudiantePromedioAlto.nombre, "Edad:", estudiantePromedioAlto.edad);

// FIN PUNTO TRES >>>>

// INICIO PUNTO CUATRO >>>>
const estudiantesMayores = []
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].edad >= 20) {
        estudiantesMayores.push(estudiantes[i]);
    }
    }
console.log("Estudiantes mayores de 20 años:");
console.log(estudiantesMayores);
// FIN TAREA