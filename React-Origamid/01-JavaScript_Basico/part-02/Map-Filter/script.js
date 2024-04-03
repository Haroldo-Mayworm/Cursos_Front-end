const prices = ['Credit', 'R$ 200', 'R$ 400', 'Accounts Pay', 'R$ 300', 'R$ 400', 'My data'];

// Filter
const pricesFilter = prices.filter((price) => price.includes('R$'));
console.log(pricesFilter);

// Map
const pricesNumbers = pricesFilter.map((price) => Number(price.replace('R$ ', '')));
console.log(pricesNumbers);
