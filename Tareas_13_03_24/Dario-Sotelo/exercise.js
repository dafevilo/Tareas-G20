for (let i = 2; i <= 20; i++) {  
  const divisor = []; 

  for (let j = 1; j <= i; j++) { 
    if (i % j === 0) {  
      divisor.push(j);  
    }
  }
  if (divisor.length === 2) { 
    console.log(`El numero ${i} es primo`);  
  }
}