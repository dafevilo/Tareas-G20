function numPrimo(numero) {
    
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
for (let i = 1; i <= 100; i++) {
  if (numPrimo(i)) {
    console.log(i);
  }
}
