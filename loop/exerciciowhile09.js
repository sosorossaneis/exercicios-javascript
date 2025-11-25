// 9. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

// let n = parseInt(prompt("Digite 0:"))
// while (n !== 0){
//     n =  parseInt(prompt("Digite 0: "))
// }
// console.log(n)
// if  (n == 0){
//     window.alert("0 selecionado, Eba!")
// }

let numero

do {
    numero = parseInt(prompt("Digite um numero(digite 0 para sair): "))
} while (numero !== 0)

console.log("Você digitou 0. O programa foi encerrado!")