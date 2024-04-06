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

const nombreRef = "Ana";
const nuevaEdad = 25;

const edadActual = estudiantes.map((estudiante) => {
  if(estudiante.nombre === nombreRef){  
    return {...estudiante, edad: nuevaEdad };
  }
   return estudiante;  
});
console.log(edadActual[0]);

//Punto 2

let sumaEdades = 0;
let count = 0;

estudiantes.forEach((estudiante) => {
  sumaEdades += estudiante.edad;
  count ++;
});

promedio = sumaEdades / estudiantes.length;
console.log("La suma de edades es:", sumaEdades);
console.log("El promedio de edades es:", promedio);


