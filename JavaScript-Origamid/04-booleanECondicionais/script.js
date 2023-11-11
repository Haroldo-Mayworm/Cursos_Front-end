// Existem dois valores booleanos 'false' ou 'true'
let haveCar = true, haveBike = false;


// Condicionais com 'if' simples
let haveBus = false;

if (haveBus) {
  console.log('Possui um ônibus!');
} else {
  console.log('Não possui um ônibus!');
}

// Condicionais com 'if' composto
let adult = true;
let kid = false;

if (adult) {
  console.log('Permitido');
} else if(kid) {
  console.log('Permitido somente acompanhado');
} else {
  console.log('ERRO');
}


// Switch
let favoriteColor = 'Azul';

switch (favoriteColor) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}


// Exercícios
// Verifique se a sua idade é maior do que a de algum parente dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let myAge = 22;
let brotherAgr = 40;

if (myAge > brotherAgr) {
  console.log('É maior');
} else if (myAge == brotherAgr) {
  console.log('É igual');
} else if (myAge < brotherAgr) {
  console.log('É menor');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // 'False' -> Por conta da diferença do 'G' para o 'g' 