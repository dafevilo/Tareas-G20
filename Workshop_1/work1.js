const estudiante1 = {
    nombre: "Ana",
    edad: 22,
    promedio: 85
};
const estudiante2 = {
    nombre: "Juan",
    edad: 22,
    promedio: 78
};
const estudiante3 = {
    nombre: "María",
    edad: 21,
    promedio: 90
};
const estudiantes = [estudiante1, estudiante2, estudiante3];
console.log(estudiantes[1].nombre);
estudiantes[0].edad = 25;
console.log(estudiantes[0]);