function bAD(binario) {
    let decimal = 0;
    const longitud = binario.length;

    for (let i = 0; i < longitud; i++) {
        const bit = binario[longitud - i - 1];
        if (bit === '1') {
            decimal += Math.pow(2, i);
        } else if (bit !== '0') {
            
            return NaN;
        }
    }

    return decimal;
}

const numeroBinario = "101010";
const numeroDecimal = bAD(numeroBinario);
console.log(numeroDecimal); 

// convertir numero decimal a binario

function dAB(decimal) {
    if (decimal === 0) {
        return "0"; 
    }
    
    let binario = "";
    
    while (decimal > 0) {
        let residuo = decimal % 2;
        binario = residuo + binario;
        decimal = Math.floor(decimal / 2);
    }   
    return binario;
}
const numeroD = 10;
console.log("El número decimal", numeroDecimal, "en binario es:", dAB(numeroDecimal));