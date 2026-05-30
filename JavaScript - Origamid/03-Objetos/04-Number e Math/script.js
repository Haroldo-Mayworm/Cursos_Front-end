const ano = 2018;
const preco = new Number(99);

// Number.isNaN() e Number.isInteger()
Number.isNaN(NaN);
Number.isNaN(4 + 5);

Number.isInteger(20);
Number.isInteger(23.6);

// Number.parseFloat() e Number.parseInt()
parseFloat('99.50');
Number.parseFloat('99.50');
Number.parseFloat('100 Reais');
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10);
parseInt(5.43434355555, 10);
Number.parseInt('100 Reais', 10);

// n.toFixed()
const valor = 2.99;
valor.toFixed();

const carro = 1000.455;
carro.toFixed(2);

const valor2 = 1499.49;
valor2.toFixed();

// n.toString()
const preco = 2.99;
preco.toString(10);

// n.toLocaleString()
const preco = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

// // Math
Math.PI
Math.E
Math.LN10

// Math.abs(), Math.ceil(), Math.floor() e Math.round()
Math.abs(-5.5);

Math.ceil(4.8334);
Math.ceil(4.3);

Math.floor(4.8334);
Math.floor(4.3);

Math.round(4.8334);
Math.round(4.3);

// Math.max(), Math.min() e Math.random()
Math.max(5,3,10,42,2);
Math.min(5,3,10,42,2);

Math.random(); // 0.XXX
Math.floor(Math.random() * 100);
Math.floor(Math.random() * 500);

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;

// 
















