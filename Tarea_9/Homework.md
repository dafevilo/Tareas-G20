# Tarea 9

- **Entendiendo Closures:**

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
  miFuncion(); Imprimira el mensaje "Hola"
  ```

- **Uso de Closures en Contextos Prácticos:**

  Descripción: Implementa una función que utilice closures para crear un .
  Instrucciones:

  ```javascript
  // Ejercicio:
  function crearContador() {
    let count = 0;
    return function () {
      count++;
      return count
    };
  }

  const contador = crearContador();
  console.log(contador()); imprimira el numero 1 porqué se cumple la función de aumentar el digito
  y además retornarlo hasta su numero correspondiente
  console.log(contador()); imprimira el numero 2 porqué cada vez el contador aumenta los digitos consecutivos porqué las funciones cada vez se van sumando
- **Uso Avanzado de Closures:**

  Descripción: Implementa una función que tome un número como argumento y devuelva una función que multiplique su argumento por el número original utilizando un closure.
  Ejercicio:

  ```javascript
  function multiplicador(numero1) {
    return function (numero2){
      return numero1*numero2
    }
  }
  const duplicar = multiplicador(2);
  console.log(duplicar(5)); // Debería imprimir 10
  ```

- **Callbacks en Manejo de Datos:**

  Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

  Ejercicio:

  ```javascript
  function sumarArreglo(numeros, callback) {
    const sumatoria = numeros.reduce((total, num) => total + num, 0);
  callback(sumatoria)
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });
  ```

- **Callbacks para Filtrar Elementos de un Arreglo:**

  Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro.
  Ejercicio:

  ```javascript
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
  console.log(numerosPares); // Debería imprimir [2, 4]
  ```
