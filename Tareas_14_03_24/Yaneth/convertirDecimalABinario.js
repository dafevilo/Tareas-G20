function decimalABinario(n) {
    let binario = "";
    let cont_unos = 0;

    while (n >= 1) {
        if (n % 2 === 1) {
            binario = "1" + binario;
            cont_unos += 1;
        } else {
            binario = "0" + binario;
        }
        n = Math.floor(n / 2);
    }

    return { binario, cont_unos };
}

// Ejemplo de uso
const numero = 20;
const { binario, cont_unos } = decimalABinario(numero);
console.log(`La representación binaria de ${numero} es ${binario} y hay ${cont_unos} dígitos '1'.`);
