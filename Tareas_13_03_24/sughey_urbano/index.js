const readlineSync = require('readline-sync');

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function mostrarNumerosPrimos(numeroMaximo) {
    const numerosPrimos = [];
    for (let i = 2; i <= numeroMaximo; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }
    return numerosPrimos;
}

const numeroMaximo = parseInt(readlineSync.question("Ingrese el número máximo para mostrar los números primos: "));
const primosEncontrados = mostrarNumerosPrimos(numeroMaximo);
console.log("Los números primos hasta", numeroMaximo, "son:", primosEncontrados);
