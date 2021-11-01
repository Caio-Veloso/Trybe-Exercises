/* 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
 */

const numberA = 32;
const numberB = 14;
const numberC = 16;

if(numberA %2 !== 0 || numberB %2 !== 0 || numberC %2 !==0 ){
  console.log(true);
}
else{
  console.log(false);
}
