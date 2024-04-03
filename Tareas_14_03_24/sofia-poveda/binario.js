function binaryToDecimal(bin) {
  // Convert binary string to decimal number
  console.log("binario: ", bin); // 101010
  let dec = parseInt(bin, 2); // Specify radix 2 for binary
  console.log("decimal", dec); // 42
  console.log("-------");
}

function decimalToBinary(num) {
  // Convert decimal number to binary string
  console.log("num decimal: ", num); // 42
  let sbin = num.toString(2); // Specify radix 2 for binary
  console.log("binario", sbin); // "101010"
  console.log("-------");
}

// binaryToDecimal(101010);
// decimalToBinary(42);

binaryToDecimal(11);
decimalToBinary(3);
