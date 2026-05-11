// Tipo de dados
var team = 'Flamengo'; // String
var age = 128; // Number
var haveStadium = true; // Boolean
var rival; // Undefined
var trainer = null; // Null
var symbol = Symbol(); // Symbol
var newObject = {}; // Object

// Verificando o tipo
console.log(typeof age);
// OBS: typeof null retorna object

// Concatenação de variáveis
const firstName = 'Bruno';
const lastName = 'Silva';
let ageCurrent = 21;
let goals = 1000;

let fullName = firstName + ' ' + lastName;
let txtConc = `Meu nome é ${fullName} e eu tenho ${ageCurrent}`;
let pele = 'Pele fez mais de ' + goals + ' gols!';
