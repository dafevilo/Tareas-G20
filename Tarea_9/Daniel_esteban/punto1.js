function creaFuncion() {
    let mensaje = "Hola";
    function muestraMensaje() {
      console.log(mensaje);
    }
    return muestraMensaje;
  }
  
  const miFuncion = creaFuncion();
  miFuncion(); // Imprimirá "Hola"
//En este código, creaFuncion() devuelve la función interna muestraMensaje. Cuando se llama a miFuncion(), 
//en realidad se está llamando a la función muestraMensaje(), que imprime en la consola el valor de mensaje, 
//que es "Hola". Por lo tanto, imprimirá "Hola" en la consola.