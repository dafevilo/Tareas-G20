const students = [
  {
    name: "Sofia",
    age: 20,
    average: 85,
    gender: "Femenino",
    career: "Ingeniería Civil",
    city: "Bogotá",
  },
  {
    name: "Juan",
    age: 22,
    average: 78,
    gender: "Masculino",
    career: "Medicina",
    city: "Medellín",
  },
  {
    name: "Luisa",
    age: 21,
    average: 90,
    gender: "Femenino",
    career: "Administración de Empresas",
    city: "Cali",
  },
  {
    name: "Pedro",
    age: 23,
    average: 82,
    gender: "Masculino",
    career: "Derecho",
    city: "Barranquilla",
  },
  {
    name: "Laura",
    age: 24,
    average: 88,
    gender: "Femenino",
    career: "Arquitectura",
    city: "Cartagena",
  },
  {
    name: "Carlos",
    age: 20,
    average: 75,
    gender: "Masculino",
    career: "Ingeniería de Sistemas",
    city: "Santa Marta",
  },
  {
    name: "Sughey",
    age: 22,
    average: 95,
    gender: "Femenino",
    career: "Psicología",
    city: "Pereira",
  },
];

console.log("- Imprimir nombre del segundo estudiante:");
console.log(students[1].name);

console.log(
  "- Actualizar edad del primer estudiante e imprimir nueva información:"
);
students[0].age = 25;
console.log(students[0]);

console.log("- Sumar edades, promediar e imprimir suma y promedio:");
const ageSum = students.reduce((total, student) => total + student.age, 0);
const averageAge = ageSum / students.length;

console.log("Suma de las edades:", ageSum);
console.log("Promedio de edades:", averageAge);
