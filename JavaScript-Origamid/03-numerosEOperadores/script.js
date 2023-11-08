// Operadores aritméticos
let sum = 10 + 5; // 15
let subtraction = 10 - 5; // 5
let multiplication = 10 * 2; // 20
let division = 10 / 2; // 5
let exponent = 5 ** 2; // 25
let module = 5 % 2; // 1


// Operadores com strings
let sSum = '10' + 5; // '105'
// A soma (+) em strings serve para concatenar e não somar
let sSubtraction = '10' - 5; // 5
let sMultiplication = '10' * '2'; // 20
let sDivision = 'Comprei 10' / 2; // NaN (Not a Number)
// Se for possível converter a string para number, será realizada a operação

// É possível verificar se uma variável é NaN ou não com a função isNaN()
console.log(isNaN(sDivision));


// A ordem das operações importa. Começa por multiplicação e divisão, depois por soma e subtração.
let exp1 = 30 + 10 * 3; // 60
let exp2 = (30 + 10) * 3; // 120
let exp3 = 10 * 3 / 2; // 15
let exp4 = 10 + 10 * 2 + 20 / 2; // 40


// Operadores aritméticos unitários
// // Pos-incremento (Realiza a ação e no fim é realizado o incremento)
let inc = 5;
console.log(inc++); // 5
console.log(inc); // 6
// // Pre-incremento (Realiza o incremento e depois a ação)
let inc2 = 5;
console.log(++inc2); // 6
console.log(inc2); // 6

// // Pos-decremento (Realiza a ação e no fim é realizado o decremento)
let dec = 5;
console.log(dec--); // 5
console.log(dec); // 4
// // Pre-decremento (Realiza o decremento e depois a ação)
let dec2 = 5;
console.log(--dec2); // 4
console.log(dec2); // 4


// O '+' e '-' tenta transformar o valor da variável em número
let phrase = 'Isso é um teste';
+phrase; // NaN
-phrase; // NaN

let age = '28';
+age; // 28 (número)
-age; // -28 (número)
console.log(+age + 5); // 33 

let haveCollege = true;
console.log(+haveCollege); // 1


// Exercícios
// Qual o resultado da seguinte expressão?
let total = 10 + 5 * 2 / 2 + 20;
console.log(total); // 35

// Crie duas expressões que retornem NaN
let expNaN1 = 'R$ 100' / 2, expNaN2 = 'Uma frase';

// Somar a string '200' com o número 50 e retornar 250
let number1 = '200', number2 = 50;
let sumFinal = +number1 + number2;

// Incremente o número 5 e retorne o seu valor incrementado
let incFinal = 19;
console.log(++incFinal);

// Como dividir o peso por 2?
let numberWeight = '80';
let unit = 'kg';
let weight = numberWeight + unit; // '80kg'
let weightForTwo = weight / 2; // NaN (Not a Number)

// let weightForTwo = numberWeight / 2; <- Forma correta