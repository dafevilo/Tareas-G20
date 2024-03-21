function decToBin(number) {
    let binario = []; 
    while (number > 0) {
        binario = (number % 2) + binario;
        number = Math.floor(number / 2);
    }
    return binario;  
}
number = 411;
binario = decToBin(number);
console.log(`El número decimal ${number} en binario es: ${binario}`);

