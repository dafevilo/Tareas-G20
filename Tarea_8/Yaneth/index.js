//Tarea 8
//Manipulación Básica de Arrays y Objetos
//
//Objetivo general
//Practicar la manipulación de arrays y objetos en JavaScript de manera progresiva utilizando los metodos vistos en clase:
//
//- forEach
//- map
//- filter
//- reduce
//Punto 1: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes.

//Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
//Imprime en la consola el nombre del segundo estudiante.
//Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.


const estudiantes3 = [ 
    {
      nombre: "Diana",
      edad: 22,
      promedio: 5.5
    },
    {
      nombre: "Alberto",
      edad: 25,
      promedio: 8.0
    },
    {
      nombre: "Maria",
      edad: 30,
      promedio: 5
    }
  ];
  
  estudiantes3.forEach((estudiante3, indice) =>{
    if(indice ===2){
      console.log(estudiante3);
    }
    if(indice === 0){
      estudiante3.edad=25;
      console.log(estudiante3)
    }
    
  });
  
  //Punto 2: Cálculo de Estadísticas Básicas: Utilizando un bucle for, calcula la suma de las edades de todos los estudiantes en el array.
  //
  //Calcula el promedio de edad de los estudiantes.
  //Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
  
  //Punto 3: Búsqueda y Filtrado de Datos (Opcional): Utiliza un bucle for para encontrar al estudiante con el promedio más alto en el array.
  //
  //Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
  //Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
  //Imprime en la consola la información completa de los estudiantes mayores de 20 años.
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
  
  const edades = estudiantes.map((estudiante)=> estudiante.edad);
  console.log(edades);
  
  const funcionParaSumasEdadesEstudiantes = (edadInicial, edadCorriente)=> 
    edadInicial + edadCorriente.edad;
  
  let sumaTotalEdades = estudiantes.reduce(funcionParaSumasEdadesEstudiantes, 0);
  console.log(sumaTotalEdades);
  
  console.log("Promedio de las edades de los estudiantes")
  let promedio = sumaTotalEdades / estudiantes.length;
  console.log(promedio)
  
  
  
  const promedioMasAlto = Math.max(...estudiantes.map(estudiante => estudiante.promedio));
  const mejoresEstudiantes = estudiantes.filter(estudiante => estudiante.promedio === promedioMasAlto);
  
  mejoresEstudiantes.forEach(estudiante => {
    console.log(`"El promedio mas alto es de " ${estudiante.nombre}: ${estudiante.promedio}`);
  
  });
  
  const estudiantesMayoresDeVeinte = estudiantes.filter (estudiante => estudiante.edad >20);
  console.log(estudiantesMayoresDeVeinte )
  
  estudiantesMayoresDeVeinte.forEach(estudiante => {
   console.log(`${estudiante.nombre}: ${estudiante.edad}`);
   // console.log(estudiantesMayoresDeVeinte);
  
  });
  
  
  