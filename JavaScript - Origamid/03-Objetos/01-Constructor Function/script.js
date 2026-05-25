/* 
const carro = {
    marca: 'Marca',
    preco: 0,
};

const miura = carro;
miura.marca = 'Miura';
miura.preco = 5000;
 */

function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const miura = new Carro();
miura.marca = 'Miura';
miura.preco = 5000;

const puma = new Carro();
puma.marca = 'Puma';
puma.preco = 3000;

//
function Motocicleta(_marca, _preco) {
    this.marca = _marca;
    this.preco = _preco;
}

const monark = new Motocicleta('Monark', 10000);
const vespa = new Motocicleta('Vespa', 10000);

const harley = new Motocicleta();
harley.marca = 'Harley';
harley.preco = 50000;

//
function CarroComJuros(_marca, _precoInicial) {
    const taxa = 1.5;
    const precoFinal = _precoInicial * taxa;
    this.marca = _marca;
    this.preco = precoFinal;
}

const gurgel = new CarroComJuros('Gurgel', 10000);

////
/* 
const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativar() {
        this.element().classList.add('Ativo');
    },
};
 */

function AdicionaClasseDom(_seletor, _classe) {
    const element = document.querySelector(_seletor);
    this.ativar = () => {
        element.classList.add(_classe);
    };
    this.desativar = () => {
        element.classList.remove(_classe);
    };
}

const primeiroItem = new AdicionaClasseDom('li', 'ativo');
primeiroItem.ativar();

const ultimoItem = new AdicionaClasseDom('li:last-child', 'ativo');
ultimoItem.desativar();
