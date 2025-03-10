alert('Número Secreto');

let numeroSecreto = 1;
let numeroChute = prompt('Escolha um número entre 1 e 10.');

if (numeroSecreto == numeroChute) {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto}`);
}

else {
    alert('Que pena, você errou!');
}