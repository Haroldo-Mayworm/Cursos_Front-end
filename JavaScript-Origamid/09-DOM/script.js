// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

window.innerHeight; // Retorna a altura do browser;
document.body; // Retorna o body

// Window e document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.
// window.alert('Erro'); // Exibe um prompt na tela com a mensagem 'Erro'
document.querySelector('h1'); // Seleciona o primeiro h1 do html


// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const title = document.querySelector('h1');

title.innerText; // retorna o texto
title.classList; // retorna as classes;
title.id; // retorna o id;


// Exercícios
// Retorne o url da página atual utilizando o objeto window
let url = window.location.href;

// Seleciona o primeiro elemento da página que possua a classe ativo
let elementActive = document.querySelector('.ativo');

// Retorne a linguagem do navegador
let navigatorLanguage = navigator.language;

// Retorne a largura da janela 
let widthWindow = window.innerWidth;