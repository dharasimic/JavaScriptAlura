alert('Número Secreto');

let numeroSecreto = 5;
let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto) {
    numeroChute = prompt('Escolha um número entre 1 e 10.');

    if (numeroChute == numeroSecreto) {
        alert(`Parabéns, você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
    }

    else {
        if (numeroSecreto > numeroChute) {
            alert(`O número secreto é maior que ${numeroChute}.`);
        }
        else {
            alert(`O número secreto é menor que ${numeroChute}.`);
        }
        tentativas++;
    }
}