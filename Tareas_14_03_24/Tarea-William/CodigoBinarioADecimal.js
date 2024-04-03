function BinarioADecimal(num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

console.log(BinarioADecimal("1010"));