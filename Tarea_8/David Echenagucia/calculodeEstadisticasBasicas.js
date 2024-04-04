// - **Punto 2: Cálculo de Estadísticas Básicas:** Utilizando un bucle for,
//    calcula la suma de las edades de todos los estudiantes en el array.

//   - Calcula el promedio de edad de los estudiantes.
//   - Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

// Se copio el array con objetos que el profesor dejo en README
const estudiantes = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];


let sumaEdades = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0);

let promedioEdades = sumaEdades / estudiantes.length;

console.log("Suma de las edades:", sumaEdades); // la suma de las edad se muestra en consola
console.log("Promedio de las edades:", promedioEdades); //el promedio se muestra en consola
