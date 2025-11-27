//Crie uma variavel que busque pelo nome de tag (section)
let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p");//cria um elemento no meu html
let formularioElemento = document.getElementById("formulario");
let labelElemento = document.getElementById("label");
novoParagrafo.textContent = "Paragrafo criado via JS";//Põe um conteudo no P

secao[0].appendChild(novoParagrafo);

//Remover a tag label 
formularioElemento.removeChild(labelElemento); // remove o elemento label do formulario
