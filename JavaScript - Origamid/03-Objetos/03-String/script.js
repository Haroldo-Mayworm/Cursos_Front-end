const lanche = 'brioche';
const liquido = new String('Água');
const ano = new String(2018);

// str.length
const comida = 'Pizza';
const frase = 'A melhor comida';

comida.length;
frase.length;

comida[0];
frase[0];
frase[frase.length - 1];

// str.charAt(n)
const linguagem = 'JavaScript';

linguagem.charAt(0);
linguagem.charAt(2);
linguagem.charAt(linguagem.length - 1);

// str.concat()
const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase2.concat(linguagem, '!!');

// str.includes()
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta);
fruta.includes(listaFrutas);

// str.endsWith() e str.startsWith()
const fruta = 'Banana';

fruta.endsWith('nana');
fruta.startsWith('Ba');
fruta.startsWith('na');

// str.slice()
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3);
transacao2.slice(0, 3);
transacao3.slice(0, 3);

transacao1.slice(12);
transacao1.slice(-4);
transacao1.slice(3, 6);

// str.indexOf() e str.lastIndexOf()
const instrumento = 'Guitarra';

instrumento.indexOf('r');
instrumento.lastIndexOf('r');
instrumento.indexOf('ta');

// str.repeat()
const frase = 'Ta';

frase.repeat(5);

// str.replace()
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.');

// str.split()
const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

// str.toLowerCase() e str.toUpperCase()
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

sexo1.toLowerCase() === 'feminino';
sexo2.toLowerCase() === 'feminino';
sexo3.toLowerCase() === 'feminino';

// str.trim(), str.trimStart(), str.trimEnd()
const valor = '  R$ 23.00   ';
valor.trim();
valor.trimStart();
valor.trimEnd();
