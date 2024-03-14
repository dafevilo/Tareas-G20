
function generarNumerosPrimos (a) {

    if (typeof a === 'number' && Number.isInteger(a)){
        if (a >= 2){
            let primos = [];
            let esPrimo = [];

            for (let i = 2; i <= a; ++i){
                esPrimo.push(true);
            }
            for (let i = 2; i <= a; ++i){
                if (esPrimo[i]){
                    primos.push(i);

                    for(let t = 1; t * i <= a; ++t){
                        esPrimo[t * i] = false;
                    }
                }
            }
            return primos;
        }else{
            throw Error("El numero debe ser igual a 2. ");
        }
    }else{
        throw TypeError("El argumento deve ser un numero entero. ");
    }
}
console.log(generarNumerosPrimos(200));
console.log("Los numeros primos son: "+generarNumerosPrimos(200));