const numero =(primo) =>{
    if(primo<1){
        return false
    }
for(let i=1;i<primo;i++){
    if(primo % i === 0){
        return false
    }
}
        return true
}
const mostrarnumeros =(numeros) =>{
    resultado=[]
    for(let i=1;i<numeros;i++){
        if(numero(i))resultado.push(i)
    }
return resultado
}
mostrarnumeros(100)