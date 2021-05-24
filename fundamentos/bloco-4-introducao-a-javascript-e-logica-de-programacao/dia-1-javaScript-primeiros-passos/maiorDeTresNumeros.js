// Faça um programa que retorne o maior de três números. 
// Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 9;
let b = 13;
let c = 7;

if (a > b && a >c) {
  console.log("o valor de 'a' é maior que os valores de 'b' e 'c'");
} else if (b > a && b > c) {
  console.log("o valor de 'b' é maior que os valores de 'a' e 'c'");
} else {
  console.log("o valor de 'c' é maior que os valores de 'a' e 'b'");
}