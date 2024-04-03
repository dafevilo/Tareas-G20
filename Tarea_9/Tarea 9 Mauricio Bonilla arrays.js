
var estudiantes = [
    { nombre: 'Juan', edad: 20, promedio: 85 },
    { nombre: 'María', edad: 22, promedio: 90 },
    { nombre: 'Pedro', edad: 21, promedio: 88 }
];


var estudiantesActualizados = estudiantes.slice();

estudiantesActualizados[1].edad = 24;

console.log("Información del segundo estudiante después de la actualización:");
console.log("Nombre:", estudiantesActualizados[1].nombre);
console.log("Edad:", estudiantesActualizados[1].edad);
console.log("Promedio:", estudiantesActualizados[1].promedio);


var sumaEdades = 0;


for (var i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
}


var promedioEdad = sumaEdades / estudiantes.length;


console.log("El promedio de edad de todos los estudiantes es:", promedioEdad);


var estudiantesMayores = estudiantes.filter(function(estudiante) {
    return estudiante.edad > 20;
});


console.log("Información de los estudiantes mayores de 20 años:");
estudiantesMayores.forEach(function(estudiante) {
    console.log("Nombre:", estudiante.nombre);
    console.log("Edad:", estudiante.edad);
    console.log("Promedio:", estudiante.promedio);
    console.log("---------------------------");
});
