///Punto 1: Creación y Manipulación Básica de Arrays
const names = ["Alejandro", "Claudia", "Daniel", "David", "Ernesto", "Jorge", "Mauricio",
                "Pablo", "Sofia", "Sughey", "Yaneth"];

            const length = names.push("Dario")
            const longitud = names.length;

            console.log(names[0]);
            console.log(names[10]);

            console.log(longitud);
            
            console.log(length);
            console.log(names);



/// Punto 2: Creación y Manipulación Básica de Objetos
const student = { name: "daniel" , age: 20, course: "programacion"};
console.log(student.name);
console.log(student.age);
student.course = "JavaScript Básico";
for (const key in student) {
        student["name"]
        student["age"]
        student["course"]
        console.log(student[key]);
  }


// Punto 3: Bucle For y Condicionales
const numbers_1 = [2, 4, 5, 8, 9];

function pairNumbers(array) { 
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          console.log(array[i]);
        }
      }
     
    }
    pairNumbers(numbers_1);


const numbers_2 = [2, 4, 5, 8, 9];
function biggerNumber(array) { 
      let biggerNumber = array[0];
       
      for (let i = 0; i < array.length; i++) {
        if (array[i] > biggerNumber) {
            biggerNumber = array[i]
        }
      }
      return biggerNumber;
    }
    const mayor = biggerNumber(numbers_2);
    console.log("El número mayor es:", mayor);

    
//Punto 4: Manipulación Básica de Arrays
const ages = [13, 35, 38, 40, 42, 68];
let addition = 0;
function addAges(array) { 
      let addition = 0;
      for (let i = 0; i < array.length; i++) {
            addition += array[i];  
      }
      return addition;
}
    const total = addAges(ages);
    average = total / ages.length;
    console.log("La suma de edades es:", total);
    console.log("El promedio de edades es:", average);





    

 
  








