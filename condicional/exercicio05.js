// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let numero01 = parseInt(prompt("Digite o primeiro número: "))
let numero02 = parseInt(prompt("Digite o segundo  número: "))
let numero03 = parseInt(prompt("Digite o terceiro número: "))

if (numero01 < numero02 && numero02 > numero03) {
    console.log("Os números estão em ordem crescente!")
}
else {
    console.log("Os números não estão em ordem crescente!")
}
