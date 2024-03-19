const rli = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertirABinario = (num) => {
  num_array = num.split("").reverse();
  num_decimal = 0;
  for (let i = 0; i < num.length; i++) {
    if (num_array[i] == "1") {
      num_decimal += Math.pow(2, i);
    }
  }
  console.log(num_decimal);
};

rli.question("Di un numero binario: ", (num) => {
  convertirABinario(num);
  rli.close();
});
