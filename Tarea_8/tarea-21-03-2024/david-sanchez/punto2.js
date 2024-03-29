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
    }];
    const punto2sumaedad = estudiantes.reduce((contador,estudiante)=> estudiante.edad + contador ,0) //calcula la suma de las edades de todos los estudiantes en el array
    const promedioedad = punto2sumaedad / 3;// Calcula el promedio de edad de los estudiantes.
    console.log(punto2sumaedad,promedioedad); //Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

   