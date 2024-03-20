function convertirBinarioADecimal(binario) {
    if (binario.construcor != String) { 
        
    }
binario = binario.replace(/[^01]/gi,'');
return Number.parseInt(binario, 2);

}

console.log(convertirBinarioADecimal('1001')); //9
console.log(convertirBinarioADecimal('1111'));//15
console.log(convertirBinarioADecimal('10000'));// 16
console.log(convertirBinarioADecimal('01'));//1
console.log(convertirBinarioADecimal('11111'));//31
console.log(convertirBinarioADecimal('10110'));//22
console.log(convertirBinarioADecimal('0110110'));//54
console.log(convertirBinarioADecimal('1011001'));//89
console.log(convertirBinarioADecimal('1011'));//11
console.log(convertirBinarioADecimal('1010'));//10
console.log(convertirBinarioADecimal('10110110'));//182
console.log(convertirBinarioADecimal('101'));//5
