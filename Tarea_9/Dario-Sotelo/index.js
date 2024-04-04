// //Entendiendo Closures:
function creaFuncion() {
    let mensaje = "Hola";
    function muestraMensaje() {
      console.log(mensaje);
    }
    return muestraMensaje;
  }
  
  const miFuncion = creaFuncion();
  miFuncion(); // Imprime Hola, debido a que la funcion local "muestraMensaje"
               // esta contenida en la funcion global "crearFuncion"
               // y al final muestra "miFuncion =  creaFuncion"


// // Uso de Closures en Contextos Prácticos:
function crearContador() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
  }
  
  const contador = crearContador();
    console.log(contador()); // 1   por qué, el count inicia en 0 y luego lo incrementamos count++
    console.log(contador()); // 2   y la funcion tiene acceso a la variable superior en este caso let count=
 

// Uso avanzado de closures
function multiplicador(numero) {
    function multiplicacion(argum){
        return argum * numero;
    }
    return multiplicacion;
  }
  const duplicar = multiplicador(2);
  console.log(duplicar(5)); 


//   // Callbacks en Manejo de Datos:
  function sumarArreglo(numeros, callback) {
    const sumatoria = numeros.reduce((total, num) => total + num, 0);
    callback(sumatoria);
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });


  // Callbacks para Filtrar Elementos de un Arreglo:
  function filtrarArreglo(arreglo, callbackFiltro) {
    const arregloNuevo = [];
    for (let i = 0; i < arreglo.length; i++) { 
        if (callbackFiltro(arreglo[i])) {
            arregloNuevo.push(arreglo[i]);
        }
}
    return arregloNuevo;
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); 

