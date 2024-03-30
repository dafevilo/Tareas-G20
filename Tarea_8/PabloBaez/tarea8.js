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
console.log("PUNTO UNO >>>>>>");
let segundoEstudiante = estudiantes.filter((estudiante, index) => index === 1);
console.log("Segundo Estudiante: ",segundoEstudiante[0].nombre);

estudiantes.forEach((estudiante, index) => {
    if (index === 0) {
        estudiante.edad = 25;
        estudianteModificado = estudiante;
    }
});
console.log("Estudiante Uno: ",estudianteModificado);
// FIN PUNTO UNO >>>>
// INICO PUNTO DOS >>>
console.log("PUNTO DOS >>>>>>");
let sumaEdades = estudiantes.map(estudiante => estudiante.edad)
                           .reduce((total, edad) => total + edad, 0);

let promedioEdad = sumaEdades / estudiantes.length;

console.log("La suma edad de estudiantes:", sumaEdades);
console.log("El promedio de edad de los estudiantes es:", promedioEdad);
// FIN PUNTO DOS >>>>

// INICIO PUNTO TRES >>>>
console.log("PUNTO TRES >>>>>>");

let estudiantePromedioAlto = estudiantes.reduce(function(max, estudiante) {
    if (estudiante.promedio > max.promedio) {
        return estudiante;
    } else {
        return max;
    }
});

console.log("Estudiante con el promedio más alto:", estudiantePromedioAlto.nombre, "-", estudiantePromedioAlto.edad);

let estudiantesMayores = estudiantes.filter(function(estudiante) {
    return estudiante.edad >= 20;
});
console.log("Estudiantes mayores de 20 años:", estudiantesMayores);

// FIN PUNTO TRES >>>>

// FIN TAREA