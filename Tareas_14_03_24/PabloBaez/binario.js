function binarioADecimal(numeroBinario) {
    return parseInt(numeroBinario, 2);
  }
  
  const numeroBinario = "1001";
  const numeroDecimal = binarioADecimal(numeroBinario);
  
  console.log(numeroDecimal); // Resultado: 9
  