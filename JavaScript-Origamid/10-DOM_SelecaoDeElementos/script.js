// Id
const animaisSection = document.getElementById('animais'); // Retorna null caso não exista

// Tags
const ul = document.getElementsByTagName('ul'); // Seleciona todas as <ul>, retorna uma HTMLCollection

// Class
const gridSection = document.getElementsByClassName('grid-section'); // Seleciona pela classe, retorna uma HTMLCollection

// Seletor geral e único
const animaisId = document.querySelector('#animais');
const animaisClass = document.querySelector('.dog');
const animaisTag = document.querySelector('h1');
// Busca dentro do Ul apenas
const primeiroUl = document.querySelector('ul');
//const navItem = primeiroUl.querySelector('li');
//const ultimoItem = primeiroUl.querySelector('.animais-lista li:last-child');

// Seletor geral com todos
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');


// Exercícios
// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img')
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH1 = document.querySelector('.animais-descricao h2:nth-child');

// Selecione o último p do site
const lastP = document.querySelector('p: last-child');