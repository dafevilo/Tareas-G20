const estudiante1 = {
    nombre: "Ana",
    edad: 20,
    promedio: 8.5
};
const estudiante2 = {
    nombre: "Juan",
    edad: 22,
    promedio: 9.2
};
const estudiante3 = {
    nombre: "María",
    edad: 19,
    promedio: 7.8
};
const estudiantes = [estudiante1, estudiante2, estudiante3];
console.log(estudiantes[1].nombre);
estudiantes[0].edad = 25;
console.log(estudiantes[0]);