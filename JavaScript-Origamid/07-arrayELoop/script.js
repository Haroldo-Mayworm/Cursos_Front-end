// Arrays
// Array é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
let cars = ['Ford', 'Honda', 'Tesla', 'Mercedes', 'Toyota'];
cars[0] // ford

// Métodos e propriedades em uma array
cars.pop(); // Remove o ultimo item e retorna. No caso, 'Toyota'.
cars.push('Nissan') // Adiciona um novo item ao final da array.


// Loops
// Fazem algo repetidamente até que uma condição seja atingida.
// For
for (let i = 0; i <= 10; i++) {
  console.log(`For - ${i}`)
}

// while
let i = 0;
while (i <= 10) {
  console.log(`while - ${i}`)
  i++
}


// Arrays e loops juntos
let cellPhones = ['Samsung', 'Apple', 'Xiaomi', 'Motorola'];
for (let i = 0; i < cellPhones.length; i++) {
  console.log(`For e Array - ${cellPhones[i]}`);
}


// Foreach
// É um método que executa uma função para cada item da Array.
cellPhones.forEach(function(item) {
  console.log(`ForEach - ${item}`);
})


// Exercícios
// Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002
let worldCup = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < worldCup.length; i++) {
  console.log(`O Brasil ganhou a copa do mundo de ${worldCup}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var fruits = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  if (fruits[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
let lastFruit = fruits[fruits.length - 1];