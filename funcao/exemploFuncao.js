function saudacao(){
    let NomePessoa = prompt("Digite seu nome: ")

    let horaAtual = new Date().getHours()

    if(horaAtual > 6 && horaAtual < 13){
        alert("Bom dia " + NomePessoa)
    }else if(horaAtual>= 13 && horaAtual <18){
        alert("Boa tarde " + NomePessoa)
    }else{
        alert("Boa noite " + NomePessoa)
    }
}

saudacao()