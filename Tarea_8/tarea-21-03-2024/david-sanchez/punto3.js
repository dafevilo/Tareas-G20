const estudiantes = [
    { nombre: "Ana",edad: 20,promedio: 85},
    { nombre: "Juan",edad: 22,promedio: 78},
    { nombre: "María",edad: 21,promedio: 90},
    { nombre: "Laura",edad: 24,promedio: 88},
    { nombre: "Carlos",edad: 20,promedio: 75}];
    const punto3 = estudiantes.reduce((estudiante,estudiantePromAlto)=> {
      if(estudiante.promedio > estudiantePromAlto.promedio){
        return estudiante;
      } else{
        return estudiantePromAlto
      }
    });
    console.log("el primedio mas alto",punto3.nombre);
    console.log("nombre y edad del promdio mas alto ",punto3.nombre,punto3.edad);
    const estudianteMayores = estudiantes.filter((estudianteMay) => estudianteMay.edad > 20);
    const nombreMayor = estudianteMayores.map(estudianteMay => estudianteMay.nombre);
    console.log("nombre de los mayores a 20 ",nombreMayor);
    console.log("info completa de los mayores ",estudianteMayores);