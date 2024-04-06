//Aquí va tu código
  // Ejercicio:
  function creaFuncion() {
    let mensaje = "Hola esto se va a ver en consola";
    function muestraMensaje() {
      console.log(mensaje);
    }
    return muestraMensaje;
  }

  const miFuncion = creaFuncion();
  miFuncion(); //Imprimira el mensaje "Hola"
  // ¿Qué imprimirá? Se muestra en consola el mensaje Hola ya que esta en su scope para ser invocado.
  
  // ¿Por qué? Ya que hay una funcion dentro de otra funcion, la funcion que esta adentro 
  // tiene acceso a todo el scope ya que javascipt se lo permite pero si la funcion creaFuncion quisiera llamar a algun elemnto dentro de 
  // muestraMensaje no se puede ya que javascript no se permite por no funciona así.