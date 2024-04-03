console.log("ejemplo de clouser");

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


function creaFuncion() {
    let mensaje = "Hola";
    function muestraMensaje() {
      console.log(mensaje);
    }
    return muestraMensaje;
  }

  const miFuncion = creaFuncion();
  miFuncion(); // ¿Qué imprimirá? ¿Por qué?

  


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

 

function multiplicador(numero) {
    return function multiplica(n) {
        const resultado = n * numero;
        //console.log("Soy número " + numero);
        //console.log("El resultado es " + resultado);
        return resultado;
    }
}

// Ejemplo de uso
const miFuncion1 = multiplicador(2);
const resultado = miFuncion1(5); // Debería imprimir "Soy número 10" y "El resultado es 50"
console.log("Resultado: " + resultado);





function sumarArreglo(numeros, callback) {
    total = numeros.reduce((acomulador, valor) => acomulador + valor, 0);
    console.log(total);
    

    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
  }
  const numeros1 = [1, 2, 3, 4, 5];
  sumarArreglo(numeros1, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });



const numeros3 = [1, 2, 3, 4, 5];
  const numerosPares = numeros3.filter(numero => {
    return numero % 2 === 0;
    
  });
  console.log(numerosPares); // Debería imprimir [2, 4]

















