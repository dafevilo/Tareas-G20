/*Punto 1 * Estudiantes*/

const estudiantes = [
    { nombre: 'Juan', edad: 20, promedio: 17.5 },
    { nombre: 'Laura', edad: 22, promedio: 20 },
    { nombre: 'Rosa', edad: 21, promedio: 18.3 }
];

console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

estudiantes[0].edad = 25;
console.log("NUeva información estudiante 1:", estudiantes[0]);

/*Punto 2 */
/*const estudiantes = [
    { nombre: 'Juan', edad: 20, promedio: 17.5 },
    { nombre: 'Laura', edad: 22, promedio: 20 },
    { nombre: 'Rosa', edad: 21, promedio: 18.3 }
];*/
let sumaEdades = 0;
for (let estudiante of estudiantes) {
    sumaEdades += estudiante.edad;
}
const promedioEdades = sumaEdades / estudiantes.length;

console.log("Suma de las edades de los estudiantes:", sumaEdades);
console.log("Promedio de edad de los estudiantes:", promedioEdades);

/*Punto 3*/

/*const estudiantes = [
    { nombre: 'Juan', edad: 20, promedio: 17.5 },
    { nombre: 'Laura', edad: 22, promedio: 20 },
    { nombre: 'Rosa', edad: 21, promedio: 18.3 }
];*/

let estudianteConMayorPromedio = estudiantes[0];
for (const estudiante of estudiantes) {
    if (estudiante.promedio > estudianteConMayorPromedio.promedio) {
        estudianteConMayorPromedio = estudiante;
    }
}
console.log("Estudiante con el promedio más alto:", estudianteConMayorPromedio.nombre, "-", estudianteConMayorPromedio.edad);

const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log("Estudiantes mayores de 20 años:", estudiantesMayores);
