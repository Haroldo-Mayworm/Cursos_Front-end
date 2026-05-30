const carro = {
    marca: 'Ford',
    ano: 2018,
};

const pessoa = new Object({
    nome: 'Haroldo',
    idade: 24,
});

// Object.create()
const carro = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this;
    },
    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`;
    },
    buzinar() {
        return this.marca + ' buzinou';
    },
};

const honda = Object.create(carro);
honda.init('Honda').acelerar();

// Object.assign()
const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
};

const moto = {
    rodas: 2,
    capacete: true,
};

const carro = {
    rodas: 4,
    mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);

// Object.defineProperties()
const moto = {};
Object.defineProperties(moto, {
    rodas: {
        value: 2,
        configurable: false,
        enumerable: true,
    },
    capacete: {
        value: true,
        configurable: true,
        writable: false,
    },
});

moto.rodas = 4;
delete moto.capacete;

// get e set
const moto = {};
Object.defineProperties(moto, {
    velocidade: {
        get() {
            return this._velocidade;
        },
        set(valor) {
            this._velocidade = 'Velocidade ' + valor;
        },
    },
});

moto.velocidade = 200;

// Object.getOwnPropertyDescriptors()
Object.getOwnPropertyDescriptors(Array);

Object.getOwnPropertyDescriptors(Array.prototype);

Object.getOwnPropertyDescriptor(window, 'innerHeight');

// Object.keys(), Object.values() Object.entries()
const carro = {
    marca: 'Ford',
    ano: 2018,
};
Object.keys(carro);
Object.values(carro);
Object.entries(carro);

// Object.getOwnPropertyNames()
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro = {
    marca: 'Ford',
    ano: 2018,
};
Object.getOwnPropertyNames(carro);
