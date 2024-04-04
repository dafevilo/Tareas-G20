function multiplicador(numero) {
    return function(x) {
      return numero * x;
    };
  }
  
  const duplicar = multiplicador(2);
  console.log(duplicar(5)); // Imprimirá 10
 