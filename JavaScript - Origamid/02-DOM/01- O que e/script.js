// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

window.innerHeight; // Retorna a altura do browser;
document.body; // Retorna o body

// Window e document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// window.alert('Erro'); // Exibe um prompt na tela com a mensagem 'Erro'
document.querySelector('h1'); // Seleciona o primeiro h1 do html

// Node
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. 
// Element é um tipo de objeto Node.

// const title = document.querySelector('h1');
const title = document.querySelector('.mainTitle');

title.innerText; // retorna o texto
title.classList; // retorna as classes;
title.id; // retorna o id;

console.log(title.classList);

// Função básico DOM-Node
function h1Callback () {
    console.log('Clicou no ' + title.innerText);
}

title.addEventListener('click', h1Callback);
