// Punto 1: Acceso y Modificación Básica de Datos:
const students = [
    {
        name: "Carlos",
        age: 17,
        ola: 70,
    },
    {
        name: "Adriana",
        age: 22,
        ola: 85,
    },
    {
        name: "Juan",
        age: 23,
        ola: 89,
    }
];
console.log(students[1].name);
students[0].age = "25";
console.log(students[0])



//Punto 2: Cálculo de Estadísticas Básicas

let suma = 0;
function addition(array) { 
      for (let i = 0; i < array.length; i++) {
           suma += array[i].age;  
      }
      return suma;
}
    const total = addition(students);
    average = total / students.length;
    console.log("La suma de edades es:", total);
    console.log("El promedio de edades es:", average);











