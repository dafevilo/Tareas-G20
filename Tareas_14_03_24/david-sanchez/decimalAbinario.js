const deciBinario = (n) => {
   let binario ="";
   let residuo;
   while (n>0){
      residuo = n % 2;
      binario = residuo + binario;
      n = Math.floor((n/2));
   }
   return binario;
}
console.log(deciBinario(22)); 

