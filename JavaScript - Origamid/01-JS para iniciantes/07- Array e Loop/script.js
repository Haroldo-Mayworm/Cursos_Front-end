// Arrays
// Array é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
let cars = ['Ford', 'Honda', 'Tesla', 'Mercedes', 'Toyota'];
cars[0]; // ford

// Métodos e propriedades em uma array
cars.pop(); // Remove o ultimo item e retorna. No caso, 'Toyota'.
cars.push('Nissan'); // Adiciona um novo item ao final da array.

// Loops
// Fazem algo repetidamente até que uma condição seja atingida.
// For
for (let i = 0; i <= 10; i++) {
    console.log(`For - ${i}`);
}

// while
let i = 0;
while (i <= 10) {
    console.log(`while - ${i}`);
    i++;
}

// Arrays e loops juntos
let cellPhones = ['Samsung', 'Apple', 'Xiaomi', 'Motorola'];
for (let i = 0; i < cellPhones.length; i++) {
    console.log(`For e Array - ${cellPhones[i]}`);
}

// Foreach
// É um método que executa uma função para cada item da Array.
cellPhones.forEach(function (item) {
    console.log(`ForEach - ${item}`);
});
