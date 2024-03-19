function esPrimo(num) {
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
function mostrarPrimos(numero) {
    console.log ("los numeros primos hasta", numero, "son")
    for (let i = 2; i <= numero; i++) {
        if (esPrimo(i)) {
            console.log (i);
        }
    }
}
mostrarPrimos (2);