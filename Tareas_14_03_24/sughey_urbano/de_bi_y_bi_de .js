const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para convertir un número decimal a binario
function decimalABinario(decimal) {
    let binario = '';
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    return binario || '0';
}

// Función para convertir un número binario a decimal
function binarioADecimal(binary) {
    let decimal = 0;
    for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {
        decimal += parseInt(binary[i]) * Math.pow(2, j);
    }
    return decimal;
}

// Solicitar número decimal
rl.question('Introduzca un número decimal: ', (decimalInput) => {
    const decimal = parseInt(decimalInput);
    if (!isNaN(decimal)) {
        const binario = decimalABinario(decimal);
        console.log(`El número decimal ${decimal} en binario es: ${binario}`);
    } else {
        console.log('Por favor, introduzca un número decimal válido.');
    }
    rl.question('Introduzca un número binario: ', (binaryInput) => {
        const binary = binaryInput.trim();
        if (/^[01]+$/.test(binary)) {
            const decimal = binarioADecimal(binary);
            console.log(`El número binario ${binary} en decimal es: ${decimal}`);
        } else {
            console.log('Por favor, introduzca un número binario válido.');
        }
        rl.close();
    });
});
