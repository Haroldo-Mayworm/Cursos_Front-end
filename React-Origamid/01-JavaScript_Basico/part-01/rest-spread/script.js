// Rest operador (...)
/* const showList = (company, customers) => {
        customers.forEach(customers => {
            console.log(customers, company);
        });
}
showList('Google', ['Pedro', 'Felipe']); */
/* const showList = (company, ...customers) => {
        customers.forEach(customers => {
            console.log(customers, company);
        });
}
showList('Google', 'Ricardo', 'Gabriel', 'Flávio'); */

//--
// Spread operador (...)
/* const numbers = [15, 10, 20, 5];
// const biggerNumber = Math.max(numbers); // Return NaN
const biggerNumber = Math.max(...numbers);
console.log(biggerNumber);

// const otherNumbers = [1, numbers, 100, 200]; // Array inside another
const otherNumbers = [1, ...numbers, 100, 200];
console.log(otherNumbers); */

const car = {
    color: 'blue',
    model: 'suv',
};
// car.year = 2018; // Modify the original object
console.log(car);
const newCar = {
    ...car,
    ano: 2015,
}; // Create a new object
console.log(newCar);
