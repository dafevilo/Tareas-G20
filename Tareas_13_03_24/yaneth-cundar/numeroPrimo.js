//Definimos las variables

function numeroprimo (numero) {
    let contador = 0;
 //if (numero <= 0) return false; 
    for (var index = 1 ; index <= numero ; index++) {
        if (numero  % index == 0) contador ++;
   
    }
    if (contador == 2)  {
        console.log("Es un numero primo")
        return true;
    }   else{
        console.log("No es un numero primo")
        return false;
    }
}
console.log("El numero 1 es:"+ numeroprimo(0));
