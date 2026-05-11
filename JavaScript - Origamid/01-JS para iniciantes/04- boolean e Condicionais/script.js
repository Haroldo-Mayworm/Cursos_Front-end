// Existem dois valores booleanos 'false' ou 'true'
let haveCar = true,
    haveBike = false;

// Condicionais com 'if' simples
let haveBus = false;

if (haveBus) {
    console.log('Possui um ônibus!');
} else {
    console.log('Não possui um ônibus!');
}

// Condicionais com 'if' composto
let adult = true;
let kid = false;

if (adult) {
    console.log('Permitido');
} else if (kid) {
    console.log('Permitido somente acompanhado');
} else {
    console.log('ERRO');
}

// Switch
let favoriteColor = 'Azul';

switch (favoriteColor) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos');
}
