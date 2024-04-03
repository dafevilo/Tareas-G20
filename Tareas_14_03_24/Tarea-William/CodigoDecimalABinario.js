function convertToBinary(num) {
    let result = (num % 2).toString();
    for (; num > 1; ) {
      num = parseInt(num / 2);
      result  =  (num % 2) + (result);
    }
    return result;
  }
console.log(convertToBinary("340"));
