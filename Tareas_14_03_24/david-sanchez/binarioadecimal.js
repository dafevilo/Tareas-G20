const binarioDecimal = () => {
    let listabinario = [1,1,0,0,0];
    let binarioRevers = listabinario.reverse();
    let decimal=0;
    for(let i=0; i < binarioRevers.length; i++){
        decimal = decimal + binarioRevers[i] * Math.pow(2,i);
    }
    return decimal;     
}
console.log(binarioDecimal());