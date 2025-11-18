//exercicio 06
//Escreva um programa que solicite o ano de nascimento de
//uma pesssoa e verifica se ela é maior de 
//18 anos. Exiba uma mensagem indetificando se a pessoa 
//é maior ou não.

let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

if(idade >= 18){
    console.log("Maior de idade")
    console.log("Sua idade é " + idade)
}

else{
    console.log("Menor de idade")
    console.log("Sua idade é: " + idade)
}
