//-------------------------------------------FUNÇÃO----------------------------------------------------------//
//Bloco de codigos
function saudacao() {
    let NomePessoa = prompt("Digite seu nome: ")

    let horaAtual = new Date().getHours()

    if (horaAtual > 6 && horaAtual < 13) {
        alert("Bom dia " + NomePessoa)
    } else if (horaAtual >= 13 && horaAtual < 18) {
        alert("Boa tarde " + NomePessoa)
    } else {
        alert("Boa noite " + NomePessoa)
    }
}
//So funciona se chamar
saudacao()
//repete quantas vezes for chamado

saudacao()
saudacao()

//--------------------------------------------------O---B----J---E----T----O-------------------------------------------------------------//

let pessoa = {
    nome: "Bolsonaro",
    idade: 100,
    sobrenome: "Preso",
    estado: "SP",
    cidade: "SCS"
}
// informações especificas 
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.sobrenome)

//TODAS AS INFORMAÇÕES//
for(let chave in pessoa){
    console.log(chave + " : " + pessoa[chave])
}