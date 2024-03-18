function binarioADecimal(binario) {
    let decimal = 0;
    let power = 0;

    // Itera a través de cada dígito en la representación binaria
    for (let i = binario.length - 1; i >= 0; i--) {
        if (binario[i] === '1') {
            decimal += 2 ** power;
        }
        power++;
    }

    return decimal;
}

// Ejemplo de uso
const numeroBinario = "10100";
const resultadoDecimal = binarioADecimal(numeroBinario);
console.log(`La representación decimal de ${numeroBinario} es ${resultadoDecimal}.`);
