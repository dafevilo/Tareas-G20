Tarea 9

- **Entendiendo Closures:**

  Descripción: Completa una función simple que demuestre el concepto de closure.
  Instrucciones:

 Clouser:
 es como una burbuga, un ambiente, donde viven los datos 
 son los datos a los que podemos acceder.
 
 el scop, me va a decir en donde voy a tener acceso a esa variable, dependiendo
 del lugar donde este creado el dato o variable.
 
 Clouser: Una funcion va a tener acceso a las variables que sean creadas
 ante de esa funcion.

 ejemplo
 ```javascript
 function crearPersona(){
    const nombre = "Yaneth";
    const edad = 18;
    const profesion= "desarrolladora"

    function mostrarPersona(){
        console.log(nombre);
        console.log(edad);
        console.log(profesion);
        
    }
    return mostrarPersona;
}
const usuario = crearPersona();
usuario();

 ```javascript



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
  se imprime Hola.
  ´porque miFuncion esta almacenando obtiene lo que hace la funcion Creafuncion que a su
  vez contiene la funcion muestraMensaje.

```


- **Uso de Closures en Contextos Prácticos:**

  Descripción: Implementa una función que utilice closures para crear un .
  Instrucciones:

  ```javascript
  // Ejercicio:
  function crearContador() {
    let count = 0;
    return function() {
      count++  // Completa esta función para incrementar 'count' en 1 y devolver su valor
      console.log(count);
    };
    return count // aqui no se puede retornar porque no tiene el scope de la variable count
  }

  const contador = crearContador();
  console.log(contador()); //imprime el 1, porque cumple el proceso de crear contador y continua // ¿Qué imprimirá? ¿Por qué?
  console.log(contador()); //imprime el 2, porque tambien se cumple el proceso de crear contador // ¿Qué imprimirá ahora?

  // si lo dejamos con el return de la linea 38 se ejecutaria el codigo pero el resultado seria undefined

  ```

- **Uso Avanzado de Closures:**

  Descripción: Implementa una función que tome un número como argumento y devuelva una función que multiplique su argumento por el número original utilizando un closure.
  Ejercicio:

```javascript
  function multiplicador(numero) {  
         return function multiplica(n){   // Completa esta función para devolver una función que multiplique su argumento por 'numero'
            const resultado = n * numero; 
     }
  };

  const duplicar = multiplicador(2);
  console.log(duplicar(5)); // Debería imprimir 10
  ```

- **Callbacks en Manejo de Datos:**

  Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

  Ejercicio:

  ```javascript
  function sumarArreglo(numeros, callback) {
    total = numeros.reduce((acomulador, valor) => acomulador + valor, 0);
    console.log(total);
    

    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
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
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = numeros.filter(numero => {
    return numero % 2 === 0;
    
  });
  console.log(numerosPares); // Debería imprimir [2, 4]

  ```
