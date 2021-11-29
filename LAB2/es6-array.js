const cars = ["Toyota","Honda","Mazda"];
const fruits = [];
fruits[0] = "Appple";
fruits[3] = "Maggo";
const rname = new Array("Win", "Jhon", "James");
console.log(fruits);

const carpop = cars.pop();
console.log(carpop);
console.log(cars);

cars.push("Kubota");
console.log(cars);

const carshift = cars.shift();
console.log(carshift);
console.log(cars);

cars.unshift("Mazda");
console.log(cars);

const slideArr = cars.slice(0,2);
console.log(slideArr);