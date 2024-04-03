// Se crea el array students
let students = [
    {
    name: "David",
    age: 20,
    average: 10,
},
{
    name: "Daniel",
    age: 20,
    average: 10,
},
{
    name: "Lorena",
    age: 20,
    average: 10,
}
]
console.log(students[1].name) // se muestra en consola solamente el nombre Daniel

students[0].age = 25;
console.log(students[0].age) // se muestra en consola la nueva edad del objeto 1

console.log(students[0]) // se muestra en consola todo el objeto 0