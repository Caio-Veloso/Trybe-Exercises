/*8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
 */

const numberA = 21;
const numberB = 12;
const numberC = 11;

if(numberA %2 === 0 || numberB %2 === 0 || numberC %2 ===0 ){
  console.log(true);
}
else{
  console.log(false);
}
