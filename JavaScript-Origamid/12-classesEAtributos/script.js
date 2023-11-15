// ClassList
const titulo = document.querySelector(".titulo");

titulo.className; // Retorna a string -> 'titulo'
titulo.classList; // Retorna a lista de classes
titulo.classList.add("ativo"); // Adiciona um classe
titulo.classList.add("ativo", "principal", "novo"); // Adiciona mais classes
titulo.classList.remove("ativo", "novo"); // Remove Classes
titulo.classList.contains("principal"); // Retorna true ou false, caso haja ou não a classe

// Attributes
const txt = document.querySelector(".texto");

txt.attributes; // Retorna todos os atributos 

// GetAttribute e SetAttribute
const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt
img.hasAttributes(); // true / false se tem algum atributo