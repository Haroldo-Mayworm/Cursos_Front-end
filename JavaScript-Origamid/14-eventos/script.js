// addEventListener
// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.
const title = document.querySelector(".titulo");

title.addEventListener("click", function () {
  console.log("Clicou");
});

// É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
const txt = document.querySelector(".texto");

function callback() {
  console.log("Clicou");
}
txt.addEventListener("click", callback);
txt.addEventListener("click", callback()); // Erro: Função ativa antes de realmente clicar

txt.addEventListener("click", function () {
  console.log("Clicou");
});

txt.addEventListener("click", () => {
  console.log("Clicou");
});

// O primeiro parâmetro do callback é referente ao evento que ocorreu.
function callback(event) {
  console.log(event);
}

const container = document.querySelector('.container');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget);
  console.log(target);
  console.log(type);
}

container.addEventListener('click', executarCallback);

// Diferentes Eventos
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

// Keyboard
function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}
window.addEventListener('keydown', handleKeyboard);

// forEach e eventos
const txts = document.querySelectorAll(".texto");

function txtValue(event) {
  console.log(txts);
}

txts.forEach((txt) => {
  txt.addEventListener('click', txtValue);
})