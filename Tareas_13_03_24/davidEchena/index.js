const rli = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const NumDel1al100 = (num) => {
  let array_primos = [];
  let array_no_primos = [];
  for (let i = 1; i !== 100; i++) {
    const divisor = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisor.push(j);
      }
    }

    if (divisor.length === 2) {
      array_primos.push(i);
    } else if (
      divisor.length === 3 ||
      divisor.length === 4 ||
      divisor.length === 5 ||
      divisor.length === 6 ||
      divisor.length === 7
    ) {
      array_no_primos.push(i);
    }
  }
  console.log(array_primos);
  console.log(array_no_primos);
};

rli.question("Escribe un numero 1 o 100: ", (num) => {
  NumDel1al100(num);
});
