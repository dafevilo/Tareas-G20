/// punto 1
const estudiante1 = {
    nombre: "Juan",
    edad: 20,
    promedio: 8.5
};
const estudiante2 = {
    nombre: "María",
    edad: 22,
    promedio: 9.2
};
const estudiante3 = {
    nombre: "Pedro",
    edad: 19,
    promedio: 7.8
};
const estudiantes = [estudiante1, estudiante2, estudiante3];
console.log(estudiantes[1].nombre);
estudiantes[0].edad = 25;
console.log(estudiantes[0]);

// Punto 2

let sumaEdades = 0;
const totalEstudiantes = estudiantes.length;
for (let i = 0; i < totalEstudiantes; i++) {
    sumaEdades += estudiantes[i].edad;
}
const promedioEdad = sumaEdades / totalEstudiantes;
console.log("Suma edad de los estudiantes:", sumaEdades);
console.log("Promedio edad de los estudiantes:", promedioEdad);

//Punto 3

const estudiantesNuevo = [ 
    { nombre: "Ana", edad: 20, promedio: 85, genero: "Femenino", carrera: "Ingeniería Civil", ciudad: "Bogotá" }, 
    { nombre: "Juan", edad: 22, promedio: 78, genero: "Masculino", carrera: "Medicina", ciudad: "Medellín" }, 
    { nombre: "María", edad: 21, promedio: 90, genero: "Femenino", carrera: "Administración de Empresas ", ciudad: "Cali" }, 
    { nombre: "Pedro", edad: 23, promedio: 82, genero: "Masculino", carrera: "Derecho", ciudad: "Barranquilla" }, 
    { nombre: "Laura", edad: 24, promedio: 88, género: "Femenino", carrera: "Arquitectura", ciudad: "Cartagena" }, 
    { nombre: "Carlos", edad: 20, promedio: 75, género: "Masculino", carrera: "Ingeniería de Sistemas", ciudad: "Santa Marta" }, 
    { nombre: "Sofía", edad: 22, promedio: 95, género: "Femenino", carrera: "Psicología", ciudad: "Pereira" } 
];

let promedioMasAlto = estudiantes[0].promedio;
let estudiantePromedioMasAlto = estudiantes[0];

for (let i = 1; i < estudiantesNuevo.length; i++) {
    if (estudiantesNuevo[i].promedio > promedioMasAlto) {
        promedioMasAlto = estudiantesNuevo[i].promedio;
        estudiantePromedioMasAlto = estudiantesNuevo[i];
    }
}
console.log(estudiantePromedioMasAlto.nombre);
console.log(estudiantePromedioMasAlto.edad);

const estudiantesMayores = [];

for (let i = 0; i < estudiantesNuevo.length; i++) {
    if (estudiantesNuevo[i].edad > 20) {
        estudiantesMayores.push(estudiantesNuevo[i]);
    }
}
console.log(estudiantesMayores);