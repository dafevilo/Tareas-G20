const primos = () => {
    for (let i = 2; i < 30; i++) {
        let siEsPrimo = true;
        for (let d = 2; d < i; d++) {
            if (i % d === 0) {
                siEsPrimo = false;
            }
        }
        if (siEsPrimo === true) {
            console.log("El número " + i + " es primo");
        } 
    }
}
primos();