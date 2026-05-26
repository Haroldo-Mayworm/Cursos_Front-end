function Pessoa(_nome, _idade) {
    this.nome = _nome;
    this.idade = _idade;
    this.andar = function () {
        return this.nome + ' andou pelo objeto';
    };
}

Pessoa.prototype.andar = function () {
    return this.nome + ' andou pelo prototype';
};

const haroldo = new Pessoa('Haroldo', 24);

console.log(Pessoa.prototype);
console.log(haroldo.prototype);
