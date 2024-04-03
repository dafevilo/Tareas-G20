let binario = numero => {
    if (numero === 0) return "0"; // Handle special case when input is 0

    let binarioArray = [];
    while (numero > 0) {
        binarioArray.push(numero % 2);
        numero = Math.floor(numero / 2);
    }
    return binarioArray.reverse().join("");
}

console.log(binario(15)); // Output: 1111
