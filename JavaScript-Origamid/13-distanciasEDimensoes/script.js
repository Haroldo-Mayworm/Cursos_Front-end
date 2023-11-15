const section = document.querySelector(".container");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

section.clientWidth; // width + padding
section.offsetWidth; // width + padding + border
section.scrollWidth; // width total, mesmo dentro de scroll

section.offsetTop; // Distância entre o topo do elemento e o topo da página
section.offsetLeft; // Distância entre o canto esquerdo do elemento e o canto esquerdo da página

// getBoundingClientRect
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// Window
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

//matchMedia
// Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}