const rli = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertirBinario = (i) => {
  residuos = [];
  while (i > 0) {
    residuos.push(i % 2);
    i = Math.floor(i / 2);
  }
  num_binario = residuos.reverse().join("");
  console.log(num_binario);
};

rli.question("Di un numero decimal: ", (num) => {
  convertirBinario(num);

  rli.close();
});
