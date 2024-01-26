alert('Bem-vindo ao jogo do número secreto!');

let numberSecretMax = 75;
let numberSecret = parseInt(Math.random() * numberSecretMax + 1);
let numberTyped;
let attempts = 1;

while (numberTyped != numberSecret) {
  numberTyped = Number(prompt(`Choose a number from 1 - ${numberSecretMax}`));

  if (!numberTyped) {
    alert(`Invalid number, type a number from 1 - ${numberSecretMax}`);
  } else {
    if (numberTyped == numberSecret) {
      alert(`You are right! (Secret number: ${numberSecret} - Numbers of attempts: ${attempts})`);
    } else if (numberTyped > numberSecret) {
      alert(`${numberTyped} is greater than the secret number`);
    } else {
      alert(`${numberTyped} is smaller than the secret number`);
    }
    attempts++;
  }
}
