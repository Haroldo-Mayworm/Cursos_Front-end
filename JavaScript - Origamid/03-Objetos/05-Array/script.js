const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [
    new String('Tipo 1'),
    [
        'Carro',
        'Portas',
        {
            cor: 'Azul',
            preco: 2000,
        },
    ],
    function andar(nome) {
        console.log(nome);
    },
];

dados[2]('Ford');
dados[1][2].cor;

// Construção de Arrays
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1];
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length;

// Array.from()
let li = document.querySelectorAll('li');
li = Array.from(li);

const carros = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 4,
};

const carrosArray = Array.from(carros);

// Array.isArray()
let li = document.querySelectorAll('li');
Array.isArray(li); // false

li = Array.from(li);
Array.isArray(li); // true

// Array.of(), Array() e new Array()
Array.of(10);
Array.of(1, 2, 3, 4);

new Array(5);
Array(5);
Array(1, 2, 3, 4);

// .length
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length;

frutas[0].length;
frutas[1].length;
frutas[2].length;
frutas[2][0].length;

// .sort()
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
instrumentos;

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades;

// .unshift() e .push()
const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia');
carros;

carros.push('Ferrari'); // 6
carros;

// .shift() e .pop()
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift();
carros;

const ultimoCarro = carros.pop();
carros;

// .reverse()
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse();

// .splice()
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // []
carros;

carros.splice(3, 2, 'Ferrari');
carros;

// .copyWithin()
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);

// .fill()
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);

// .concat()
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');

// .includes(), .indexOf() e .lastIndexOf()
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css');
linguagens.includes('ruby');
linguagens.indexOf('python');
linguagens.indexOf('js');
linguagens.lastIndexOf('js');

// .join()
const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.join();
linguagens.join(' ');
linguagens.join('-_-');

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');

htmlString = htmlString.join('h1');

// .slice()
const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3);
linguagens.slice(1, 4);

const cloneLinguagens = linguagens.slice();
