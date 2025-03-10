alert('Número Secreto');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto) {
    numeroChute = prompt('Escolha um número entre 1 e 100.');

    if (numeroChute == numeroSecreto) {
        break;
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

let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`Parabéns, você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativas}.`);