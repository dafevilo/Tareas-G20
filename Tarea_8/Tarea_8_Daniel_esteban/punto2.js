let estudiantes = [
    { nombre: "manuela", edad: 20, promedio: 85 },
    { nombre: "Martin", edad: 22, promedio: 78 },
    { nombre: "sebas", edad: 21, promedio: 90 }
];


let sumaEdades = 0;
let totalEstudiantes = estudiantes.length;

for (let i = 0; i < totalEstudiantes; i++) {
    sumaEdades += estudiantes[i].edad;
}

let promedioEdad = sumaEdades / totalEstudiantes;


console.log("Suma edades de estudiantes:", sumaEdades);
console.log("Promedio edad de estudiantes:", promedioEdad);
