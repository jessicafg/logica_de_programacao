//contador que vai de 0 até 10
alert('Bem vindo ao contador!!');
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

//contador de vai de 10 até 0
alert('Bem vindo ao contator');
let contador2 = 10;
while(contador >= 0) {
    console.log(contador2);
    contador--;
}

//contagem regressiva
let numero = prompt('digite um número');
while (numero >= 0) {
    console.log(numero);
    numero--;
}

//contagem proressiva
let numeroMaximo = prompt('digite um número para contagem progressiva');
let contagem = 0; 
while (contagem <= numeroMaximo) {
    console.log(contagem);
    contagem++
}