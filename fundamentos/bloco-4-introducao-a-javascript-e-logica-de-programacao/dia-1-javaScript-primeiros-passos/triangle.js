// Faça um programa que defina três variáveis com os valores dos três ângulos 
// internos de um triângulo. Retorne true se os ângulos representarem os 
// ângulos de um triângulo e false , caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, 
// a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

let angle1 = 100;
let angle2 = 20;
let angle3 = 60;
let triangle

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
  console.log("erro");
} else if (angle1 + angle2 + angle3 === 180){
    triangle = true;
    console.log(triangle);
} else {
    triangle = false;
    console.log(triangle);
}