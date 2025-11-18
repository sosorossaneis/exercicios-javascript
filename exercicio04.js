// exercicio 04:
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


//Receber as 4 notas
alert("informe ás notas de 0 a 10")
let nota1 = parseFloat(prompt("Informe a primeira nota: "))
let nota2 = parseFloat(prompt("Informe a segunda nota: "))
let nota3 = parseFloat(prompt("Informe a terceira nota: "))
let nota4 = parseFloat(prompt("Informe a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("A média do aluno é: " + media)

if (media >= 7){
  console.log("APROVADO")
}
else if (media < 7 && media >=5){
    console.log("Recuperação")
}

else {
    console.log("Reprovado")
}