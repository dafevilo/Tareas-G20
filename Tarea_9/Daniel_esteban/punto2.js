function crearContador() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  
  const contador = crearContador();
  console.log(contador()); // Imprimirá 1. La primera vez que se llama, incrementa count de 0 a 1 y devuelve 1.
  console.log(contador()); // Imprimirá 2. La segunda vez que se llama, incrementa count de 1 a 2 y devuelve 2.

  //En este código, contador se convierte en una referencia a la función interna que fue devuelta por crearContador(). 
  //Cada vez que se llama contador(), la función interna se ejecuta y incrementa count en 1, devolviendo su valor actualizado. 
  //Por lo tanto, la primera vez que se llama a contador(), imprimirá 1, y la segunda vez imprimirá 2, ya que count se 
  //incrementa con cada llamada. 