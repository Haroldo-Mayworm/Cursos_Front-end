// Objeto é um conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
let tShirt = {
    brand: 'Nike',
    color: 'blue',
    size: 'G',
    isComfortable: true,
};
tShirt.brand; // Nike

let square = {
    sides: 4,
    area: function (side) {
        return side * side;
    }, // Primeiro modo de declarar um função no objeto
    perimeter(side) {
        return this.sides * side;
    }, // Segundo modo
};
