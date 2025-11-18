// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do 
// usuário e informe se este número é par ou
// ímpar.

let numero = parseInt(prompt("Informe um número inteiro: "))

if(numero%2 == 0 ){
    console.log("O Número é Par")
}else{
    console.log("O Número é Impar")
}