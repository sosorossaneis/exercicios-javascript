let elementosPorClass = document.getElementsByClassName("texto");

let elementoPorId = document.getElementById("formulario");

let elementoPorTag = document.getElementsByTagName("p")


//texto
console.log(elementosPorClass[1]);

//formulario
console.log(elementoPorId);

//p/tag
console.log(elementoPorTag);

console.log(elementoPorTag[0].innerHTML)

elementoPorTag[0].textContent

//Modificando
elementoPorTag[0].textContent = "Vídeo engraçado";
elementoPorTag[0].style.color = "red";
elementoPorTag[0].style.fontSize = "30px";

//---------D-E-S-A-F-I-O-S-----------------------------//
//exiba o segundo elemento da variálvel elementos
//crie uma variavel que tenha o valor de um elemento buscado pelo nome da tag
//acesse a propriedade innerText da variavel elementoPorTag(é um Array,  vao ter que acessar a possição do elemento) e exiba mp console.log
//acesse a propriedade style.color e atribui (=) uma cor red em formato de string para a poscição 0 da variavel elementoPorTag