// Escreva um programa que converte uma nota dada em porcentagem 
// (de 0 a 100) em conceitos de A a F. 
// Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e 
// encerrar se a nota passada for menor que 0 ou maior que 100.

let grade = 10;

let gradePercent = (grade * 10);

if (gradePercent > 100 || gradePercent < 0) {
  console.log("Erro no valor inserido.")
} else if (gradePercent >= 90) {
  console.log("O conceito do estudante foi 'A'.");
} else if (gradePercent >= 80) {
  console.log("O conceito do estudante foi 'B'.");
} else if (gradePercent >= 70) {
  console.log("O conceito do estudante foi 'C'.");
} else if (gradePercent >= 60) {
  console.log("O conceito do estudante foi 'D'.");
} else if (gradePercent < 50 && gradePercent > 0) {
  console.log("O conceito do estudante foi 'E'.");
} else {
  console.log("O conceito do estudante foi 'F'.");
}
