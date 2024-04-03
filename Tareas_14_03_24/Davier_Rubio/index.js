function identificarNumerosPrimos(numero) {
    if(numero <= 0) return false ;
    let contador = 0  ;
    for (var i = 1; i <= numero; i++) {
        if(numero % i === 0) contador++;
    }
    return contador === 2 ?  true : false;
}

console.log("el numero 1 es " + identificarNumerosPrimos(1));
console.log("el numero 2 es " + identificarNumerosPrimos(2));
console.log("el numero 3 es " + identificarNumerosPrimos(3));
console.log("el numero 4 es " + identificarNumerosPrimos(4));
console.log("el numero 5 es " + identificarNumerosPrimos(5));
console.log("el numero 6 es " + identificarNumerosPrimos(6));
console.log("el numero 7 es " + identificarNumerosPrimos(7));
console.log("el numero 8 es " + identificarNumerosPrimos(8));
console.log("el numero 9 es " + identificarNumerosPrimos(9));
console.log("el numero 10 es " + identificarNumerosPrimos(10));
console.log("el numero 11 es " + identificarNumerosPrimos(11));
console.log("el numero 12 es " + identificarNumerosPrimos(12));
console.log("el numero 13 es " + identificarNumerosPrimos(13));
console.log("el numero 14 es " + identificarNumerosPrimos(14));
console.log("el numero 15 es " + identificarNumerosPrimos(15));