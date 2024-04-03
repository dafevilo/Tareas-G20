const numbers = [1, 2, 3, 4, 5];

console.log("El array creado es de 5 numeros y son: " + numbers);
console.log();

// Imprimir números pares
console.log("Números pares:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]); 
  }
}

// Encontrar el número más alto del array
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log();
console.log("El numero mas alto del array es el: " + max);