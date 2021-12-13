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

const conCatArr = cars.concat(rname);
console.log(conCatArr.toString());

//spread operator
const catArr = [...cars, ...rname];
console.log(catArr);

//iteration
const keys = cars.keys();
let text = "";
for(x of keys){
    text += x;
}
console.log(text);

cars.forEach(cat);
function cat(value, index, array) {
    text += value;   
}
console.log(text);

cars.map(addVal)
function addVal(value) {
    return value + "<br>";
}
    
const Numbers = [10,20,30];
const over10 = Numbers.filter(over10fn);
function over10fn(value) {
    return value > 10;    
}
console.log(over10);

let sum = Numbers.reduce(addfn);
function addfn(total, value) {
    return total + value;    
}
console.log(sum);

let boolOver10 = Numbers.every(over10fn);
console.log(boolOver10);
boolOver10 = Numbers.some(over10fn);
console.log(boolOver10);

let first = Numbers.find(over10fn);
console.log(first);
let firstKey = Numbers.findIndex(over10fn);
console.log(firstKey);

const alphabet = Array.from("ABCDEF");
console.log(alphabet);