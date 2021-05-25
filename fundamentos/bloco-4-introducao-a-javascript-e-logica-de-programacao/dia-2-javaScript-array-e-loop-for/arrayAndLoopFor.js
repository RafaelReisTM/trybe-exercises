// 1- Nesse primeiro exercício, percorra o array imprimindo todos os 
// valores nele contidos com a função console.log() ;
// 2- Para o segundo exercício, some todos os valores contidos no array e 
// imprima o resultado;
// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos 
// valores contidos no array;
//     - A média aritmética é o resultado da soma de todos os elementos 
//     divido pelo número total de elementos.
// 4- Com o mesmo código do exercício anterior, caso o valor final seja 
// maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, 
// imprima a mensagem: "valor menor ou igual a 20";
// 5- Utilizando for , descubra qual o maior valor contido no array e 
// imprima-o;
// 6- Descubra quantos valores ímpares existem no array e imprima o 
// resultado. Caso não exista nenhum, imprima a mensagem: 
// "nenhum valor ímpar encontrado";
// 7- Utilizando for , descubra qual o menor valor contido no array e 
// imprima-o;
// 8- Utilizando for , crie um array que vá de 1 até 25 e imprima o 
// resultado;
// 9- Utilizando o array criado no exercício anterior imprima o resultado 
// da divisão de cada um dos elementos por 2 .

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [4, 6, 8]; //teste

console.log('Sendo numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]:\n');

console.log('1- Nesse primeiro exercício, percorra o array imprimindo todos \nos valores nele contidos com a função console.log() ;\n');

for (let index = 0; index < numbers.length; index +=1) {
  let number = numbers[index];
  console.log(number);
}

console.log('\n2- Para o segundo exercício, some todos os valores contidos \nno array e imprima o resultado;\n')

let number = 0;

for (let index = 0; index < numbers.length; index +=1) {
  let sum = number + numbers[index];
  number = sum;
}

console.log(number);

console.log('\n3- Para o terceiro exercício, calcule e imprima a média \naritmética dos valores contidos no array;\n');

let average = (number / numbers.length);

console.log(average);

console.log('\n4- Com o mesmo código do exercício anterior, caso o valor \nfinal seja maior que 20, imprima a mensagem: "valor maior que 20". \nCaso não seja, imprima a mensagem: "valor menor ou igual a 20";\n');

if (average > 20) {
  console.log('valor maior que 20\n');
} else {
  console.log('valor menor ou igual a 20\n');
}

console.log('\n5- Utilizando for , descubra qual o maior valor contido no \narray e imprima-o;\n');

let biggerNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
 let bigger = numbers[index];
 if (bigger > biggerNumber) {
   biggerNumber = bigger;
 }
}

console.log(biggerNumber);

console.log('\n6- Descubra quantos valores ímpares existem no array e imprima \no resultado. Caso não exista nenhum, imprima a mensagem: \n"nenhum valor ímpar encontrado";\n');

let evenNumbers = 0;

for (let index = 0; index < numbers.length; index +=1) {
  let number = numbers[index];
  if ((number % 2) !==0 ) {
    evenNumbers += 1;
  }
}
if (evenNumbers !== 0) {
  console.log(evenNumbers);
} else {
  console.log('nenhum valor ímpar encontrado');
}

console.log('\n7- Utilizando for , descubra qual o menor valor contido no array \ne imprima-o;\n');

let minorNumber = biggerNumber;

for (let index = 0; index < numbers.length; index += 1){
  let minor = numbers[index];
  if (minor < minorNumber) {
    minorNumber = minor;
  }
}

console.log(minorNumber);

console.log('\n8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;\n');

let array = [];

for (let index = 0; index < 25; index += 1) {
  let number = index;
  array.push(index + 1);
}

console.log(array);

console.log('\n9- Utilizando o array criado no exercício anterior imprima o resultado \nda divisão de cada um dos elementos por 2.\n');

for (let index = 0; index < array.length; index += 1) {
  let division = array[index] / 2;
  console.log(division);
}