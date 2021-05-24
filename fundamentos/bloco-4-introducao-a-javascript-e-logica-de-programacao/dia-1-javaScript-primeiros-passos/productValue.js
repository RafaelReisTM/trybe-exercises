// Escreva um programa que se inicie com dois valores em duas 
// variáveis diferentes: o custo de um produto e seu valor de venda. 
// A partir dos valores, calcule quanto de lucro (valor de venda 
// descontado o custo do produto) a empresa terá ao vender mil desses 
// produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar 
// caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda 
// pelo custo do mesmo, sendo que o imposto de 20% também faz parte 
// do valor de custo.

//     - valorCustoTotal = valorCusto + impostoSobreOCusto
//     - lucro = valorVenda - valorCustoTotal (lucro de um produto)

let productSalesValue = 50;
let productCost = 10;
let costTax = 0.2;
let totalProductCost = (productCost + (productCost * costTax));
let profit;

if (productSalesValue > 0 && productCost > 0) {
  profit = (productSalesValue - totalProductCost) * 1000;
  console.log("Olucro com a venda de 1000 produtos foi de: R$" + profit);
} else {
  console.log("Erro nos valores inseridos. Favor verificar!");
}
 
