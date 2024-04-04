//Aquí va tu código
// - **Punto 1: Acceso y Modificación Básica de Datos:** Crea un array llamado estudiantes
//     que contenga objetos representando a tres estudiantes.

//   - Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
//   - Imprime en la consola el nombre del segundo estudiante.
//   - Actualiza la edad del primer estudiante a 25 años.
//     Imprime en la consola la información completa del primer estudiante después de la actualización.

//Se crea el array con objetos (forEach)
let estudiantes = [{
    nombre: "David",
    edad: 32,
    promedio: 10,
},
{
    nombre: "Lorena",
    edad: 42,
    promedio: 15,
},
{
    nombre: "Maria",
    edad: 23,
    promedio: 20,
}
]

estudiantes.forEach((estudiante , i) => {
    if(i === 1){
        console.log(estudiante.nombre); //Se muestra en consola el nombre
    }
    
});
 estudiantes[0].edad = 25; // Se modifica la edad.
 console.log(estudiantes[0]) //Se muestra en consola los datos del primer estudiante