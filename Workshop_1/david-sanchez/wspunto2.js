const estudiante = [
    { name: "david", age: 30, average: 4 },
    { name: "maria", age: 23, average: 5 },
    { name: "sebastian", age: 28, average: 4 }];
    let sumaEdad = 0;
    let promedio = 0;
    for(let i = 0; i<estudiante.length; i++ ){
        sumaEdad = sumaEdad + estudiante[i].age ; //Utilizando un bucle for, calcula la suma de las edades de todos los estudiantes en el array
        promedio = sumaEdad / 3;                 // Calcula el promedio de edad de los estudiantes.
    }
    console.log("la suma de todas es edades es: "+ sumaEdad);//Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
    console.log("el promedio de edad es "+ promedio);