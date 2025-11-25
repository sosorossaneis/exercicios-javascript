// 7. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let n = parseInt(prompt("Insira um número aqui: "))

do{
    console.log("Contagem regressiva: ", n )
    n --
}while (n >= 0)