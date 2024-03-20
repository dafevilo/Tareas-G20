let ages = [31 , 28 , 24 ,35 , 40]; //158
let sumOfAges= 0;
for( let i = 0 ; i < ages.length ; i++){
    sumOfAges  += ages[i];
}
let averageAge = sumOfAges / ages.length;

console.log(sumOfAges);

console.log(averageAge);