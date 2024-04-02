// PUNTO UNO >>>
console.log("PUNTO UNO >>>");

function creaFuncion() {
    let mensaje = "Hola";
    function muestraMensaje() {
      console.log(mensaje);
    }
    return muestraMensaje;
  }
  
  const miFuncion = creaFuncion();
  miFuncion(); 
  // Imprime el mensaje "Hola" porrque esta dentro del ambito 
  // de la funcion, es decir una funcion de se ejecuta dentro de otra "Clousure".

  //PUNTO DOS >>>>
  console.log("PUNTO DOS >>>");
function crearContador() {
    let count = 0;
    return function () {
      count++;
      return count;
      // Completa esta función para incrementar 'count' en 1 y devolver su valor
    };
  }
  
  const contador = crearContador();
  console.log(contador()); // Imprime 1, porque es la primera vez que se llama.
  console.log(contador()); // Imprime 2 ya que incrementa porque se ejecuta por segunda vez.

  //PUNTO TRES >>>
  console.log("PUNTO TRES >>>");

  function multiplicador(numero) {
    return function(multiplicar) {
      return multiplicar * numero;
    };
  }
  
  const duplicar = multiplicador(2);
  console.log(duplicar(5)); // Debería imprimir 10

  // PUNTO CUATRO >>>
  console.log("PUNTO CUATRO >>>");

  function sumarArreglo(numeros, callback) {
    const resultado = numeros.reduce((total, num) => total + num, 0);
    callback(resultado);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });
// PUNTO CINCO >>>
console.log("PUNTO CINCO >>>");

function filtrarArreglo(arreglo, callbackFiltro) {
    return arreglo.filter(callbackFiltro);
  }
  
  const numerosArreglo = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numerosArreglo, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]
  