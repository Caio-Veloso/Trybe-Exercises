/* 3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const a = 3;
const b = 2;
const c = 3;

if (a > b && a > c) {
  console.log(`${a} é maior que ${b} e ${c}`);
}
else if (b > a && b > c) {
  console.log(`${b} é maior que ${a} e ${c}`);
}
else if(c>a && c >b) {
  console.log(`${c} é maior que ${a} e ${b}`);
}

else if (a===b && a===c) {
  console.log("Os trê números são iguais");
}
else {
  console.log("Maiores números são iguais")
}
