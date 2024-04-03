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
    const estudiantemayor25 = estudiantes.map((estudiante,index)=>{
        if(index === 1){
            console.log(estudiante.nombre);//Imprime en la consola el nombre del segundo estudiante.
        }
        if(index === 0){
           const newedad= 25 // Actualiza la edad del primer estudiante a 25 años
            return {...estudiante, edad:newedad}
        }    
    });
    console.log(estudiantemayor25[0]);//Imprime en la consola la información completa del primer estudiante después de la actualización.