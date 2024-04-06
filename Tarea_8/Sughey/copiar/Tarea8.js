// Parte 1
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
    },
  ];
  
  // Nombre del segundo estudiante.
  console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);
  
  // Edad del primer estudiante a 25 años con forEach.
  estudiantes.forEach((estudiante, index) => {
    if (index === 0) {
      estudiante.edad = 25;
    }
  });
  
  // Información del primer estudiante actualizada.
  console.log("Información primer estudiante actualizada:", estudiantes[0]);
  
  // Parte 2
  const sumaEdades = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);
  const promedioEdad = sumaEdades / estudiantes.length;
  console.log("Suma de las edades de los estudiantes:", sumaEdades);
  console.log("Promedio de edad de los estudiantes:", promedioEdad);
  
  // Parte 3: 
  const estudianteConMayorPromedio = estudiantes.reduce((anterior, actual) => (anterior.promedio > actual.promedio) ? anterior : actual);
  console.log("Estudiante con el promedio más alto:", estudianteConMayorPromedio.nombre, "-", estudianteConMayorPromedio.edad);
  
  const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
  console.log("Estudiantes mayores de 20 años:", estudiantesMayores);
  