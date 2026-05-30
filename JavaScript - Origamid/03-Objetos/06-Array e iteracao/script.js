// .forEach()
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

// Modificar a Array
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

// .map()
const carros = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros.map((item) => {
  return 'Carro ' + item;
});

// .reduce()
const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual;
});

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);

// .some()
const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
});

function maiorQue100(numero) {
  return numero > 100;
}
const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100);

// .every()
const frutas = ['Banana', 'Pêra', 'Uva', ''];
const arraysCheias = frutas.every((fruta) => {
  return fruta; 
});

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(x => x > 3);

// .find() e .findIndex()
const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva'; 
});

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45);

// .filter()
const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]

































