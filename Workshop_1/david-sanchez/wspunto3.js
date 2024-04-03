const estudiantes = [ { nombre: "Ana", edad: 20, promedio: 85, genero: "Femenino", carrera: "Ingeniería Civil", ciudad: "Bogotá" },
                      { nombre: "Juan", edad: 22, promedio: 78, genero: "Masculino", carrera: "Medicina", ciudad: "Medellín" },
                      { nombre: "María", edad: 21, promedio: 90, genero: "Femenino", carrera: "Administración de Empresas", ciudad: "Cali" },
                      { nombre: "Pedro", edad: 23, promedio: 82, genero: "Masculino", carrera: "Derecho", ciudad: "Barranquilla" },
                      { nombre: "Laura", edad: 24, promedio: 88, genero: "Femenino", carrera: "Arquitectura", ciudad: "Cartagena" }, 
                      { nombre: "Carlos", edad: 20, promedio: 75, genero: "Masculino", carrera: "Ingeniería de Sistemas", ciudad: "Santa Marta" }, 
                      { nombre: "Sofía", edad: 22, promedio: 95, genero: "Femenino", carrera: "Psicología", ciudad: "Pereira" } ];
                      let promedioMasAlta = 0;
                      let nombreDelpromedio ="";
                      let edadDelprimedio = 0;
                      let estudiantesMayores = []; //
                      for(let i=0; i<estudiantes.length; i++){
                        if (promedioMasAlta < estudiantes[i].promedio){
                            promedioMasAlta = estudiantes[i].promedio;  
                            nombreDelpromedio = estudiantes[i].nombre;//encontrar al estudiante con el promedio más alto en el array.
                            edadDelprimedio = estudiantes[i].edad;
                        }
                        if(estudiantes[i].edad>20){
                            estudiantesMayores.push(estudiantes[i]); //Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores. //
                        }
                      }
                      console.log("el promedio  mas alt de los estudiantes es " + promedioMasAlta);
                      console.log("el nombre del promedio mas alto es "+ nombreDelpromedio); //Imprime en la consola el nombre y la edad del estudiante con el promedio más alto
                      console.log("edad del primedio mas alto "+edadDelprimedio);
                      console.log("estudiantes mayores a 20");
                      console.log(estudiantesMayores);// Imprime en la consola la información completa de los estudiantes mayores de 20 años.
                     
