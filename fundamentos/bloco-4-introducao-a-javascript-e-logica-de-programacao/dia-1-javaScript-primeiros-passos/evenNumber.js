// Escreva um programa que defina três números em variáveis e 
// retorne true se pelo menos uma das três for par. 
// Caso contrário, ele retorna false.

// Bonus: use somente um if .

let number1 = 1;
let number2 = 4;
let number3 = 3;
let evenNumber = false;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0 ) {
  evenNumber = true; 
}

console.log("Pelo menos um dos três números é par? ", evenNumber); 