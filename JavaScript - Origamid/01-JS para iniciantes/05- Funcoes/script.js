function squareArea(side) {
    return side * side;
}
squareArea(3); // 9
squareArea(5); // 25

function threeMultiplier() {
    return 3;
}
var total = 10 * threeMultiplier(); // 30

// Parâmetros e Argumentos
// Ao criar a função, você pode definir parâmetros,
// e ao executar a função, voce pode passar os argumentos.
function imc(weight, height) {
    const imc = weight / (height * 2);
    return imc;
}
imc(95, 1.81);
// 'peso' e 'altura' são parâmetros e '95' e '1.81' são argumentos

// Argumentos pode ser funções
addEventListener('click', function () {
    console.log('Clicou');
});
