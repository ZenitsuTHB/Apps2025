import { halloLib, goodbyeLib } from "./lib/extern.js";
import { calcular } from "./lib/calculadora.js"

console.log("Hola desde NodeJS");
halloLib()
goodbyeLib()
console.log(calcular(4, 2, '+'));

const array = [];

/*array[0] = calcular(1,2, '+');
array[1] = calcular(2, 3, '-');
array[2] = calcular(4, 5, '*');
array[3] = calcular(6,2 , '/');
array[4] = calcular(9 , 0, '*');*/

let i = 0;
let res = 0;

while(i < 5)
{   
  res = calcular(1, i, '+');
  array.push(res);
  i++;
}

array.forEach(function(mafioso){  console.log(mafioso);})