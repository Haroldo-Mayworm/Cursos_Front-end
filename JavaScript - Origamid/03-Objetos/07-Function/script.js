function areaQuadrado(lado) {
    return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4');

// .length e .name
function somar(n1, n2) {
    return n1 + n2;
}

somar.length; // Argumentos
somar.name;

// .call()
const carro = {
    marca: 'Ford',
    ano: 2018,
};

function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano);
}

descricaoCarro();
descricaoCarro.call();
descricaoCarro.call(carro);

// .apply()
const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// .bind()
const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function (item) {
    return item.classList.contains('ativo');
});

filtrarLi();
