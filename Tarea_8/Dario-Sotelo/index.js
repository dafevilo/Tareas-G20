const estudiantes = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
    }
];

// Punto 1
console.log(estudiantes[1].nombre); 

estudiantes[0].edad = 25;
console.log(estudiantes[0].edad);

console.log(estudiantes[0]);

//Punto 2

let sumaEd = 0;
for(let i = 0; i < estudiantes.length; i++){
  sumaEd += estudiantes[i].edad; 
}
promedio = sumaEd / estudiantes.length;
console.log("La suma de edades es:", sumaEd);
console.log("El promedio de edades es:", promedio);


