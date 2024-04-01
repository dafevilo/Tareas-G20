// Ejercicio:
function creaFuncion() {
    let mensaje = "Hola";
    function muestraMensaje() {
      console.log(mensaje);
    }
    return muestraMensaje;
  }
  
  const miFuncion = creaFuncion();
  miFuncion(); // ¿Qué imprimirá? ¿Por qué?
  //imprime hola , porque  ejecuta la funcion creaFuncion() donde dentro de esa funcion crea otra
  // llamada muestraMensaje() que esta consologiando el parametro (mensaje) que se define como "hola"
  //esto es posible porque funcion muestraMensaje() se trae los parametros de la funcion creaFuncion()
  // esto es posible por el termino de closure. 