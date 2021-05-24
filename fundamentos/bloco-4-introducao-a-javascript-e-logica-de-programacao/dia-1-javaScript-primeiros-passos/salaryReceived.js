// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados 
// de seu salário bruto o INSS e o IR. Faça um programa que, dado um 
// salário bruto, calcule o líquido a ser recebido.

//   INSS (Instituto Nacional do Seguro Social)
//     Salário bruto até R$ 1.556,94: alíquota de 8%
//     Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//     Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//     Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//   IR (Imposto de Renda)
//     - Até R$ 1.903,98: isento de imposto de renda
//     - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 
//     a deduzir do imposto
//     - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 
//     a deduzir do imposto
//     - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13
//     a deduzir do imposto
//     - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a 
//     deduzir do imposto.

let grossSalary = 3000;
let inssSalaryDeducted;
let irDeducted;
let netSalary;

if (grossSalary <= 0) {
  console.log("Valor incorreto inserido.");
} else if (grossSalary <= 1556.94) {
  inssSalaryDeducted = (grossSalary - grossSalary * 0.08);
} else if (grossSalary > 1556.94 && grossSalary <= 2594.92) {
  inssSalaryDeducted = (grossSalary - grossSalary * 0.09);
} else if (grossSalary > 2594.93 && grossSalary <= 5189.82) {
  inssSalaryDeducted = (grossSalary - grossSalary * 0.11);
} else if (grossSalary > 5189.82) {
  inssSalaryDeducted = (grossSalary - 570.88);
}
  console.log("Salário com dedução de INSS: R$ " + inssSalaryDeducted.toFixed(2));

if (inssSalaryDeducted <= 1903.98) {
  console.log("Isento de Imposto de Renda.");
} else if (inssSalaryDeducted > 1903.98 && inssSalaryDeducted <= 2826.65) {
  irDeducted = ((inssSalaryDeducted * 0.075) - 142.80);
} else if (inssSalaryDeducted > 2826.65 && inssSalaryDeducted <= 3751.05) {
  irDeducted = ((inssSalaryDeducted * 0.15) - 354.80);
} else if (inssSalaryDeducted > 3751.05 && inssSalaryDeducted <= 4664.68) {
  irDeducted = ((inssSalaryDeducted * 0.225) - 636.13);
} else if (inssSalaryDeducted > 4664.68) {
  irDeducted = ((inssSalaryDeducted * 0.275) - 869.36);
}
  console.log("Dedução de imposto de renda: R$ " + irDeducted.toFixed(2));

  netSalary = (inssSalaryDeducted - irDeducted);
  console.log("Salário líquido a receber: R$ " + netSalary.toFixed(2));