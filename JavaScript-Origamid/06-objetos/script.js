// Objeto é um conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
let tShirt = {
  brand: 'Nike',
  color: 'blue',
  size: 'G',
  isComfortable: true,
}
tShirt.brand; // Nike


let square = {
  sides: 4,
  area: function(side) {return side * side;}, // Primeiro modo de declarar um função no objeto
  perimeter(side) {return this.sides * side}, // Segundo modo
}

//Exercícios
// Crie um objeto com os seus dados pessoais.
// Deve possui pelo menos duas propriedades nome e sobrenome.
let myDatas = {
  name: 'Haroldo',
  lastName: 'Mayworm',
  age: 22,
  isTall: true,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
myDatas.fullName = function() {return `${this.name} ${this.lastName}`};

// Modifique o valor da propriedade preco para 3000
let carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
let dog = {
  breed: 'Labrador',
  color: 'Preto',
  age: 10,
  latir: function(personGender) {
    if (personGender = 'homem') {
      return 'Late'
    } else {
      return 'Não late'
    }
  }
}