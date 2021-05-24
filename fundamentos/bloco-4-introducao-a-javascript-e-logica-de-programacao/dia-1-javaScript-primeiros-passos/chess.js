// Escreva um programa que receba o nome de uma peça de xadrez e 
// retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome 
// de uma peça com letras maiúsculas quanto com letras minúsculas, 
// sem aumentar a quantidade de condicionais.

// Se a peça passada for inválida, 
// o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let chessPieces = "ReI";
let chesspieces = chessPieces.toLowerCase();

console.log("Programa para descrever o movimento de peças de xabrez.");
console.log("Nomes da peça escolhida:", chessPieces);

switch (chesspieces) {
  case "peão":
    console.log("O Peão, no primeiro movimento, anda uma ou duas casas para a frente na vertical, depois anda apenas uma casa para frente na vertical. Ele ataca apenas as posições diagonais frontais em uma casa.");    
    break;
  case "bispo":
    console.log("O Bispo se movimenta e ataca em todas as diagonais, a partir de sua posição, quantas casas o jogador julgar necessário");
    break;
  case "cavalo":
    console.log("O Cavalo se move em 'L' contando '3' casas a partir de sua posição para qualquer direção vertical ou horizontalmente. Ataca a peça que se encontrar na casa final de seu movimento.");
    break;
  case "torre":
    console.log("A Torre se move horizontal ou verticalmente, quantas casas o jogador julgar necessário, e ataca a peça que se encontrar na casa final do seu movimento.");
    break;
  case "rainha":
    console.log("A Rainha se move em qualquer direção, diagonal, vertical ou horizontal, quantas casas o jogador julgar necessário, e ataca a peça que se encontra na casa final de seu movimento.");
    break;
  case "rei":
    console.log("O Rei se move em qualquer direção, diagonal, vertical ou horizontal, uma casa por vez, e ataca a peça que se encontra na casa final de seu movimento.");
    break;
  default:
    break;
}

