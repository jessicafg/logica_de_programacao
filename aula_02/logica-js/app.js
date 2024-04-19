alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não fo igual o número secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 30');
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você desdobriu o número secreto ${numeroSecreto} com ${tentativas}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas = tentativas + 1;
    }

}
