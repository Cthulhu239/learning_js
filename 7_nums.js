const balance = new Number(100); //as object of type number
console.log(typeof (balance));
console.log(balance);


console.log(typeof (balance.toString()))
console.log(balance.toFixed(2)); //precision value

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)) //124

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


//Math
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.57));
console.log(Math.floor(1.32));
//many present in math library such as ceil,min,max

console.log(Math.random()); //0 - 1
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));