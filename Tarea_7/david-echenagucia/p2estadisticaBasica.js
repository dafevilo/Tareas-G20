const estudiantes = [ { nombre: "Ana", edad: 20, promedio: 85, genero: "Femenino", carrera: "Ingeniería Civil", ciudad: "Bogotá" }, { nombre: "Juan", edad: 22, promedio: 78, genero: "Masculino", carrera: "Medicina", ciudad: "Medellín" }, { nombre: "María", edad: 21, promedio: 90, genero: "Femenino", carrera: "Administración de Empresas", ciudad: "Cali" }, { nombre: "Pedro", edad: 23, promedio: 82, genero: "Masculino", carrera: "Derecho", ciudad: "Barranquilla" }, { nombre: "Laura", edad: 24, promedio: 88, genero: "Femenino", carrera: "Arquitectura", ciudad: "Cartagena" }, { nombre: "Carlos", edad: 20, promedio: 75, genero: "Masculino", carrera: "Ingeniería de Sistemas", ciudad: "Santa Marta" }, { nombre: "Sofía", edad: 22, promedio: 95, genero: "Femenino", carrera: "Psicología", ciudad: "Pereira" } ];

let sum = 0;

for (let i = 0; i < estudiantes.length; i++) {
    let personas = estudiantes[i];
    sum += personas.edad;
}
console.log('La suma total de las edades es de:' + sum);
console.log('El promediode edad es de: ' + sum/estudiantes.length);
console.log(`La suma total de las edades es de: ${sum} y la suma el promedio de las edades es de ${sum/estudiantes.length}`)