// Ejercicio:
function crearContador() {
    let count = 0;
    return function () {
      // Completa esta función para incrementar 'count' en 1 y devolver su valor
      count++;
      return count;
    };
  }
  
  const contador = crearContador();
  console.log(contador()); //1
  console.log(contador()); //2 porrque al llamar la funcion crearContador() que devuelve una funcion interna
  //que va incrementando en 1, cada vez que se llama y devuelve el nuevo valor 