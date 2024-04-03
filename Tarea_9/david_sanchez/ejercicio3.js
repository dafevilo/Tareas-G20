function multiplicador(numero) {
    // Completa esta función para devolver una función que multiplique su argumento por 'numero'
    return function(arg){
        return numero * arg
    }
  }
  const duplicar = multiplicador(2);
  console.log(duplicar(5)); // Debería imprimir 10