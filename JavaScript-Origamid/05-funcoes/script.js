function squareArea(side) {
  return side * side;
}
squareArea(3); // 9
squareArea(5); // 25

function twoMultiplier() {
  return 3;
}
var total = 10 * twoMultiplier(); // 30

// Parâmetros e Argumentos
// Ao criar a função, você pode definir parâmetros,
// e ao executar a função, voce pode passar os argumentos.
function imc(weight, height) {
  const imc = weight / (height * 2);
  return imc;
}
imc(95, 1.81);
// 'peso' e 'altura' são parâmetros e '95' e '1.81' são argumentos

// Argumentos pode ser funções
addEventListener('click', function () {
  console.log('Clicou');
});

// Exercícios
// Crie uma função para verificar se um valor é Truthy
function isTruthy(data) {
  return !!data;
} // !! confirma o tipo de dado;

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function squarePerimeter(side) {
  return side * 4;
}

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Crie uma função que verifica se um número é par
function isEvenNumber(number) {
  var module = number % 2;
  if (module == 0) {
    return true;
  } else {
    return false;
  }
}

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function typeData(data) {
  return typeof(data);
}

// addEventListener é uma função nativa do JavaScript,
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback,
// utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log(fullName('Haroldo', 'Mayworm'));
})

// Corrija o erro abaixo
/* function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20); */

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);