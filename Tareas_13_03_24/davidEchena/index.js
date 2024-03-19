const rli = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const NumDel1al100 = (num) => {
  let array_primos = [];
  for (let i = 1; i !== 100; i++) {
    const divisor = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisor.push(j);
      }
    }

    if (divisor.length === 2) {
      array_primos.push(i);
    }
  }
  console.log(array_primos);
};

rli.question("Escribe un numero 1 o 100: ", (num) => {
  NumDel1al100(num);
});
