// Accessing a property of an object
/* const menu = {
    selector: '.main',
};

console.log(menu.selector); */

//--
// Arrow Functions
/* function upperName(name) {
    return name.toUpperCase();
}
console.log(upperName('haroldo')); */

/* // const lowerName = (name) => {return name.toLowerCase();}
const lowerName = (name) => name.toLowerCase()
console.log(lowerName('LEONARDO')); */

//--
// Destructuring an object
/* const handleMouse = (event) => {
    // const x = event.clientX;
    // const y = event.clientY;
    // console.log(x, y);

    const { clientX, clientY } = event;
    console.log(clientX, clientY);
};

document.addEventListener('click', handleMouse); */

//--
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
