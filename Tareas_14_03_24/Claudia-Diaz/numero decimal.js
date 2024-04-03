let binario = numero => {
    let binarioArray= []
    while(numero > 1 ) {
        binarioArray.push(numero % 2 )
        numero = Math.floor(numero  / 2 )

}
binarioArray.push(numero)
return parseInt(binarioArray.reverse().join(""))
}

console.log(binario(15))