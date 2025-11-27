let atividades = prompt("Informe um número de 1 a 7: ")

switch (atividades) {
    case "1":
        Login()
        break;

    case "2":
        Crescente()
        break;

    case "3":
       Desconto()
        break;

    case "4":
       Peso()
        break;

    case "5":
       Peso()
        break;

}


//Login 01//
function Login (){

let login = prompt("Digite o seu usuário: ")

let senha = prompt("Digite a sua senha: ")

if(login == "admin" && senha == "senha123"){
    console.log("Login bem sucedido!")
}
else{
    console.log("Você não tem permissão de acesso!")
}}

Login()
//ordem crescente//
function Crescente(){
let numero01 = parseInt(prompt("Digite o primeiro número: "))
let numero02 = parseInt(prompt("Digite o segundo  número: "))
let numero03 = parseInt(prompt("Digite o terceiro número: "))

if (numero01 < numero02 && numero02 > numero03) {
    console.log("Os números estão em ordem crescente!")
}
else {
    console.log("Os números não estão em ordem crescente!")
}
}
Crescente()

//desconto//
function Desconto(){
let valorTotal = parseFloat(prompt("Informe o valor total da compra: "))

let desconto

if (valorTotal <= 100) {
    desconto = 0
    console.log("O valor de desconto foi: " + desconto)
}
else if(valorTotal <= 200){
    desconto = 0.1
    console.log("O valor de desconto foi: " + (desconto*100) + "%")
}
else{
    desconto = 0.2
    console.log("O valor de desconto foi: " + (desconto*100) + "%")
}

let valorFinal = valorTotal - (valorTotal*desconto)

console.log("O valor final da compra com o desconto: R$" + 
    valorFinal.toFixed(2))
}
Desconto()
//Peso//
function Peso(){
    let peso = parseFloat(prompt("Informe seu peso (em Kg): "))
let altura = parseFloat(prompt("Informe a sua altura (em metros): "))

let imc = peso / (altura*altura)

console.log("Seu IMC é: " + imc)

if(imc < 18.5){
    console.log("Abaixo do peso.")
}
else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal.")
}
else if(imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso")
}
else if (imc >= 30 && imc <= 34.4){
    console.log("Obesidade grau 1.")
}
else if(imc >= 35 && imc <= 39.9){
    console.log("Obesidade grau 2.")
}
else {
    console.log("Obesidade grau 3.")
}

}
Peso()

//ano de nascimento//
function Nascimento(){
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
}
Nascimento()
