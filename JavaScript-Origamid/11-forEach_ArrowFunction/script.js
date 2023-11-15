/* const txts = document.querySelectorAll('p');

txts.forEach(function(item, index, array) {
    console.log(item);
    console.log(index);
})

// Transforma array-like em array
const txtsArray = Array.from(txts);

txtsArray.forEach(function(item, index, array) {
    console.log(item);
    console.log(index);
})


// Arrow Functions
const titles = document.querySelectorAll('.titulo');

titles.forEach((item) => {
    console.log(item);
})


// Particularidades
// parâmetro único não precisa de parênteses
titles.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
titles.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
titles.forEach(() => {
  console.log(i++);
});
 */

// Exercícios
// Mostre no console cada parágrafo do site
const txts = document.querySelectorAll('p');
txts.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
txts.forEach((item) => console.log(item.innerText));


// Como corrigir os erros abaixo:
/* const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);*/
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index)
});

let i = 0;
imgs.forEach(() => console.log(i++));
imgs.forEach(() => i++);