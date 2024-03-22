# Tarea 9

- Entendiendo Closures:

  Descripción: Completa una función simple que demuestre el concepto de closure.
  Instrucciones:

  ```javascript
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
  ```

- Uso de Closures en Contextos Prácticos:

  Descripción: Implementa una función que utilice closures para crear un contador.
  Instrucciones:

  ```javascript
  // Ejercicio:
  function crearContador() {
    let count = 0;
    return function () {
      // Completa esta función para incrementar 'count' en 1 y devolver su valor
    };
  }

  const contador = crearContador();
  console.log(contador()); // ¿Qué imprimirá? ¿Por qué?
  console.log(contador()); // ¿Qué imprimirá ahora?
  ```

- Creando una Función que Cuente Hacia Atrás:

  Descripción: Implementa una función que cuente hacia atrás desde un número dado hasta cero.
  Instrucciones:

  ```javascript
  // Ejercicio:
  function contarHaciaAtras(numero) {
    // Completa esta función para que cuente hacia atrás desde 'numero' hasta 0, imprimiendo cada número
  }

  contarHaciaAtras(5); // Debería imprimir 5, 4, 3, 2, 1, 0 en intervalos de tiempo
  ```
